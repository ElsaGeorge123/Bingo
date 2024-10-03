// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import {QRCodeCanvas} from 'qrcode.react';

function VirtualBingoPage() {
  const [sessionId, setSessionId] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [qrVisible, setQrVisible] = useState(false);

  const createSession = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-session');
      setSessionId(response.data.sessionId);
      setQrVisible(true);
      setMessage('Session created! Share this QR code.');
    } catch (error) {
      setMessage('Failed to create session.');
    }
  };

  const joinSession = async () => {
    try {
      const response = await axios.post('http://localhost:5000/join-session', {
        sessionId,
        username,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to join session.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>QR Code Session Demo</h1>
      <button onClick={createSession}>Create Session</button>
      {qrVisible && (
        <div>
          <h2>Scan to Join</h2>
          <QRCodeCanvas value={`http://localhost:3000/join/${sessionId}`} />
        </div>
      )}
      <div>
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

export default VirtualBingoPage;
