import React, {useState, useEffect} from 'react';
import { editProfile } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../services/auth';

export default function EditProfile() {
const navigate = useNavigate();

const [name, setName]= useState (localStorage.getItem('name') || '');
const [email, setEmail]= useState('');
const[password, setPassword]= useState('')
const [role, setRole]= useState(localStorage.getItem('role') || 'student');
const [message, setMessage] = useState ('');
const [error, setError]= useState('');

const token = localStorage.getItem('token');

useEffect (()=> {
// Optionally fetch the user's current eail from backend using token
// You can skip this if you already have it, or set it manually
}, [])

const handleSubmit = async (e) => {
e.preventDefault();
setMessage('');
setError('');

try {
const res = await updateProfile ({name, email, password,role}, token);
setMessage(res.data.message || 'Profile updated successfully.');
localStorage.setItem('name', name);
localStorage.setItem('role', role);
setTimeout (()=> navigate('/dashboard'), 2000);
} catch (err) {
setError('Failed to update profile. Please try again.');
}
};

return (
    <div> 
     <h2>Edit Profile</h2>
{message && <p style={{color: 'green'}}>{message}</p>}
{error && <p style={{color: 'red'}}>{error}</p>}

<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="New Name"
value={name}
onChange={(e)=> setName(e.target.value)}
required
/><br />

<input
type="email"
placeholder="New Email"
value={email}
onChange={(e)=> setEmail(e.target.value)}
/><br />

<input
type="password"
placeholder="New Password"
value={password}
onChange={(e)=> setPassword(e.target.value)}
/><br />

<select value="role" onChange={(e)=> setRole(e.target.valur)}>
<option value="student">Student</option>
<option value="faculty">Faculty</option>
<option value="staff">Staff</option>
</select><br />

<button type="submit">Update Profile</button>
</form>
</div>
);
}