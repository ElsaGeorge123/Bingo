// SessionManager.js
import React, { useState } from 'react';

const SessionManager = () => {
    const [sessionId, setSessionId] = useState('');
    const [userName, setUserName] = useState('');
    const [joinedUsers, setJoinedUsers] = useState({});
    const [currentSession, setCurrentSession] = useState('');

    const handleCreateSession = () => {
        if (sessionId) {
            setJoinedUsers({ ...joinedUsers, [sessionId]: [] });
            setCurrentSession(sessionId);
            setSessionId('');
        }
    };

    console.log(currentSession)
    console.log(joinedUsers)
    console.log(sessionId)

    const handleJoinSession = () => {
        if (sessionId && userName && joinedUsers[sessionId]) {
            setJoinedUsers((prev) => ({
                ...prev,
                [sessionId]: [...prev[sessionId], userName],
            }));
            setUserName('');
        }
    };

    return (
        <div className="session-manager">
            <h1>Session Manager</h1>
            <input
                type="text"
                placeholder="Session ID"
                value={sessionId}
                onChange={(e) => setSessionId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleCreateSession}>Create Session</button>
            <button onClick={handleJoinSession}>Join Session</button>

            {currentSession && (
                <div>
                    <h2>Current Session: {currentSession}</h2>
                    <h3>Joined Users:</h3>
                    <ul>
                        {joinedUsers[currentSession]?.map((user, index) => (
                            <li key={index}>{user}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SessionManager;


