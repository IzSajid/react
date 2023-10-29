import { useState, useEffect, useContext } from 'react';
import { baseUrl } from '../share';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

export default function Register() {
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();
        setLoggedIn(false);
    }, []);

    function login(e) {
        e.preventDefault();
        const url = baseUrl + 'api/register';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                localStorage.setItem('access', data.access);
                localStorage.setItem('refresh', data.refresh);
                setLoggedIn(true);
                navigate(
                    location?.state?.previousUrl
                        ? location.state.previousUrl
                        : '/dashboard'
                );
            });
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-300">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="customer" onSubmit={login}>
                <h2 className="text-2xl font-bold mb-6">Register</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" for="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" for="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}