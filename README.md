# StreamFlix - Netflix-Style IPTV Player

![StreamFlix Banner](https://placehold.co/800x200/141414/FFFFFF?text=StreamFlix+IPTV+Player)

🌐 **Live Demo**: [https://streamflix-watch.pages.dev/](https://streamflix-watch.pages.dev/)

A modern, Netflix-inspired web-based IPTV player that streams live TV channels from M3U playlists with a premium user experience. Built with vanilla JavaScript and HLS.js for seamless HLS streaming support.

## ✨ Latest Updates (v2.2)

### 🚀 New Features, Fixes, and UX Improvements

#### **Playback & Channel Selection**
- **Deterministic Channel Handoff**: Channel selected on homepage now opens the exact same stream on player page (URL now carries `channel`, `stream`, `name`, `group`, `logo`).
- **No Random Channel Fallback**: Removed behavior where first/random channel could play when opening from homepage.
- **Start Watching Behavior Updated**: `Start Watching` opens a blank player state (no autoplay) until user explicitly selects a channel.
- **Play Race Condition Fix**: Handled `AbortError` during rapid channel switches by adding load-token based cancellation safety.

#### **Sidebar UX**
- **Sidebar Search Reliability**: Searched channels now render/select correctly with pagination and filtering.
- **Collapsible Now Playing Card**: Added up/down toggle to hide/show current-channel details and free space for channel list browsing.
- **Keyboard Shortcut Guard**: Player keyboard shortcuts are disabled while sidebar is open and re-enabled when closed.
- **Scrollable Sidebar Improvements**: Refined scroll containers and behavior for smooth up/down browsing.

#### **Channel Loading Performance**
- **Fixed Chunk Loading**: Replaced half-split loading with fixed chunks for better scaling:
  - Homepage channel grid: **50 per load**
  - Sidebar channel list: **10 per load**
- **Load More Buttons**: Added and optimized `Load More` controls for homepage and sidebar.
- **Rendering Optimization**: Reduced runtime UI overhead and added lightweight rendering hints for large channel lists.

#### **Player Overlay & Controls**
- **Pause-State Overlay Rule**: Channel info overlay on video hides when playback is paused.
- **Overlay Sync**: Channel info visibility now follows control visibility behavior.
- **Overlay Auto-Hide Timing**: Controls + channel overlay now auto-hide after **5 seconds** of inactivity.
- **PiP/Theater Stability**: Added missing handlers and improved mode toggles.

#### **Responsive & Mobile**
- **Responsive Hardening Pass**: Improved behavior across phones/tablets/desktop/large screens.
- **Safe-Area Support**: Better spacing for notches/home indicators.
- **Landscape Short-Height Tuning**: Compact controls for small-height landscape screens.
- **Touch Tap Behavior Fix**: On mobile/touch devices, tapping video now toggles controls overlay visibility (show/hide) instead of play/pause.

#### **Branding / Assets**
- **Custom Favicon Wired**: Added `assets/favicon.ico` to homepage and player page.
- **PWA Ready Icons**: Added Android/iOS favicon set for install experience.

#### **PWA Support**
- **Web App Manifest**: Added `manifest.webmanifest` with app metadata, theme color, and install icons.
- **Service Worker**: Added `sw.js` for app-shell caching and offline-friendly static asset loading.
- **Auto Registration**: Added `js/pwa-register.js` and wired it to homepage/player.

#### **Backend Relay (New)**
- **Browser-Safe Stream Relay**: Added `server.js` with `/api/relay` to proxy upstream HLS playlists/segments.
- **Manifest Rewriting**: Relay rewrites nested HLS URLs so all segment/key requests stay routed through your server.
- **CORS + HTTPS Friendly**: Enables web playback for many channels that fail in browser direct mode.
- **Smart Player Integration**: Frontend auto-detects relay (`/api/relay/health`) and uses it when available.
- **Cloudflare Worker Starter**: Added `worker/` with Worker relay template (`worker/src/index.js`) and `worker/wrangler.toml`.

## ✨ Previous Updates (v2.1)

### 🎉 Major Fixes & Improvements

#### **Audio & Video Playback** ✅
- **HLS.js Integration**: Added industry-standard HLS.js library for proper `.m3u8` stream support
- **Fixed Audio Playback**: Resolved audio not playing issue by implementing HLS.js streaming
- **Multi-format Support**: Handles both HLS (.m3u8) and direct streams (MP4, TS, etc.)
- **Safari Compatibility**: Native HLS support fallback for Apple devices
- **Auto-recovery**: Smart error handling with automatic network/media error recovery

#### **UI/UX Redesign** 🎨
- **Netflix-Style Layout**: Video player fixed at top, content scrolls below (authentic Netflix experience)
- **Netflix Splash Screen**: Animated logo with glowing effects on app load (2.5s)
- **Fixed Overlay Issues**: Channel cards and search bar no longer overlay video player
- **Proper Z-Index Management**: Clean layering system prevents UI conflicts
- **Enhanced Controls**: Smooth opacity transitions for player controls
- **Responsive Hero Section**: Adaptive video player sizing (50vh mobile, 100vh desktop)
- **Mobile Optimizations**: Persistent controls and touch-friendly interface

#### **Advanced Player Controls** 🎮
- **Fullscreen Mode** (F key): True fullscreen with exit controls
- **Theater Mode** (T key): Full viewport height with scrollable content
- **Picture-in-Picture** (P key): Float video while browsing other tabs
- **Simplified Playback Logic**: Streamlined HLS instance management
- **Better Volume Controls**: Clean mute/unmute functionality
- **Loading States**: Professional loading indicators with error messages
- **Progress Bar**: Real-time playback progress tracking
- **Enhanced Keyboard Shortcuts**: F/T/P keys for view modes

#### **Mobile Excellence** 📱
- **Touch-Optimized Controls**: 44x44px minimum tap targets (Apple HIG compliant)
- **3-Row Stacked Layout**: Progress, playback, and settings rows on mobile
- **Always-Visible Controls**: No hover needed on touch devices
- **Tap-to-Play**: Direct video tapping for play/pause
- **Adaptive Button Sizing**: Larger play button (65px) on mobile
- **Smart Feature Hiding**: Theater mode hidden on small screens
- **Device Detection**: Automatic mobile initialization
- **Comprehensive Documentation**: See MOBILE_GUIDE.md

#### **Developer Improvements** 🛠️
- **Fixed Syntax Error**: Resolved class method positioning bug
- **Debug Logging**: Comprehensive console logs for troubleshooting
- **Code Validation**: Node.js syntax checking integration
- **Test Tools**: Created test-channels.html for isolated debugging

## 🎬 Features

### 🎯 Core Functionality
- **Live Streaming**: Play live TV channels from IPTV playlists with HLS.js
- **HLS Support**: Full support for .m3u8 streams (HTTP Live Streaming)
- **Multiple Sources**: India and Global channel playlists
- **Channel Search**: Real-time search by name or category
- **Category Filtering**: Browse channels by genre/type
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### 🎨 Premium UI/UX
- **Netflix-Style Interface**: Authentic dark theme with red accents
- **Animated Splash Screen**: StreamFlix logo with glowing effects on load
- **Hero Video Section**: Full-screen video player at top
- **Scrollable Content**: Channel grid below video (no overlays!)
- **Smooth Animations**: Polished transitions and hover effects
- **Channel Cards**: Beautiful grid layout with channel logos and metadata
- **Overlay Controls**: Elegant player controls that appear on hover
- **Loading States**: Professional loading spinners and error messages
- **Theater Mode**: Cinematic full-viewport viewing experience
- **Picture-in-Picture**: Multitask while watching

### 🎮 Controls & Navigation
- **Keyboard Shortcuts**: 
  - `Space`: Play/Pause
  - `← →`: Previous/Next Channel
  - `↑ ↓`: Volume Control
  - `M`: Toggle Mute
  - `F`: Toggle Fullscreen
  - `T`: Toggle Theater Mode
  - `P`: Toggle Picture-in-Picture
- **Touch Support**: Mobile-friendly touch controls with tap-to-play
- **Volume Control**: Precise volume slider (0-100%) with mute toggle
- **Fullscreen Mode**: One-click fullscreen viewing
- **Theater Mode**: Full viewport height for immersive viewing
- **Picture-in-Picture**: Float video over other windows/tabs
- **Channel History**: Easy navigation between channels
- **Previous/Next**: Quick channel switching with dedicated buttons

## 🚀 Quick Start

### 🌐 Live Access
**Just visit**: [https://streamflix-watch.pages.dev/](https://streamflix-watch.pages.dev/)

No installation needed! Works instantly on any device.

### 💻 Local Development

**Prerequisites:**
- Modern web browser (Chrome 70+, Firefox 65+, Safari 12+, Edge 79+)
- Node.js 18+ and npm

**Setup:**
```bash
# Clone repository
git clone https://github.com/chriz-3656/streamflix.git
cd streamflix

# Install dependencies
npm install

# Start relay + web server
npm run dev

# Open browser
# Visit: http://localhost:8080
```

### ☁️ Cloudflare Worker Relay (Production)
1. Deploy the Worker in `worker/`:
```bash
cd worker
npx wrangler deploy
```
2. Bind a custom domain (recommended): `relay.yourdomain.com`.
3. Update relay base in app HTML:
   - `index.html` meta `streamflix-relay-base`
   - `player.html` meta `streamflix-relay-base`
   Example value: `https://relay.yourdomain.com`
   Current deployed worker: `https://streamflix-relay.chrizmonsaji.workers.dev`

## 🎯 Usage

### Basic Operations
- **Select Channel**: Click any channel card to start streaming
- **Search Channels**: Use the search bar to find specific channels
- **Filter Categories**: Use the dropdown to browse by category
- **Change Playlist**: Switch between India and Global channels
- **Volume Control**: Click volume icon or use slider to adjust audio
- **Fullscreen**: Hover over video and click fullscreen button

### Keyboard Controls
- **Spacebar**: Play/Pause current channel
- **← →**: Navigate Previous/Next Channel
- **↑ ↓**: Increase/Decrease Volume
- **M**: Toggle Mute
- **F**: Toggle Fullscreen mode
- **T**: Toggle Theater Mode (full viewport height)
- **P**: Toggle Picture-in-Picture (multitasking)

### Mobile Usage
- **Tap channel cards** to start playing
- **Tap video** to play/pause
- **Controls always visible** - no hover needed
- **44x44px touch targets** - Apple HIG compliant
- **3-row stacked layout** - progress, playback, settings
- **Larger play button** (65px) for easy access
- **Responsive grid** adapts to screen size
- See **MOBILE_GUIDE.md** for complete mobile documentation

## 📁 Project Structure

```
streamflix/
├── index.html                # Homepage (hero, rows, search, channel grid)
├── player.html               # Dedicated player page (video + sidebar)
├── splash-preview.html       # Isolated splash screen preview
├── test-channels.html        # Debugging tool for playlist testing
├── css/
│   └── netflix-style.css     # Unified Netflix-style UI + responsive system
├── js/
│   ├── homepage.js           # Homepage data/render logic + navigation
│   ├── netflix-player.js     # Core player logic (HLS.js, sidebar, controls)
│   └── pwa-register.js       # Service worker registration
├── worker/                   # Cloudflare Worker relay template
│   ├── wrangler.toml
│   └── src/index.js
├── assets/                   # App icons (favicon + Android/iOS install icons)
├── manifest.webmanifest      # PWA manifest
├── sw.js                     # Service worker (app shell cache)
├── MOBILE_GUIDE.md           # Comprehensive mobile usage guide
├── 404.html                  # Error page
├── _routes.json              # Cloudflare routing config
├── package.json              # Project metadata
└── README.md                 # This file
```

## 🛠️ Technical Details

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript (No frameworks!)
- **Backend**: Node.js + Express relay server
- **Streaming**: HLS.js v1.5+ for HLS stream support
- **Video**: HTML5 `<video>` element
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Poppins)
- **Deployment**: Node host (for relay) + optional CDN/static edge

### Supported Formats
- **Playlist Format**: M3U/M3U8 (EXTINF metadata parsing)
- **Streaming Protocols**: HLS (.m3u8), Direct HTTP streams (MP4, TS)
- **Video Codecs**: H.264, H.265 (HEVC)
- **Audio Codecs**: AAC, MP3

### Browser Support
| Browser | Version | HLS Support |
|---------|---------|-------------|
| Chrome | 70+ | HLS.js |
| Firefox | 65+ | HLS.js |
| Safari | 12+ | Native HLS |
| Edge | 79+ | HLS.js |
| Mobile Safari | iOS 12+ | Native HLS |
| Chrome Mobile | Latest | HLS.js |

### Performance
- **Lightweight**: ~40KB total code size (uncompressed)
- **No NPM Dependencies**: Pure browser APIs
- **Efficient Memory**: Smart HLS instance cleanup
- **Fast Loading**: Minimal external resources
- **Auto-recovery**: Network error handling with retry logic
- **GPU Accelerated**: CSS transforms for smooth animations

## 🔧 Customization

### Adding New Playlists
Modify the `playlists` object in `js/netflix-player.js`:
```javascript
this.playlists = {
    india: 'https://iptv-org.github.io/iptv/countries/in.m3u',
    global: 'https://iptv-org.github.io/iptv/index.m3u',
    custom: 'your-custom-playlist-url.m3u'
};
```

### Styling Changes
Edit `css/netflix-style.css` to customize:
```css
:root {
    --netflix-black: #141414;
    --netflix-red: #e50914;
    --netflix-gray: #808080;
    /* Customize your theme colors */
}
```

### HLS.js Configuration
Adjust HLS.js settings in `loadChannel()` function:
```javascript
const hls = new Hls({
    enableWorker: true,
    lowLatencyMode: false,
    backBufferLength: 90
    // Add more HLS.js options
});
```

## 📱 Mobile Features

### Touch Optimizations
- Larger tap targets (min 44x44px - Apple HIG compliant)
- Persistent controls (always visible on touch devices)
- Tap-to-play on video element
- 3-row stacked control layout (progress/playback/settings)
- Enlarged play button (65x65px vs 60x60px desktop)
- Swipe-friendly card layout
- Adaptive grid layouts (2-6 columns)
- Theater mode hidden on mobile (not useful on small screens)
- PiP button conditionally hidden on <480px screens

### Responsive Breakpoints
- **Desktop**: 1200px+ (6 columns grid)
- **Tablet**: 768-1199px (4 columns grid)
- **Mobile**: <768px (2-3 columns, stacked controls)
- **Small Mobile**: <480px (2 columns, minimal buttons)

### Performance
- Reduced animations on mobile
- Efficient resource loading
- Battery-friendly operation
- Adaptive video quality

## 🐛 Troubleshooting

### Common Issues

#### 1. **No Audio / Video Plays but No Sound**
   ✅ **Fixed in v2.0!** HLS.js now properly handles audio tracks
   - Ensure volume is not at 0%
   - Click volume/mute icon to unmute
   - Check browser console for errors

#### 2. **Channels Not Loading**
   - Check internet connection
   - Verify playlist URLs are accessible
   - Some streams may be geo-restricted
   - Open Console (F12) to see error details

#### 3. **Channel Cards Overlay Video**
   ✅ **Fixed in v2.0!** Proper z-index and layout structure
   - Clear browser cache if issue persists
   - Video is now fixed at top, content scrolls below

#### 4. **HLS Streams Not Playing**
   ✅ **Fixed in v2.0!** HLS.js integration complete
   - HLS.js automatically handles .m3u8 streams
   - Safari uses native HLS support
   - Check Console for "HLS Manifest parsed" message

#### 5. **Mobile Playback Problems**
   - Ensure sufficient bandwidth (3G+ recommended)
   - Close other streaming applications
   - Try different network connection
   - Controls are persistent on mobile
   - Refer to MOBILE_GUIDE.md for troubleshooting

#### 6. **Channels Not Loading / Syntax Errors**
   ✅ **Fixed in v2.1!** JavaScript syntax error resolved
   - Hard refresh browser: Ctrl+Shift+R (Win) or Cmd+Shift+R (Mac)
   - Clear browser cache if issue persists
   - Check Console for "Player initialized" message
   - Use test-channels.html for isolated debugging

### Browser Console Debugging
Open Developer Tools (F12) and check console for:
- ✅ "🎬 StreamFlix Player Initializing..."
- ✅ "Player initialized"
- ✅ "📡 Loading india playlist..."
- ✅ "✅ Parsed XXX valid channels"
- ✅ "🎨 Rendering XXX channels to grid"
- ✅ "Using HLS.js" (when playing channel)
- ✅ "HLS Manifest parsed, playing..."

## 🚀 Deployment

### 🌐 Live Production
**Current Deployment**: [https://streamflix-watch.pages.dev/](https://streamflix-watch.pages.dev/)
- Hosted on **Cloudflare Pages**
- Auto-deploys on push to `main` branch
- Global CDN with edge caching
- Zero-configuration static hosting

### Cloudflare Pages (Recommended)
This project is optimized for Cloudflare Pages:

1. Connect your GitHub repository to Cloudflare Pages
2. Build settings: **None** (static site, no build step)
3. Output directory: `/` (root)
4. Auto-deploys on push to `main` branch
5. Custom domain supported

### GitHub Pages
```bash
# Enable GitHub Pages in repository settings
# Set source to main branch, / (root)
# Access at: https://chriz-3656.github.io/streamflix
```

### Manual Deployment
Upload these files to any static hosting:
- `index.html`, `splash-preview.html`, `test-channels.html`
- `css/` directory
- `js/` directory
- `assets/` directory (if any)
- `404.html`
- `_routes.json` (for Cloudflare routing)

## 📊 Changelog

### Version 2.1 (February 2026) - Current
- ✅ **Fixed JavaScript Syntax Error** - Channels now load properly
- ✅ **Added Netflix Splash Screen** - Animated logo on app load (2.5s)
- ✅ **Advanced Player Controls** - Fullscreen, Theater Mode, Picture-in-Picture
- ✅ **Mobile Excellence** - 3-row stacked layout, 44px touch targets
- ✅ **Tap-to-Play** - Direct video tapping on mobile
- ✅ **Keyboard Shortcuts** - F/T/P keys for view modes
- ✅ **Debug Logging** - Comprehensive console logs with emojis
- ✅ **Mobile Guide** - Created MOBILE_GUIDE.md documentation
- ✅ **Test Tools** - Added test-channels.html for debugging
- ✅ **Live Deployment** - Published to Cloudflare Pages
- 🔧 **Code Cleanup** - Fixed class method positioning bug

### Version 2.0 (February 2026)
- ✅ Added HLS.js library for proper HLS streaming
- ✅ Fixed audio playback issues
- ✅ Redesigned UI layout (video top, content below)
- ✅ Fixed z-index overlay issues
- ✅ Improved error handling and auto-recovery
- ✅ Enhanced mobile responsiveness
- ✅ Simplified player logic
- ✅ Cleaned up volume controls
- 🗑️ Removed unused documentation files

### Version 1.0 (Initial Release)
- 🎉 Netflix-style IPTV player
- 📺 M3U playlist support
- 🔍 Search and filtering
- 📱 Responsive design
- ⌨️ Keyboard shortcuts

## 🤝 Contributing

Contributions are welcome! Areas for improvement:

- [ ] Playlist management (add/remove custom playlists)
- [ ] Favorites system (save favorite channels to localStorage)
- [ ] Watch history tracking with resume playback
- [ ] Quality selection (auto/720p/1080p for adaptive streams)
- [ ] Chromecast support for TV casting
- [ ] EPG (Electronic Program Guide) integration
- [ ] Subtitle/closed caption support
- [ ] PWA manifest for "Add to Home Screen"
- [x] ✅ Picture-in-Picture mode (completed v2.1)
- [x] ✅ Fullscreen mode (completed v2.1)
- [x] ✅ Theater mode (completed v2.1)
- [x] ✅ Mobile optimization (completed v2.1)

## ⚠️ Disclaimer

This player is for **educational purposes only**. Please ensure you have proper authorization to access any IPTV content you stream. The playlist sources used are from publicly available repositories (IPTV-org).

**We do not host, distribute, or provide any IPTV content.**

## 📄 License

MIT License - Feel free to modify and distribute.

## 🙏 Acknowledgments

- **Netflix** for UI/UX inspiration
- **IPTV-org** for open playlist sources
- **HLS.js** team for the excellent streaming library
- **Font Awesome** for icon library
- **Google Fonts** for Poppins typography
- All contributors and users of StreamFlix

## 📞 Support

Found a bug or have a feature request?
- 🐛 **Open an issue** on [GitHub Issues](https://github.com/chriz-3656/streamflix/issues)
- 📖 **Check existing issues** before creating new ones
- 🔍 **Provide browser console logs** (F12) for bug reports
- 📱 **Mobile issues**: See MOBILE_GUIDE.md troubleshooting first
- 🧪 **Use test-channels.html** for debugging playlist loading

## 🔗 Links

- 🌐 **Live Demo**: [https://streamflix-watch.pages.dev/](https://streamflix-watch.pages.dev/)
- 💻 **GitHub Repository**: [https://github.com/chriz-3656/streamflix](https://github.com/chriz-3656/streamflix)
- 📱 **Mobile Guide**: [MOBILE_GUIDE.md](MOBILE_GUIDE.md)
- 🔬 **Test Tool**: [test-channels.html](test-channels.html)
- 🎬 **Splash Preview**: [splash-preview.html](splash-preview.html)

---

**Made with ❤️ for premium IPTV streaming experience**

[![GitHub](https://img.shields.io/github/license/chriz-3656/streamflix)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/chriz-3656/streamflix)](https://github.com/chriz-3656/streamflix/stargazers)
[![HLS.js](https://img.shields.io/badge/HLS.js-v1.5+-blue)](https://github.com/video-dev/hls.js)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://streamflix-watch.pages.dev/)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-orange)](https://pages.cloudflare.com/)
