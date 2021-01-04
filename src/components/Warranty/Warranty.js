import React from 'react'
import './warranty.scss'
import background from '../../assets/warranty/background.jpg'
import umbrella from '../../assets/warranty/umbrella.svg'
import quality from '../../assets/warranty/quality.svg'
import professional from '../../assets/warranty/profes.svg'


const Warranty = () => {
    return (
        <div className='warranty' style={{
            background: `url(${background}) center center no-repeat fixed`,
            backgroundSize: 'cover'
        }}> 
            <div className='inner-warranty'>
                <div className='content'>
                    <div className='image'><img alt='warranty' src={umbrella}/></div>
                    <div className='text-content'>
                        <div className='warranty-header'>5 Lat</div>
                        <div className='warranty-text'>gwarancji</div>
                    </div>
                </div>
                <div className='content'>
                    <div className='image'><img alt='warranty' src={quality}/></div>
                    <div className='text-content'>
                        <div className='warranty-header'>Satysfakcja</div>
                        <div className='warranty-text'>Gwarantowana</div>
                        <div className='warranty-text-two'>Pewni wartości naszych usług</div>
                    </div>
                </div>
                <div className='content'>
                    <div className='image'><img alt='warranty' src={professional}/></div>
                    <div className='text-content'>
                        <div className='warranty-header'>Profesjonalne</div>
                        <div className='warranty-text'>Oraz fachowe usługi</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Warranty;