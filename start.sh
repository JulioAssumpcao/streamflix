#!/bin/bash

# IPTV Player Launcher Script

echo "🚀 Starting IPTV Stream Player..."
echo "=================================="

# Check if python is available
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD="python"
else
    echo "❌ Error: Python is not installed or not in PATH"
    echo "Please install Python 3.x to run the web server"
    exit 1
fi

# Start the server
echo "🌐 Server starting on http://localhost:8000"
echo "📺 Open your browser and navigate to the URL above"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

cd "$(dirname "$0")"
$PYTHON_CMD -m http.server 8000