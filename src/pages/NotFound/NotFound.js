import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-center my-3'>
            <Link to="/">
                <img className='rounded-xl' src="https://cdn.dribbble.com/users/1676373/screenshots/4177728/404.gif" alt="" />
            </Link>
        </div>
    );
};

export default NotFound;