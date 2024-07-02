// api for users

import axios from 'axios';

const BASE_URL = 'https://nkloans.co.tz/api/v1/user'; // Replace with your actual base URL

export const fetchUsers = async () => {
    const response = await axios.get(`${BASE_URL}/user/all`);
    return response.data;
};

export const addUser = async (vehicleData: any) => {
    const response = await axios.post(`${BASE_URL}/create`, vehicleData);
    return response.data;
};

export const updateUser = async (vehicleId: number, vehicleData: any) => {
    const response = await axios.put(`${BASE_URL}/${vehicleId}`, vehicleData);
    return response.data;
};

export const deleteUser = async (vehicleId: number) => {
    const response = await axios.delete(`${BASE_URL}/${vehicleId}`);
    return response.data;
};

// login
export const loginUser = async (credentials: any) => {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
};

//register
export const registerUser = async (userData: any) => {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
};

// reset password
export const resetPassword = async (email: string) => {
    const response = await axios.post(`${BASE_URL}/reset-password`, { email });
    return response.data;
};

// change password
export const changePassword = async (userId: number, newPassword: string) => {
    const response = await axios.put(`${BASE_URL}/${userId}/change-password`, { newPassword });
    return response.data;
};

// logout
export const logoutUser = async () => {
    const response = await axios.post(`${BASE_URL}/logout`);
    return response.data;
};




// Add other API functions as needed
