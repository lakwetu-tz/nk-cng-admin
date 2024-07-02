// create a formprovider using typescript, help to store various  form data  and provide a method to retrieve the data

// Here is a simple implementation of a FormProvider using TypeScript:

import { useContext, useState, createContext, } from "react";

// Define the type for the form data
type FormData = {
  [key: string]: any;
};

// Create a context for the form data
const FormContext = createContext<FormData>({});

// Create a provider component for the form data
const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({});

  // Method to update the form data
  const updateFormData = (key: string, value: any) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  // Method to retrieve the form data
  const getFormData = () => formData;

  // Provide the form data and update method to the children components
  return (
    <FormContext.Provider value={{ formData, updateFormData, getFormData }}>
      {children}
    </FormContext.Provider>
  );


  export default FormProvider;

