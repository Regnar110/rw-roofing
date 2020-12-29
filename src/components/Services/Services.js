import './services.scss'
import Tilt from 'react-tilt'
import bg1 from '../../assets/services/bg1.jpg'
import bg2 from '../../assets/services/bg2.jpg'
import bg3 from '../../assets/services/bg3.jpg'
import bg4 from '../../assets/services/bg4.jpg'
import bg5 from '../../assets/services/bg5.png'
import bg6 from '../../assets/services/bg6.jpg'


const Services = () => {

    const data = [
        {
            title: 'Budowa Dachów',
            bg: bg1
        },
        {
            title: 'Naprawa i wymiana dachów',
            bg: bg2
        },
        {
            title: 'Przeglądy',
            bg: bg3
        },
        {
            title: 'Doradztwo i wycena',
            bg: bg4
        },
        {
            title: 'Konstrukcje dachowe',
            bg: bg5
        },
        {
            title: 'Montaż stolarki budowlanej',
            bg: bg6
        }
    ]

    return (
        <div className='services'>
            <div className='header'>
                <h1>Nasza oferta</h1>
                <p>Zapraszam do zapoznania sie z ofertą naszych usług dekarskich.</p>
                <p>Bardzo chętnie odpowiemy również na państwa pytania dotyczące świadczonych usług.</p>
            </div>
            <div className='services-content'>
                <div className='services-icons'>
                    {
                        data.map(({bg, title}, index) => {
                            return (
                                <Tilt key={index} className="Tilt tilt-container" options={{ max : 25, scale: 1.05 }} >
                                    <div className='background-tilt' style={{
                                        background: `url(${bg}) center center no-repeat`,
                                        backgroundSize: 'cover'
                                    }}></div>
                                    <div className='service-desc'>
                                        <div>{title}</div>
                                    </div>
                                </Tilt>
                            )
                        })
                    }
                </div>
                <div className='more-services'>
                    <p>Aby dowiedzieć się więcej o naszych usługach kliknij niżej.</p>
                    <div className='detailsBtn'>Więcej</div>
                </div>
                
            </div>
        </div>
    )
}

export default Services;