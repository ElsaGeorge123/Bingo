// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function App() {
    const [sessionId, setSessionId] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    function handleChange() {
      navigate('/createsession');
    }

    const navigate = useNavigate();

    const startSession = async () => {
        try {
            const response = await axios.post('http://localhost:3004/start-session');
            setSessionId(response.data.sessionId);
            setMessage(`Session created! Share this ID: ${response.data.sessionId}`);
        } catch (error) {
            setMessage('Failed to create session.');
        }
    };

    const joinSession = async () => {
        try {
            const response = await axios.post('http://localhost:3004/join-session', {
                sessionId,
                username,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Failed to join session or session not found.');
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Start or Join a Session</h1>
            <button onClick={handleChange}>Start Session</button>
            <div>
                <h2>Join a Session</h2>
                <input
                    type="text"
                    placeholder="Enter session ID"
                    value={sessionId}
                    onChange={(e) => setSessionId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={joinSession}>Join Session</button>
            </div>
            <p>{message}</p>
        </div>
    );
}

export default App;
