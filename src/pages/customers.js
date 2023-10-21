import React from 'react';

function Customers() {
    return (
        <div className="bg-gray-100 min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Customer Page</h1>
                    <p className="text-lg text-gray-700 mb-8">Welcome to the customer page!</p>
                </div>
            </div>
        </div>
    );
}

export default Customers;
