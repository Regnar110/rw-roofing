import { useEffect } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animation.scss';
import './homeslider.scss';
import slide1 from '../../assets/slider-photos/s1.jpg'
import slide2 from '../../assets/slider-photos/s2.jpg'
import slide3 from '../../assets/slider-photos/s3.jpg'
import slide4 from '../../assets/slider-photos/s4.jpg'

const HomeSlider  = () => {

    const content = [ // to potem z serwera i bazy danych. DO ZROBIENIA
        {
            title: "Firma Dekarska RW",
            line1: "ZAWSZE",
            line2: "DOBRA",
            line3: "ROBOTA",
            line4: ".",
            image: slide1,
        },
        {
            title: "PROFESJONALIZM ORAZ",
            line1: "PRECYZJA",
            line2: "PONAD",
            line3: "WSZYSTKO",
            line4: ".",
            image: slide2,
        },
        {
            title: 'WYŁĄCZNIE',
            line1: "FACHOWA",
            line2: "I KONKURENCYJNA",
            line3: "WYCENA",
            line4: ".",
            image: slide4,
          },
          {
            title: "BĄDŹ SPOKOJNY",
            line1: "ZAJMIEMY ",
            line2: "SIĘ",
            line3: "WSZYSTKIM",
            line4: ".",
            image: slide3,
          }
      ];

    return(
        <Slider className="slider-wrapper" autoplay={2000}>
            {content.map((item, index) => (
            <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center`}}
            >
                <div className="inner">
                    <h1>{item.title}</h1>
                    <p>{item.line1}</p>
                    <p>{item.line2}</p>
                    <p>{item.line3}<span>{item.line4}</span></p>
                </div>
            </div>
            ))}
        </Slider>
    )
}

export default HomeSlider;