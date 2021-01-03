import React from 'react';
import './service_item.scss'
import background from '../../../assets/outerabout/outer-about-bg.jpg'


const Serviceitem = ({ header, contentLine1, contentLine2, contentLine3 }) => {
    return(
        <div className='service-item'>
            <div className='service-item-header'>
                <h1>{header}</h1>
            </div>
            <div className='service-item-content'>
                <div className='image-container' style={{
                    background: `url(${background}) center center no-repeat`,
                    backgroundSize: `cover`
                }} />
                <div className='text-content'>
                    <p>
                        {contentLine1}
                    </p>
                    <p>
                        {contentLine2}
                    </p>
                    <p>
                        {contentLine3}
                    </p>
                    <div className='tel'>
                        <i className="fas fa-phone fa-2x"/><p>123-456-789</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Serviceitem;