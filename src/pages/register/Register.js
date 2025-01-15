import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('APPLICANT'); // Default to APPLICANT, can be changed based on your requirement
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userRegisterData = {
                name,
                email,
                password,
                role
            };

            const url = 'http://localhost:8080/users'; // API endpoint for registration
            const response = await axios.post(url, userRegisterData);

            // Handle successful registration (navigate to login or another page)
            alert('Registration successful!');
            navigate('/login'); // Redirect to login page after successful registration
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
            setErrorMessage('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <h2>Register</h2>
                {errorMessage && <p>{errorMessage}</p>}
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="APPLICANT">Applicant</option>
                        <option value="RECRUITER">Recruiter</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;