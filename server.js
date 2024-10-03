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

// Endpoint to create a new session
app.post('/start-session', (req, res) => {
    const sessionId = uuidv4().slice(0, 8); // Shorten UUID for easier sharing
    sessions[sessionId] = { users: [] }; // You can store additional session data here
    res.json({ sessionId });
});

// Endpoint to join a session
app.post('/join-session', (req, res) => {
    const { sessionId, username } = req.body;
    if (sessions[sessionId]) {
        sessions[sessionId].users.push(username);
        res.json({ message: 'Joined successfully!', session: sessions[sessionId] });
    } else {
        res.status(404).json({ message: 'Session not found!' });
    }
});

// Endpoint to get session details
app.get('/sessions/:sessionId', (req, res) => {
    const { sessionId } = req.params;
    if (sessions[sessionId]) {
        res.json(sessions[sessionId]);
    } else {
        res.status(404).json({ message: 'Session not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
