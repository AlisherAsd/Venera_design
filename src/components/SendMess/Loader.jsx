import React from 'react';
import loader from '../../IMG/tube-spinner.svg'

const Loader = () => {
    return (
        <div>
            <img src={loader} style={{textAlign: 'center', height: 150, marginBottom: 500}}/>
        </div>
    );
};

export default Loader;