// Function to extract email content
function extractEmailContent() {
    const emailBody = document.querySelector('.a3s.aiL');
    const subject = document.querySelector('h2.hP');
    const sender = document.querySelector('.gD');
    
    if (!emailBody || !subject || !sender) return null;

    return {
        subject: subject.textContent,
        sender: sender.textContent,
        content: emailBody.textContent
    };
}

// Function to summarize email using OpenAI API
async function summarizeEmail(emailContent) {
    try {
        const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailContent
            })
        });
        
        const summary = await response.json();
        return summary;
    } catch (error) {
        console.error('Error summarizing email:', error);
        return null;
    }
}

// Observer to detect new emails
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            const emailContent = extractEmailContent();
            if (emailContent) {
                summarizeEmail(emailContent).then(summary => {
                    if (summary) {
                        chrome.runtime.sendMessage({
                            type: 'NEW_EMAIL_SUMMARY',
                            summary: summary
                        });
                    }
                });
            }
        }
    });
});

// Start observing Gmail's main content area
const targetNode = document.querySelector('.AO');
if (targetNode) {
    observer.observe(targetNode, {
        childList: true,
        subtree: true
    });
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'GET_CURRENT_EMAIL') {
        const emailContent = extractEmailContent();
        sendResponse(emailContent);
    }
}); 