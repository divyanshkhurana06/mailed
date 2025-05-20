// Store email summaries
let emailSummaries = [];

// Listen for new email summaries from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'NEW_EMAIL_SUMMARY') {
        emailSummaries.unshift(request.summary);
        
        // Keep only last 10 summaries
        if (emailSummaries.length > 10) {
            emailSummaries.pop();
        }

        // Show notification
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon128.png',
            title: 'New Email Summary',
            message: `${request.summary.sender}: ${request.summary.summary}`
        });

        // Update storage
        chrome.storage.local.set({ emailSummaries });
    }
});

// Initialize storage
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ emailSummaries: [] });
}); 