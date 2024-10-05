// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3004;

app.use(cors());
app.use(bodyParser.json());

let sessions = {};

app.post('/create-session', (req, res) => {
    const sessionId = uuidv4();
    sessions[sessionId] = { users: [] }; // You can store additional session data here
    res.json({ sessionId });
});

app.post('/join-session', (req, res) => {
    const { sessionId, username } = req.body;
    if (sessions[sessionId]) {
        sessions[sessionId].users.push(username);
        res.json({ message: 'Joined successfully!', session: sessions[sessionId] });
    } else {
        res.status(404).json({ message: 'Session not found!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
