import './services.scss'
import Tilt from 'react-tilt'
import bg1 from '../../../assets/services/bg1.jpg'
import bg2 from '../../../assets/services/bg2.jpg'
import bg3 from '../../../assets/services/bg3.jpg'
import bg6 from '../../../assets/services/bg6.jpg'
import { Link } from 'react-router-dom';


const Services = () => {

    const data = [
        {
            title: 'Pokrycia dachowe',
            bg: bg1,
            path: 'services/roof-building'
        },
        {
            title: 'Naprawa i wymiana',
            bg: bg2,
            path: '/services/repairs'
        },
        {
            title: 'Przeglądy',
            bg: bg3,
            path: '/services/reviews'
        },
        {
            title: 'Montaż stolarki budowlanej',
            bg: bg6,
            path: '/services/assembly'
        }
    ]

    return (
        <div className='services'>
            <div className='header'>
                <h1>Nasza oferta</h1>
            </div>
            <div className='services-content'>
                <div className='services-icons'>
                    {
                        data.map(({bg, title, path}, index) => {
                            return (
                                <Link key={index} to={path}><Tilt className="Tilt tilt-container" options={{ max : 25, scale: 1.05 }} >
                                    <div className='background-tilt' style={{
                                        background: `url(${bg}) center center no-repeat`,
                                        backgroundSize: 'cover'
                                    }}></div>
                                    <div className='service-desc'>
                                        <div>
                                            {title}
                                            <div className='underline'></div>
                                        </div>
                                    </div>
                                </Tilt></Link>
                            )
                        })
                    }
                </div>
                <div className='more-services'>
                    <Link to='/services'><div className='detailsBtn'>Więcej</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Services;