import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import NotFound from '../components/NotFound';
import { baseUrl } from '../share';

export default function Customer() {
    const { id } = useParams();
    //const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState(false);
    //const [error, setError] = useState(false); // added empty dependency array
    useEffect(() => {
        const url = baseUrl + "/api/customers/" + id;
        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                }
               return response.json()
            })
            .then((data) => {
                setCustomer(data.customer);
            });

    }); // added empty dependency array

    return (

        <>
            {notFound ?
            <>
             <NotFound/> 
             <p className='text-center text-gray-600 mt-4'>No customer with id: {id}</p>
             </>
             : null}
            {customer ?
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h1 className="text-3xl font-bold mb-2">{customer.name}</h1>
                    <p className="text-gray-700 text-lg mb-2">ID: {customer.id}</p>
                    <p className="text-gray-700 text-lg">Industry: {customer.industry}</p>
                    <Link to='/customers'>Go back</Link>
                </div>
                : null}
        </>
    );

}