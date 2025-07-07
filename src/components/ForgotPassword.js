import React, {useState} from 'react';
import axios from 'axios';
import {forgotPassword} from '../services/auth'

export default function ForgotPassword() {
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [error, setError] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
setMessage('');
setError('');

try {
const res = await ForgotPassword (email);
setMessage(res.data.message|| 'Password reset link sent to your email.');
}catch(err) {
    setError ('Failed to send reset link. Please try again.');
}
};

return (
<div>
    <h2>Forgot Password</h2>
    {message && <p style={{color: 'green'}}>{message}</p>}
    {error && <p style= {{color:'red'}}> {error}</p>}

    <form onSubmit={handleSubmit}>
        <input
        type= "email"
        paceholder="Enter your email"
        value= {email}
        onChange ={(e)=> setEmail (e.target.value)}
        required
        /><br />
        <button type="submit">Send Reset Link</button>
    </form>
</div>
);
}
