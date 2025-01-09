document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    const resultElement = document.getElementById('result');

    if (query) {
        // Simulate an AI search result
        resultElement.innerHTML = `You searched for: <strong>${query}</strong>`;
    } else {
        resultElement.innerHTML = 'Please enter a search term.';
    }
});

// Optional: Allow pressing Enter to search
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
