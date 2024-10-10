// Create web server
// 1. Load the express module
// 2. Create an express object
// 3. Create a route
// 4. Start the server
const express = require('express');
const app = express();
const port = 3000;

// 3. Create a route
app.get('/comments', (req, res) => {
    res.send('Comments will be displayed here');
});

// 4. Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Run the server
// node comments.js
// Open the browser and type http://localhost:3000/comments
// You will see "Comments will be displayed here" on the screen
// Press Ctrl+C to stop the server