// Function to display email summaries
function displaySummaries(summaries) {
    const container = document.getElementById('summaries');
    container.innerHTML = '';

    if (summaries.length === 0) {
        document.getElementById('status').textContent = 'No emails summarized yet';
        return;
    }

    summaries.forEach(summary => {
        const div = document.createElement('div');
        div.className = 'email-summary';
        div.innerHTML = `
            <strong>${summary.sender}</strong>
            <p>${summary.summary}</p>
            <small>${summary.subject}</small>
        `;
        container.appendChild(div);
    });
}

// Load and display summaries when popup opens
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['emailSummaries'], (result) => {
        displaySummaries(result.emailSummaries || []);
    });
}); 