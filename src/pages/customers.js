import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from '../share';
import AddCustomer from "../components/AddCustomer";


export default function Customers() {
    const url = baseUrl + "api/customers";
    const [customers, setCustomers] = useState(); // added empty dependency array

    function newCustomer(name, industry) {
        const data = { name: name, industry: industry };
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCustomers([...customers, data.customer]);
            })
            .catch(error => console.log(error));
    }

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
        <div>
            <h1 className="text-center">Customers:</h1>
            {customers
                ? customers.map((customer) => {
                    return (
                        <div className="text-center"
                         key={customer.id}>
                            <Link to={"/customers/" + customer.id}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-50 h-16">
                                    {customer.name}
                                </button>
                            </Link>
                        </div>
                    );
                }) : null}
             <AddCustomer newCustomer={newCustomer} />
        </div>
    );
}