// this is a hook that uses formProvider  to get the form context

// Custom hook to use the form data and update method

import { useContext } from 'react';
import { } from '../context/FormProvider'; // Import the FormContext

const useForm = () => {
    const { formData, updateFormData, getFormData } = useContext(FormContext);
    return { formData, updateFormData, getFormData };
};

