import { useParams, Link, useNavigate,useLocation } from 'react-router-dom';
import { useEffect, useState,useContext } from 'react';
import { baseUrl } from '../share';
import { LoginContext } from '../App';

export default function Customer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [customer, setCustomer] = useState();
    const [tempCustomer, setTempCustomer] = useState();
    const [notFound, setNotFound] = useState();
    const [changed, setChanged] = useState(false);
    const [error, setError] = useState(false);
    const [loggedIn, setLoggedIn] = useContext(LoginContext);

    useEffect(() => {
        if (!customer) return;
        if (!customer) return;

        let equal = true;
        if (customer.name !== tempCustomer.name) equal = false;
        if (customer.industry !== tempCustomer.industry) equal = false;

        if (equal) setChanged(false);
    },[]);

    useEffect(() => {
        const url = baseUrl + 'api/customers/' + id;
        fetch(url,{
            headers:{
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
        })
            .then((response) => {
                if (response.status === 404) {
                    
                    setNotFound(true);
                }
                else if (response.status === 401) {
                    setLoggedIn(false);
                    navigate('/login',
                        {
                            state: {
                                previousUrl: location.pathname,
                            },
                        });
                }
                if (!response.ok)
                    throw new Error('Something went wrong!');

                return response.json();
            })
            .then((data) => {
                setCustomer(data.customer);
                setTempCustomer(data.customer);
                setError(undefined);
            })
            .catch((e) => {
                console.log(e);
                setError(e.message);
            });
    }, []);

    function updateCustomer(e) {
        e.preventDefault();
        const url = baseUrl + 'api/customers/' + id;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
            body: JSON.stringify(tempCustomer),
        })
            .then((response) => {
                if (response.status === 401){
                    setLoggedIn(false);
                    navigate('/login',
                    {
                        state: {
                            previousUrl: location.pathname,
                        },
                    });
                }
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                return response.json();
            })
            .then((data) => {
                setCustomer(data.customer);
                setChanged(false);
                console.log(data);
                setError(undefined);
            })
            .catch(
                (e) => {
                    console.log(e);
                    setError(e.message);
                }
            );
    }

    return (
        <>
            {notFound ? <p>The customer with id {id} was not found</p> : null}

            {customer ? (
                <>
                    <div className="items-center justify-center">
                        <form id ='customer' onSubmit={updateCustomer} className="flex flex-col items-center justify-center">
                            <label for='name' className="block text-gray-700 font-bold mb-2">Name</label>
                            <input
                                className="w-1/2 p-2 my-2 border border-gray-400 rounded-md"
                                id='name'
                                type="text"
                                value={tempCustomer.name}
                                onChange={(e) => {
                                    setChanged(true);
                                    setTempCustomer({
                                        ...tempCustomer,
                                        name: e.target.value,
                                    });
                                }}
                            />
                            <label htmlFor='industry' className="block text-gray-700 font-bold mb-2">Industry</label>
                            <input
                                className="w-1/2 p-2 my-2 border border-gray-400 rounded-md"
                                id='industry'
                                type="text"
                                value={tempCustomer.industry}
                                onChange={(e) => {
                                    setChanged(true);
                                    setTempCustomer({
                                        ...tempCustomer,
                                        industry: e.target.value,
                                    });
                                }}
                            />
                        </form>
                        {changed ? (
                            <div className="flex justify-center">
                                <button
                                    className="px-4 py-2 my-2 mr-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                                    onClick={(e) => {
                                        setTempCustomer({ ...customer });
                                        setChanged(false);
                                    }}
                                >
                                    Cancel
                                </button>
                                <button form='customer' className="px-4 py-2 my-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                                    Save
                                </button>
                            </div>
                        ) : null}

                    </div>
                    {error ? <p className="text-red-500 text-center">{error}</p> : null}
                    <button
                        className="px-4 py-2 my-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                        onClick={(e) => {
                            const url = baseUrl + 'api/customers/' + id;
                            fetch(url, {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json',
                                     Authorization: 'Bearer ' + localStorage.getItem('access'),
                                },
                            })
                                .then((response) => {
                                    if (response.status === 401)
                                        {
                                        setLoggedIn(false);
                                        navigate('/login',
                                        {
                                            state: {
                                                previousUrl: location.pathname,
                                            },
                                        });
                                    }
                                    if (!response.ok) {
                                        throw new Error('Something went wrong');
                                    }
                                    navigate('/customers');
                                })
                                .catch((e) => {
                                    console.log(e);
                                });
                        }}
                    >
                        Delete
                    </button>
                </>
            ) : null}
            <br />
            <Link
                className="text-center block mt-4 no-underline text-blue-500 hover:text-blue-700 font-bold text-sm transition duration-300 ease-in-out"
                to="/customers"
            >
                <p>← Back to customers list</p>
            </Link>
        </>
    );
}