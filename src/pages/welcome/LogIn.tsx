// LoginPage.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import axios from 'axios';

const LoginPage: React.FC = () => {
    const [auth, setAuth] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        try {
            // Make the actual API call when the server is working
            const response = await axios.post(`${process.env.BASE_URL}/superuser/login`, {
                auth,
                password,
            });

            login({
                token: response.data.token,
                id: response.data._id,
                name: response.data.user.username,
                email: response.data.user.email,
            });

            navigate('/');
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                // Error from the server
                setErrorMessage(err.response.data.message || 'An unexpected error occurred');
            } else {
                // Other errors (network issues, etc.)
                setErrorMessage('An unexpected error occurred');
            }
            console.error('Error during login:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <img src={require("../../assets/logo.png")} width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <a href="/register" className="font-medium text-green-600 hover:text-green-500">Sign up</a></p>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
              
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">Email or Username</label>
                            <input
                                type="text"
                                required
                                placeholder='Email or Username'
                                value={auth}
                                onChange={(e) => setAuth(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                            />
                        </div>
                        {errorMessage && <p className='text-red-600 mb-2'>{errorMessage}</p>}
                        <button
                        type='submit'
                            className="w-full px-4 py-2 text-white font-medium bg-[#72c053] hover:bg-green-500 active:bg-green-600 rounded-lg duration-150"
                        >
                            {isLoading ? 'Loading...' : 'Sign Up'}
                        </button>
                    </form>
                </div>
                <div className="text-center">
                    <a href="javascript:void(0)" className="hover:text-green-600">Forgot password?</a>
                </div>
            </div>
        </main>
    )
};

export default LoginPage;




