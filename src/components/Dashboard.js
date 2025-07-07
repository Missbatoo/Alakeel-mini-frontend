import React, { useEffect, useState } from 'react';
import {getDashboard, deleteAccount} from '../services/auth';
import editProfile from './EditProfile';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard() {
const navigate = useNavigate();

const name = localStorage.getItem('name');
const role= localStorage.getItem('role');
const token= localStorage.getItem('token');

const handleLogout = () => {localStorage.clear();
    navigate('/')
};

const handleDelete = async()=> {
    const confirmed = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');

    if (!confirmed) return ;

    try {
        await
        axios.delete('http://localhost:5000/api/auth/delete-account', {
            headers: {Authorization:'Bearer $ {token}'},
        });
        alert('Account deleted successfully.');
        localStorage.clear();
        navigate('/');
    } catch (error) {
        alert('Failed to delete account. Please try again.');
    }
    };

    return (
        <div>
            <h2>Welcome, {name}</h2>
<p>Role: {role}</p>

{role === 'student' && (
    <div>
        <h3>Student Dashboard</h3>
        <p>Here you can view your courses and grades.</p>
        </div>
)}
{role === 'faculty' && (
    <div>
        <h3>Faculty Dashboard</h3>
        <p>Here you can manage classes and student progress.</p>
        </div>
)}
{role === 'staff' && (
    <div>
        <h3>Staff Dashboard</h3>
        <p>Here you can manage administration tasks.</p>
    </div>
)}
<button onClick={() => navigate('/edit-profile')}>Edit Profile</button>
<button onClick={handleLogout}>Logout</button>
<button onClick={handleDelete} style={{color:'red', marginLeft: '10px'}}>
    Delete Account
</button>
    </div>
    );
}