import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:4000/v1/form'; // Replace with your actual base URL

export const fetchForms = async () => {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
};

export const addForms = async (vehicleData: any) => {
    const response = await axios.post(`${BASE_URL}/create`, vehicleData);
    return response.data;
};

// update form 
export const updateForm = async (formId: number, updatedData: any) => {
    const response = await axios.put(`${BASE_URL}/update/${formId}`, updatedData);
    return response.data;
};

// approve form
export const approveForm = async (formId: number) => {
    const response = await axios.put(`${BASE_URL}/approve/${formId}`);
    return response.data;
};

//delete form
export const deleteForm = async (formId: number) => {
    const response = await axios.delete(`${BASE_URL}/delete/${formId}`);
    return response.data;
};

export const getFormById = async (formId: number) => {
    const response = await axios.get(`${BASE_URL}/${formId}`);
    return response.data;
};

// Add other API functions as needed
