import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>OOPS!!!</h1>
            <h2>Page which you are looking forward is not AVAILABLE</h2>
            <h1>404!! <span className='span-error'> :(</span></h1>
            <i className='i'>NOT FOUND</i>
        </div>
    );
};

export default NotFound;