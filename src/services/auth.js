import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/'; // Change this if deployed

export const login = (email, password) =>{
return axios.post(`${API_URL}/login`, {email, password});
};

export const register = async (userData) => {
return axios.post(`${API_URL}/register`, userData);
};

export const forgotPassword = (email) => {
return axios.post(`${API_URL}/forgot-password`, {email});
};

export const resetPassword = (token, password) => {
    return axios.post('${API_URL}/reset-password/${token}', {password});
};

export const updateProfile = (userData, token)=> {
return axios.put('$ {API_URL}/update-profile', userData, {
    headers: {
        Authorization: 'Bearer ${token}', 
    },
});
};