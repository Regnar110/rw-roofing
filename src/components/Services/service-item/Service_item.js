import React from 'react';
import './service_item.scss'


const Serviceitem = ({ header }) => {
    console.log('service mounted')
    return(
        <div className='service-item'>
            <div className='service-item-header'>
                <h1>{header}</h1>
            </div>
        </div>
    )
}

export default Serviceitem;