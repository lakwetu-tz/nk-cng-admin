import axios from 'axios';

const BASE_URL = 'https://example.com/api'; // Replace with your actual base URL

export const fetchVehicles = async () => {
    const response = await axios.get(`${BASE_URL}/vehicles`);
    return response.data;
};

export const addVehicle = async (vehicleData: any) => {
    const response = await axios.post(`${BASE_URL}/vehicles`, vehicleData);
    return response.data;
};

export const updateVehicle = async (vehicleId: string, vehicleData: any) => {
    const response = await axios.put(`${BASE_URL}/vehicles/${vehicleId}`, vehicleData);
    return response.data;
};

export const deleteVehicle = async (vehicleId: string) => {
    const response = await axios.delete(`${BASE_URL}/vehicles/${vehicleId}`);
    return response.data;
};



// Add other API functions as needed
