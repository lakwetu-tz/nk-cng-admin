// base api file for guarantor 
import axios from 'axios'

const BASE_URL = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/guarantors'

export default axios.create({
    baseURL: BASE_URL
})

export const getGuarantors = async () => {
    const response = await axios.get(BASE_URL)
    return response.data
}

export const getGuarantor = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/guarantor/get/${id}`)
    return response.data
}

