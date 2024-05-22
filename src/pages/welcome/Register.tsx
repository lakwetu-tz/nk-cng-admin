import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCircleInfo } from'react-icons/fa6';
import { FiUserCheck, FiUserX } from 'react-icons/fi';
import { FcGoogle } from "react-icons/fc";

const USERNAME_REGEX = /^[a-zA-Z0-9._-]{4,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]).{8,24}$/;


const RegisterPage: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false)
    const [focusUsername, setFocusUsername] = useState(false)

    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd]);

    useEffect(() => {
        setValidUsername(USERNAME_REGEX.test(username));
    }, [username]);

    useEffect(() => {
        setError('');
    }, [email, username, password, matchPwd]);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true);
        setError('');

        const v1 = PWD_REGEX.test(password);
        const v2 = USERNAME_REGEX.test(username);

        if (!v1 || !v2) {
            setError("Invalid Entry");
            return;
        }

        try {
            setIsLoading(true);
            const response = await axios.post('http://192.168.100.131:4000/api/v1/superuser/register', {
                username,
                email,
                password,
            });

            console.log(username, email, password);
            console.log(response.data);

            if (response.data.status === 'error') {
                setError(response.data.message);
                setIsLoading(false);
                return;
            }

            navigate('/login');
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                // Error from the server
                setError(err.response.data.message || 'An unexpected error occurred');
            } else {
                // Other errors (network issues, etc.)
                setError('An unexpected error occurred');
            }
            console.error('Error during registration:', err);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">

                    <div>
                        <img src={require("../../assets/logo.png")} alt='logo' className='w-32 h-32 absolute left-4 top-4 object-cover' />
                    </div>


                    <p ref={errRef} className={error ? "text-red-500" : "text-green-500"} aria-live="assertive">{error}</p>


                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
                        <p className="">Already have an account? <Link to="/login" className="font-medium text-green-600 hover:text-green-500">Log in</Link></p>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"

                    >
                        <div>
                            <label className="font-medium">
                                <label>
                                    <span className="text-sm text-gray-600">Username
                                        <FiUserCheck className={validUsername ? "text-green-500 ml-2" : "hidden"} />
                                        <FiUserX className={ validUsername || !focusUsername ? "hidden" : "text-red-500 ml-2"} />
                                    </span>
                                </label>
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="root"
                                autoComplete='off'
                                aria-describedby='username-error'
                                onFocus={() => setFocusUsername(true)}
                                onBlur={() => setFocusUsername(false)}
                                aria-invalid={validUsername ? "false" : "true"}
                                required
                                ref={usernameRef}
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                            />
                            <p id="username-error" className={focusUsername && username ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                                <FaCircleInfo className="inline-block mr-1" />
                                Must be between 4 and 20 characters.
                            </p>
                        </div>
                        <div>
                            <label className="font-medium">
                                <span className="text-sm text-gray-600">Email
                                    <span className={email ? "hidden" : "text-red-500 ml-1"}>*</span>
                                </span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                autoComplete="off"
                                ref={emailRef}
                                aria-describedby="email-note"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                            />
                            <p id="emailnote" className={emailFocus && email ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                                <FaCircleInfo className="inline-block mr-1" />
                                Must be a valid email address.
                            </p>
                        </div>
                        <div>
                            <label className="font-medium">
                                <span className="text-sm text-gray-600">Password
                                    <FiUserCheck className={validPwd ? "text-green-500 ml-2" : "hidden"} />
                                    <FiUserX className={ pwdFocus && !validPwd ? "text-red-500 ml-2" : "hidden"} />
                                </span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwd-error"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                            />
                            <p id="pwd-error" className={pwdFocus && !validPwd ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                                <FaCircleInfo className="inline-block mr-1" />
                                Must be between 8 and 24 characters.<br />
                                Must include uppercase and lowercase letters, a number, and a special character.<br />
                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>
                        </div>
                        <div>
                            <label className="font-medium">
                                <span className="text-sm text-gray-600">Confirm Password
                                    <FiUserCheck className={validMatch && matchPwd ? "text-green-500 ml-2" : "hidden"} />
                                    <FiUserX className={validMatch || !matchPwd ? "hidden" : "text-red-500 ml-2"} />
                                </span>
                            </label>
                            <input
                                type="password"
                                id="confirm_password"
                                name="confirm_password"
                                placeholder="Please confirm your password"
                                value={matchPwd}
                                onChange={(e) => setMatchPwd(e.target.value)}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirm-note"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                            />
                            <p id="confirm-note" className={matchFocus && !validMatch ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                                <FaCircleInfo className="inline-block mr-1" />
                                Must match the first password input field.
                            </p>
                        </div>
                        <button
                        type='submit'
                            disabled={ !validPwd || !validMatch || isLoading}
                            className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150"
                        > {isLoading ? 'Loading...' : 'Create account'}
                            
                        </button>
                    </form>
                    <div className="mt-5">
                        <button className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_17_40)">
                                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_40">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default RegisterPage;


