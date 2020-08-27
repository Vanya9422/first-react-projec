import React from 'react';

const Loader = () => {

    return (
        <div className="loader-block d-block w-100 text-center">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    )

};

export default Loader;