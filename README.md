# StreamFlix - Netflix-Style IPTV Player

![StreamFlix Banner](https://placehold.co/800x200/141414/FFFFFF?text=StreamFlix+IPTV+Player)

A modern, Netflix-inspired web-based IPTV player that streams live TV channels from M3U playlists with a premium user experience.

## 🎬 Features

### 🎯 Core Functionality
- **Live Streaming**: Play live TV channels from IPTV playlists
- **Multiple Sources**: India and Global channel playlists
- **Channel Search**: Real-time search by name or category
- **Category Filtering**: Browse channels by genre/type
- **Responsive Design**: Works on desktop, tablet, and mobile

### 🎨 Premium UI/UX
- **Netflix-Style Interface**: Dark theme with red accents
- **Smooth Animations**: Polished transitions and hover effects
- **Channel Cards**: Beautiful grid layout with channel information
- **Overlay Controls**: Elegant player controls that appear on hover
- **Loading States**: Professional loading indicators

### 🎮 Controls & Navigation
- **Keyboard Shortcuts**: Space (play/pause), Arrow keys (navigation)
- **Touch Support**: Mobile-friendly touch controls
- **Volume Control**: Precise volume slider with mute toggle
- **Fullscreen Mode**: One-click fullscreen viewing
- **Channel History**: Easy navigation between channels

## 🚀 Quick Start

### Prerequisites
- Python 3.x (for local server)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/streamflix.git
cd streamflix
```

2. **Start the player:**
```bash
# Using the launcher script
./start.sh

# Or manually start server
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

### Keyboard Controls
- **Spacebar**: Play/Pause
- **← →**: Previous/Next Channel
- **↑ ↓**: Volume Control
- **M**: Toggle Mute
- **F**: Toggle Fullscreen

### Mobile Usage
- Tap channel cards to play
- Swipe gestures for navigation
- Touch-friendly controls
- Responsive layout adapts to screen size

## 📁 Project Structure

```
streamflix/
├── index.html          # Main player interface
├── css/
│   └── netflix-style.css  # Netflix-inspired styling
├── js/
│   └── netflix-player.js  # Core player functionality
├── assets/             # Images and media files
├── start.sh           # Launcher script
├── README.md          # This file
├── FEATURES.md        # Detailed features list
├── OPTIMIZATIONS.md   # Performance improvements
└── FINAL_FIXES.md     # Latest fixes and updates
```

## 🛠️ Technical Details

### Supported Formats
- **Playlist Format**: M3U/M3U8
- **Video Codecs**: H.264, H.265
- **Streaming Protocols**: HLS, HTTP Live Streaming

### Browser Support
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

### Performance
- Optimized for smooth playback
- Efficient memory management
- Responsive design for all devices
- Minimal loading times

## 🔧 Customization

### Adding New Playlists
Modify the `playlists` object in `js/netflix-player.js`:
```javascript
this.playlists = {
    india: 'your-indian-playlist-url.m3u',
    global: 'your-global-playlist-url.m3u',
    custom: 'your-custom-playlist-url.m3u'
};
```

### Styling Changes
Edit `css/netflix-style.css` to customize:
- Colors and themes
- Layout dimensions
- Animation effects
- Responsive breakpoints

## 📱 Mobile Features

### Touch Optimizations
- Larger tap targets for mobile
- Swipe gestures for navigation
- Persistent controls on mobile
- Adaptive grid layouts

### Performance
- Optimized for mobile processors
- Reduced animations on mobile
- Efficient resource loading
- Battery-friendly operation

## 🐛 Troubleshooting

### Common Issues

1. **Channels Not Loading**
   - Check internet connection
   - Verify playlist URLs are accessible
   - Some streams may be geo-restricted

2. **Audio/Video Sync Issues**
   - Refresh the page
   - Try a different channel
   - Check browser compatibility

3. **Mobile Playback Problems**
   - Ensure sufficient bandwidth
   - Close other streaming applications
   - Try different network connection

### Browser Console
Check browser developer tools console for detailed error messages and debugging information.

## 📄 Documentation

- **[FEATURES.md](FEATURES.md)**: Detailed feature descriptions
- **[OPTIMIZATIONS.md](OPTIMIZATIONS.md)**: Performance improvements
- **[FINAL_FIXES.md](FINAL_FIXES.md)**: Latest updates and fixes

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for improvements. Areas for contribution:

- Additional playlist sources
- UI/UX enhancements
- Performance optimizations
- Mobile improvements
- New features and controls

## ⚠️ Disclaimer

This player is for educational purposes. Please ensure you have proper authorization to access any IPTV content you stream. The playlist sources used are publicly available repositories.

## 📄 License

MIT License - Feel free to modify and distribute.

## 🙏 Acknowledgments

- Netflix for UI inspiration
- IPTV-org for playlist sources
- Font Awesome for icons
- All contributors and users

---

**Made with ❤️ for premium IPTV streaming experience**

[![GitHub](https://img.shields.io/github/license/yourusername/streamflix)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/streamflix)](https://github.com/yourusername/streamflix/stargazers)