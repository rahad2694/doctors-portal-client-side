import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center align-middle h-screen">
            <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;