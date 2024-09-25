import React, { useState, useEffect } from 'react';
import '../Css/Login.css'; // Import your CSS styles if you separate them
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        debugger
        if (storedUsername) {
            navigate('/dashboard'); // Redirect to dashboard if already logged in
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulate authentication logic
        if (username === 'Test' && password === 'Test123#') {
            sessionStorage.setItem('username', username);
            navigate('/dashboard'); // Redirect to dashboard
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div id="formFooter">
                    {/* Placeholder for any footer items */}
                </div>
                <form onSubmit={handleLogin} style={{ padding: '45px' }}>
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            <p>{error}</p>
                        </div>
                    )}
                    <input
                        type="text"
                        id="username"
                        className="fadeIn second"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="User Name"
                        required
                    />
                    <input
                        type="text" // This should be type="password" instead of text for security
                        id="password"
                        className="fadeIn third"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <input
                        type="submit"
                        className="fadeIn fourth btn-dark"
                        value="Log In"
                    />
                </form>
                <div id="formFooter">
                    <a className="underlineHover" href="#">
                        Forgot Password?
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
