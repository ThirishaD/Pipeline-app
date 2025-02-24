const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Basic Route
app.get('/', (req, res) => {
    res.send('This is Stanley');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});
