import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'hotel123') {
      onLogin();
    } else {
      setError('❌ Wrong username or password!');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>🏨 Hotel VS</h1>
        <p className="login-subtitle">Hotel Management System</p>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error-msg">{error}</p>}

        <button className="login-btn" onClick={handleLogin}>
          Login 🚀
        </button>

        <p className="login-hint">
          Username: <strong>admin</strong> | Password: <strong>hotel123</strong>
        </p>
      </div>
    </div>
  );
}

export default Login;