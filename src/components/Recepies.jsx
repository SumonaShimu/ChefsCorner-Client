import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recepies = () => {
    const recepies=useLoaderData()
    return (
        <div>
            {recepies.length}
        </div>
    );
};

export default Recepies;