# StreamFlix - Netflix-Style IPTV Player

![StreamFlix Banner](https://placehold.co/800x200/141414/FFFFFF?text=StreamFlix+IPTV+Player)

A modern, Netflix-inspired web-based IPTV player that streams live TV channels from M3U playlists with a premium user experience. Built with vanilla JavaScript and HLS.js for seamless HLS streaming support.

## ✨ Latest Updates (v2.0)

### 🎉 Major Fixes & Improvements

#### **Audio & Video Playback** ✅
- **HLS.js Integration**: Added industry-standard HLS.js library for proper `.m3u8` stream support
- **Fixed Audio Playback**: Resolved audio not playing issue by implementing HLS.js streaming
- **Multi-format Support**: Handles both HLS (.m3u8) and direct streams (MP4, TS, etc.)
- **Safari Compatibility**: Native HLS support fallback for Apple devices
- **Auto-recovery**: Smart error handling with automatic network/media error recovery

#### **UI/UX Redesign** 🎨
- **Netflix-Style Layout**: Video player fixed at top, content scrolls below (authentic Netflix experience)
- **Fixed Overlay Issues**: Channel cards and search bar no longer overlay video player
- **Proper Z-Index Management**: Clean layering system prevents UI conflicts
- **Enhanced Controls**: Smooth opacity transitions for player controls
- **Responsive Hero Section**: Adaptive video player sizing (50vh mobile, 100vh desktop)
- **Mobile Optimizations**: Persistent controls and touch-friendly interface

#### **Player Improvements** 🎮
- **Simplified Playback Logic**: Streamlined HLS instance management
- **Better Volume Controls**: Clean mute/unmute functionality
- **Loading States**: Professional loading indicators with error messages
- **Progress Bar**: Real-time playback progress tracking
- **Keyboard Shortcuts**: Enhanced keyboard navigation support

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
- **Hero Video Section**: Full-screen video player at top
- **Scrollable Content**: Channel grid below video (no overlays!)
- **Smooth Animations**: Polished transitions and hover effects
- **Channel Cards**: Beautiful grid layout with channel logos and metadata
- **Overlay Controls**: Elegant player controls that appear on hover
- **Loading States**: Professional loading spinners and error messages

### 🎮 Controls & Navigation
- **Keyboard Shortcuts**: 
  - `Space`: Play/Pause
  - `← →`: Previous/Next Channel
  - `↑ ↓`: Volume Control
  - `M`: Toggle Mute
  - `F`: Toggle Fullscreen
- **Touch Support**: Mobile-friendly touch controls
- **Volume Control**: Precise volume slider (0-100%) with mute toggle
- **Fullscreen Mode**: One-click fullscreen viewing
- **Channel History**: Easy navigation between channels
- **Previous/Next**: Quick channel switching with dedicated buttons

## 🚀 Quick Start

### Prerequisites
- Python 3.x (for local server)
- Modern web browser (Chrome 70+, Firefox 65+, Safari 12+, Edge 79+)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/chriz-3656/streamflix.git
cd streamflix
```

2. **Start the player:**
```bash
# Start local server
python3 -m http.server 8000
```

3. **Open in browser:**
Navigate to `http://localhost:8000`

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

### Mobile Usage
- Tap channel cards to play
- Controls are always visible on mobile
- Touch-friendly button sizes
- Responsive layout adapts to screen size
- Swipe gestures supported

## 📁 Project Structure

```
streamflix/
├── index.html              # Main player interface (with HLS.js)
├── css/
│   └── netflix-style.css   # Netflix-inspired styling (fixed layout)
├── js/
│   └── netflix-player.js   # Core player with HLS.js integration
├── assets/                 # Images and media files
├── 404.html               # Error page
├── _routes.json           # Cloudflare routing config
├── package.json           # Project metadata
└── README.md             # This file
```

## 🛠️ Technical Details

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript (No frameworks!)
- **Streaming**: HLS.js v1.5+ for HLS stream support
- **Video**: HTML5 `<video>` element
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Poppins)
- **Deployment**: Cloudflare Pages ready

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
- Larger tap targets (min 48x48px)
- Persistent controls (always visible)
- Swipe-friendly card layout
- Adaptive grid layouts (2-6 columns)

### Responsive Breakpoints
- **Desktop**: 1200px+ (6 columns)
- **Tablet**: 768-1199px (4 columns)
- **Mobile**: <768px (2-3 columns)
- **Small Mobile**: <480px (2 columns)

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

### Browser Console Debugging
Open Developer Tools (F12) and check console for:
- ✅ "Player initialized"
- ✅ "Using HLS.js"
- ✅ "HLS Manifest parsed, playing..."
- ✅ "Playing successfully"

## 🚀 Deployment

### Cloudflare Pages
This project is optimized for Cloudflare Pages:

1. Connect your GitHub repository to Cloudflare Pages
2. Build settings: **None** (static site, no build step)
3. Output directory: `/` (root)
4. Auto-deploys on push to `main` branch

### GitHub Pages
```bash
# Enable GitHub Pages in repository settings
# Set source to main branch, / (root)
```

### Manual Deployment
Upload these files to any static hosting:
- `index.html`
- `css/`
- `js/`
- `assets/`
- `404.html`
- `_routes.json`

## 📊 Changelog

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
- [ ] Favorites system (save favorite channels)
- [ ] Watch history tracking
- [ ] Quality selection (auto/720p/1080p)
- [ ] Picture-in-Picture mode
- [ ] Chromecast support
- [ ] EPG (Electronic Program Guide) integration
- [ ] Subtitle support

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
- Open an issue on GitHub
- Check existing issues first
- Provide browser console logs for bugs

---

**Made with ❤️ for premium IPTV streaming experience**

[![GitHub](https://img.shields.io/github/license/chriz-3656/streamflix)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/chriz-3656/streamflix)](https://github.com/chriz-3656/streamflix/stargazers)
[![HLS.js](https://img.shields.io/badge/HLS.js-v1.5+-blue)](https://github.com/video-dev/hls.js)

**Repository**: https://github.com/chriz-3656/streamflix