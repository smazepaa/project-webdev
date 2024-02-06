const path = require('path');

// chat gpt
function showInfo(req, res) {
    const filePath = path.join(__dirname, '..', 'assets', 'endpoints.json');

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Failed to send the file:', err);
            res.status(500).send('An error occurred');
        }
    });
}

module.exports = showInfo;