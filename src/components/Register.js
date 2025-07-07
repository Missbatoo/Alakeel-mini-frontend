import React,{useState} from "react";
import {register} from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName]= useState ('');
    const [email, setEmail]= useState ('');
    const [role, setRole]= useState('student');
    const [password,setPassword]= useState('');
    const [error,setError]= useState ('');
    const [success, setSuccess]= useState('');

const handleSubmit = async (e) => {e.preventDefault();
    setError('');
    setSuccess('');
try { 
    await register ({name,email,role,password});
    setSuccess ('Registeration successful! You can now log in.');
    setTimeout(()=> {navigate ('/');
    }, 2000);
}catch(err) { setError ('REgisteration failed. Please try again.');
}
};

return (
    <div> 
        <h2> Register </h2>
        {error && <p style ={{color: 'red'}}> {error}</p>}
        {success && <p style = {{color:'green'}}>{success}</p>}
        <form onSubmit={handleSubmit}>
            <input 
            type= "text"
            placeholder="Name"
            value= {name}
            onChange= {(e)=> setName (e.target.values)}
            required/> <br />

            <input 
            type="email"
            placeholder="Email"
            value = {email}
            onChange ={(e) => setEmail(e.target.value)}
            required
            /> <br />

            <select value ={role} onChange={(e) => setRole (e.target.value)}> 
            <option value = "student">Student</option>
            <option value = "faculty">Faculty</option>
            <option value = "staff">Staff</option>
            </select> <br />

            <input 
            type="password"
            placeholder= "Password"
            value = {password}
            onVhange = {(e) => setPassword (e.target.value)}
            required
            /> <bt />

            <button type="submit"> Register</button>
            </form>
            </div> 
);
}