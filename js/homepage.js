class StreamFlixHomepage {
    constructor() {
        this.channels = [];
        this.featuredChannels = [];
        this.continueWatching = [];
        this.popularChannels = [];
        this.allChannelsSource = [];
        this.allChannelsVisibleCount = 0;
        this.allChannelsPageSize = 0;
        this.allChannelsChunkSize = 50;
        this.playlists = {
            global: 'https://iptv-org.github.io/iptv/index.m3u',
            india: 'https://iptv-org.github.io/iptv/countries/in.m3u'
        };
        this.selectedPlaylist = localStorage.getItem('streamflix-preferred-playlist') || 'global';
        
        this.initializeElements();
        this.bindEvents();
        this.loadChannels();
        this.setupSlideshow();
    }

    initializeElements() {
        this.watchNowBtn = document.getElementById('watch-now');
        this.browseChannelsBtn = document.getElementById('browse-channels');
        this.browseChannelsTopBtn = document.getElementById('browse-channels-top');
        this.searchInput = document.getElementById('search-input');
        this.allChannelsGrid = document.getElementById('all-channels');
        this.loadMoreHomeBtn = document.getElementById('load-more-home');
        this.continueWatchingRow = document.getElementById('continue-watching');
        this.popularChannelsRow = document.getElementById('popular-channels');
        this.categoryCards = document.querySelectorAll('.category-card');
        this.homePlaylistSelect = document.getElementById('home-playlist-select');

        if (this.homePlaylistSelect) {
            this.homePlaylistSelect.value = this.selectedPlaylist;
        }
    }

    bindEvents() {
        if (this.watchNowBtn) {
            this.watchNowBtn.addEventListener('click', () => this.startWatching());
        }
        
        if (this.browseChannelsBtn) {
            this.browseChannelsBtn.addEventListener('click', () => this.scrollToChannels());
        }

        if (this.browseChannelsTopBtn) {
            this.browseChannelsTopBtn.addEventListener('click', () => this.scrollToChannels());
        }
        
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => this.filterChannels(e.target.value));
        }

        if (this.loadMoreHomeBtn) {
            this.loadMoreHomeBtn.addEventListener('click', () => this.loadMoreAllChannels());
        }

        if (this.homePlaylistSelect) {
            this.homePlaylistSelect.addEventListener('change', (e) => {
                const nextPlaylist = e.target.value;
                this.setPreferredPlaylist(nextPlaylist);
                this.loadChannels({ forceRefresh: true });
            });
        }
        
        // Category card clicks
        this.categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const category = card.dataset.category;
                this.filterByCategory(category);
            });
        });
        
        // Setup row navigation
        this.setupRowNavigation();
        
        // Event delegation for play buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.play-button')) {
                const button = e.target.closest('.play-button');
                const channelId = button.dataset.channelId;
                console.log('🎮 Play button clicked, channel ID:', channelId);
                if (channelId && window.homepage) {
                    window.homepage.playChannel(channelId);
                } else {
                    console.error('❌ Could not play channel - missing data or homepage object');
                }
            }
        });
    }

    getChannelCacheKey() {
        return `streamflix-channels-${this.selectedPlaylist}`;
    }

    setPreferredPlaylist(type) {
        if (!this.playlists[type]) return;
        this.selectedPlaylist = type;
        localStorage.setItem('streamflix-preferred-playlist', type);
    }

    async loadChannels(options = {}) {
        const { forceRefresh = false } = options;
        try {
            // Load from localStorage first
            const cacheKey = this.getChannelCacheKey();
            const cachedChannels = localStorage.getItem(cacheKey);
            if (cachedChannels && !forceRefresh) {
                this.channels = JSON.parse(cachedChannels);
                this.processChannels();
                return;
            }
            
            const playlistUrl = this.playlists[this.selectedPlaylist] || this.playlists.global;
            console.log(`📡 Loading ${this.selectedPlaylist} playlist from homepage...`);
            const response = await fetch(playlistUrl);
            const playlistText = await response.text();
            
            this.parsePlaylist(playlistText);
            localStorage.setItem(cacheKey, JSON.stringify(this.channels));
            this.processChannels();
        } catch (error) {
            console.error('Error loading channels:', error);
            this.showErrorMessage('Failed to load channel list');
        }
    }

    parsePlaylist(playlistText) {
        const lines = playlistText.split('\n');
        this.channels = [];
        let currentChannel = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            if (line.startsWith('#EXTINF:')) {
                const metadata = this.parseChannelMetadata(line);
                currentChannel = {
                    ...metadata,
                    url: '',
                    id: this.channels.length
                };
            } else if (line.startsWith('http') && currentChannel) {
                currentChannel.url = line;
                if (this.isValidStreamUrl(line)) {
                    this.channels.push(currentChannel);
                }
                currentChannel = null;
            }
        }
    }

    parseChannelMetadata(extinfLine) {
        const metadata = {};
        
        // Extract channel name (everything after the last comma)
        const nameMatch = extinfLine.match(/,(.*)$/);
        metadata.name = nameMatch ? nameMatch[1].trim() : 'Unknown Channel';
        
        // Extract group/category
        const groupMatch = extinfLine.match(/group-title="([^"]*)"/i);
        metadata.group = groupMatch ? groupMatch[1] : 'General';
        
        // Extract tvg-logo
        const logoMatch = extinfLine.match(/tvg-logo="([^"]*)"/i);
        metadata.logo = logoMatch ? logoMatch[1] : '';
        
        return metadata;
    }

    isValidStreamUrl(url) {
        return url && (url.includes('.m3u8') || url.includes('.mp4') || url.includes('.ts'));
    }

    processChannels() {
        // Select featured channels (first 10)
        this.featuredChannels = this.channels.slice(0, 10);
        
        // Select popular channels (random selection)
        this.popularChannels = this.shuffleArray([...this.channels]).slice(0, 15);
        
        // Get continue watching (from localStorage or recent)
        this.continueWatching = this.getContinueWatching();
        
        this.renderAllSections();
    }

    getContinueWatching() {
        const saved = localStorage.getItem('continue-watching');
        if (saved) {
            return JSON.parse(saved);
        }
        return this.channels.slice(0, 5); // Default to first 5 channels
    }

    renderAllSections() {
        this.renderFeaturedShowcase();
        this.renderContinueWatching();
        this.renderPopularChannels();
        this.renderAllChannels();
    }

    renderFeaturedShowcase() {
        // Could implement a rotating banner here
        console.log('Featured channels ready:', this.featuredChannels.length);
    }

    renderContinueWatching() {
        if (!this.continueWatchingRow) return;
        
        this.continueWatchingRow.innerHTML = this.continueWatching
            .map(channel => this.createChannelCard(channel, 'horizontal'))
            .join('');
    }

    renderPopularChannels() {
        if (!this.popularChannelsRow) return;
        
        this.popularChannelsRow.innerHTML = this.popularChannels
            .map(channel => this.createChannelCard(channel, 'horizontal'))
            .join('');
    }

    renderAllChannels() {
        if (!this.allChannelsGrid) return;
        this.resetAllChannelsPagination(this.channels);
    }

    resetAllChannelsPagination(channels) {
        this.allChannelsSource = channels;
        this.allChannelsPageSize = channels.length > 0 ? this.allChannelsChunkSize : 0;
        this.allChannelsVisibleCount = Math.min(this.allChannelsPageSize, channels.length);
        this.renderAllChannelsPage();
    }

    renderAllChannelsPage() {
        if (!this.allChannelsGrid) return;

        if (this.allChannelsSource.length === 0) {
            this.allChannelsGrid.innerHTML = `
                <div class="no-channels-message">
                    <i class="fas fa-search"></i>
                    <p>No channels found</p>
                </div>
            `;
            this.updateHomeLoadMoreButton();
            return;
        }

        const visibleChannels = this.allChannelsSource.slice(0, this.allChannelsVisibleCount);
        this.allChannelsGrid.innerHTML = visibleChannels
            .map(channel => this.createChannelCard(channel))
            .join('');
        this.updateHomeLoadMoreButton();
    }

    loadMoreAllChannels() {
        if (this.allChannelsVisibleCount >= this.allChannelsSource.length) return;
        this.allChannelsVisibleCount = Math.min(
            this.allChannelsVisibleCount + this.allChannelsPageSize,
            this.allChannelsSource.length
        );
        this.renderAllChannelsPage();
    }

    updateHomeLoadMoreButton() {
        if (!this.loadMoreHomeBtn) return;
        const hasMore = this.allChannelsVisibleCount < this.allChannelsSource.length;
        this.loadMoreHomeBtn.style.display = hasMore ? 'inline-flex' : 'none';
    }

    createChannelCard(channel, style = 'vertical') {
        const logo = channel.logo || this.getDefaultLogo(channel.group);
        const className = style === 'horizontal' ? 'channel-card-horizontal' : 'channel-card';
        const channelId = channel.id;
        const fallbackInitial = channel.name ? channel.name.charAt(0).toUpperCase() : 'TV';
        
        return `
            <div class="${className}" data-channel-id="${channelId}">
                <div class="channel-thumbnail">
                    <div class="channel-placeholder" style="background: ${this.getChannelColor(channel.group)}">
                        <i class="fas fa-tv"></i>
                        <span>${channel.name.charAt(0)}</span>
                    </div>
                    <div class="channel-logo-badge">
                        ${logo
                            ? `<img src="${logo}" alt="${channel.name} logo" onerror="this.parentElement.innerHTML='<span>${fallbackInitial}</span>'">`
                            : `<span>${fallbackInitial}</span>`}
                    </div>
                    <div class="channel-overlay">
                        <button class="play-button" data-channel-id="${channelId}">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                </div>
                <div class="channel-info">
                    <h3 class="channel-name">${channel.name}</h3>
                    <p class="channel-group">${channel.group}</p>
                </div>
            </div>
        `;
    }

    getChannelColor(group) {
        const colors = {
            'News': '#e50914',
            'Sports': '#00bfff',
            'Entertainment': '#ff6b6b',
            'Music': '#9b59b6',
            'Kids': '#2ecc71',
            'Movies': '#f39c12'
        };
        return colors[group] || '#6c757d';
    }

    getDefaultLogo(group) {
        // Could implement default logos based on category
        return '';
    }

    setupRowNavigation() {
        document.querySelectorAll('.row-arrow.prev').forEach(button => {
            button.addEventListener('click', (e) => {
                const row = e.target.closest('.row-section');
                this.scrollRow(row, 'left');
            });
        });
        
        document.querySelectorAll('.row-arrow.next').forEach(button => {
            button.addEventListener('click', (e) => {
                const row = e.target.closest('.row-section');
                this.scrollRow(row, 'right');
            });
        });
    }

    scrollRow(row, direction) {
        const content = row.querySelector('.row-content');
        const scrollAmount = 300;
        const scrollValue = direction === 'right' ? scrollAmount : -scrollAmount;
        content.scrollBy({ left: scrollValue, behavior: 'smooth' });
    }

    playChannel(channelId) {
        console.log('🎬 Playing channel:', channelId);
        const channel = this.channels.find(c => c.id == channelId);
        if (channel) {
            console.log('📺 Found channel:', channel.name, channel.url);
            // Save to continue watching
            this.saveContinueWatching(channel);
            
            // Navigate to player page with channel parameter
            console.log('🚀 Navigating to player page with channel:', channel.name);
            const query = new URLSearchParams({
                channel: String(channelId),
                stream: channel.url || '',
                name: channel.name || '',
                group: channel.group || '',
                logo: channel.logo || '',
                playlist: this.selectedPlaylist
            });
            const url = `./player.html?${query.toString()}`;
            console.log('📍 Navigation URL:', url);
            window.location.href = url;
        } else {
            console.error('❌ Channel not found:', channelId);
            console.log('📊 Available channels:', this.channels.map(c => ({id: c.id, name: c.name})));
            alert('Channel not found. Please try again.');
        }
    }

    saveContinueWatching(channel) {
        let continueList = this.getContinueWatching();
        // Remove if already exists, add to front
        continueList = continueList.filter(c => c.id !== channel.id);
        continueList.unshift(channel);
        // Keep only last 10
        continueList = continueList.slice(0, 10);
        localStorage.setItem('continue-watching', JSON.stringify(continueList));
    }

    startWatching() {
        // Open player without auto-selecting a channel.
        window.location.href = './player.html';
    }

    scrollToChannels() {
        document.querySelector('.all-channels-section').scrollIntoView({
            behavior: 'smooth'
        });
    }

    filterChannels(searchTerm) {
        const filtered = this.channels.filter(channel =>
            channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            channel.group.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.resetAllChannelsPagination(filtered);
    }

    filterByCategory(category) {
        const filtered = category === 'all' 
            ? this.channels 
            : this.channels.filter(channel => 
                channel.group.toLowerCase().includes(category.toLowerCase())
            );
        this.resetAllChannelsPagination(filtered);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    showErrorMessage(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <div class="error-content">
                <i class="fas fa-exclamation-circle"></i>
                <p>${message}</p>
            </div>
        `;
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    setupSlideshow() {
        // Could implement automatic slideshow rotation here
        console.log('Slideshow initialized');
    }
}

// Initialize homepage when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏠 StreamFlix Homepage Initializing...');
    
    // Make sure no conflicting player initialization occurs
    if (typeof window.netflixPlayer === 'undefined') {
        window.homepage = new StreamFlixHomepage();
        console.log('✅ StreamFlix Homepage Ready!');
        console.log('🔧 Homepage object available:', typeof window.homepage);
        console.log('🔧 PlayChannel method:', typeof window.homepage.playChannel);
    } else {
        console.warn('⚠️ Player already initialized - skipping homepage initialization');
    }
});
