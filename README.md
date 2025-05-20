# Gmail Summarizer Chrome Extension

A Chrome extension that uses AI to summarize and categorize your Gmail emails, making it easier to quickly understand your inbox content.

## Features

- Real-time email summarization
- Smart categorization of emails
- Desktop notifications for new emails
- Clean and intuitive popup interface
- Contact-based organization

## Setup

1. Clone the repository:
```bash
git clone https://github.com/divyanshkhurana06/mailed.git
```

2. Install the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select the extension directory

3. Configure the backend:
   - Set up your backend API endpoint in `content.js`
   - Replace `YOUR_BACKEND_API_ENDPOINT` with your actual endpoint

## Project Structure

- `manifest.json` - Extension configuration
- `popup.html/js` - Extension popup interface
- `content.js` - Gmail interaction and email processing
- `background.js` - Background tasks and notifications

## Development

The extension is built using:
- Chrome Extension Manifest V3
- JavaScript
- HTML/CSS
- OpenAI API for email summarization

## License

MIT License
