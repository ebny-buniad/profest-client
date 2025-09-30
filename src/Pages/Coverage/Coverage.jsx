import React from 'react';
import MapComponent from './MapComponent';

const Coverage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 text-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                We are available in 64 districts
            </h1>

            {/* Placeholder for Search Box */}
            <div className="mb-6">
                {/* Search box will go here later */}
            </div>

            <div className="max-w-5xl mx-auto border-4 border-teal-500 rounded-2xl overflow-hidden shadow-lg">
                <MapComponent />
            </div>
        </div>
    );
};

export default Coverage;