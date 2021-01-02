import { useEffect, useState, useRef } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../Home/HomeSlider/slider-animation.scss';
import './serviceslider.scss';

const HomeSlider  = ({ sliderContent }) => {

    const [slideNum, setSlideNum] = useState(0)

    const prevSlideNum = useRef();

    useEffect(() => {
        prevSlideNum.current = slideNum; // w trakcie zmiany stanu (asynch) slideNum odpala się hook efektów ze względu na componentDidUpdate i  do zmiennej prevSlideNum przypisujemy tą aktualną wersję slideNum, która przy kolejnej zmianie będzie tą poprzednią
    })

    const dotChanger = (slideIndex) => {
        setSlideNum(slideIndex); // asynchronicznie zmieniamy stan slideNum na slideIndex
        const prevNum = prevSlideNum.current // poprzedni stan slideNum. Potrzebny do usuwania niepotrzebnych klas w kropkach pod slajderem
        const dot = document.querySelectorAll('.dot');
        dot[slideIndex].classList.add('dot-active');
        dot[prevNum].classList.remove('dot-active')
    }

    return(
        <div className='small-slider-container'>
            <Slider className="small-slider-wrapper" autoplay={4000} onSlideChange={({slideIndex}) => dotChanger(slideIndex)}>
                {sliderContent.map((item, index) => (
                <div
                    key={index}
                    className="small-slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center`}}
                >
                    <div className="small-inner">
                        <p>{item.line1}</p>
                        <p>{item.line2}</p>
                        <p>{item.line3}</p>
                    </div>
                </div>
                ))}
            </Slider>
            <div className='slider-dots'>
                {  
                     sliderContent.map((el, index) => {
                        return <div key={index} id={index} className='dot'></div>
                    })
                }
            </div>
            <div className='mobile-scroll'></div>
        </div>


    )
}

export default HomeSlider;