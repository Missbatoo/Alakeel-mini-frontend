import React, {useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {resetPassword} from '../services/auth';

export default function ResetPassword() {
const {token} = useParams();
const navigate = useNavigate();

const [newPassword, setNewPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [message, useMassege] = useState ('');
const [error, setError] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
setMessage('');
setError('');

if (newPassword !== confirmPassword) {
    setError ('Passwords do not match.');
    return; 
}

try {
const res = await resetPassword(token, newPassword);
setMessage (res.data.message|| 'Password has been reset successfully.');
setTimeout (()=> navigate('/'), 2000); // Redirect to login
}catch (err){ 
    setError ('Failed to reset password. please try again.');
}
};

return (
    <div>
<h2>Reset Password</h2>
{message && <p style={{color: 'green'}}>{message}</p>}
{error && <p style={{color: 'red'}}>{error}</p>}

<form onSubmit={handleSubmit}>
<input
type="password"
placeholder="New Password"
value={newPassword}
onChange={(e) => setNewPassword(e.target.value)}
required
/><br />

<input type="password"
placeholder="Confirm new password"
value={confirmPassword}
onChange= {(e)=> setConfirmPassword(e.target.value)}
required
/><br /> 

<button type="submit">Reset Password</button>
</form>
</div>
);
}