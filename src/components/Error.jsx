import React from 'react';

const Error = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'100vh'}}>
            <img alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNygp1lq0SGI2Z6mIla4eknZ2OvPpWdw7fg&usqp=CAU" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/2198px-Error.svg.png" style={{width:'200px'}}/>
            <h1 className='banner-title my-4'>Oooops!</h1>
            <p>Something went wrong!!</p>
        </div>
    );
};

export default Error;