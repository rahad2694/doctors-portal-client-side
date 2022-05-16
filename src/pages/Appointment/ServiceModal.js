import React from 'react';

const ServiceModal = ({treatment}) => {
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            {/* <label htmlFor="service-modal" className="btn modal-button">open modal</label> */}
            {/* 
            <!-- Put this part before 
            </body> tag-- > */}
            <input type="checkbox" id="service-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="service-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment?.name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div >
    );
};

export default ServiceModal;