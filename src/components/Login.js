import React, {useState} from "react";
import {login} from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
const navigate =  useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
setError('');
try {
const res = await login (email, password);
localStorage.setItem('token', res.data.token);
localStorage.setItem('role', res.data.user.role);
localStorage.setItem('name', res.data.user.name);
navigate ('/dashboard');
} catch (err) {
setError('Login failed. Please Check your credentialis.');
}
};

return (
<div>
<h2>Login</h2>
{error && <p style={{color: 'red'}} > {error}</p>}
<form onSubmit={handleSubmit}>
<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required/> <br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required/> <br/>

<button type="submit">Login</button>
</form>
</div>
);
}
