import { useEffect,useState } from "react";  
import { Link } from "react-router-dom";
import { baseUrl } from '../share';
export default function Customers() {
    const url = baseUrl+"api/customers";
    const [customers, setCustomers] = useState(); // added empty dependency array
    useEffect(() => {
        console.log("customers.js fetching...");
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setCustomers(data.customers);
        });
    }, [url]); // added empty dependency array

    return (
        <>
            <h1>Customers:</h1>
                {customers
                    ? customers.map((customer) => {
                    return <Link to={'/customers/' + customer.id}><p>{customer.name}</p></Link>
                }): null}
        </>
    );
    
}
