import HomeSlider from './HomeSlider/HomeSlider'
import Services from './Services/Services'
import About from './About/About';


const Home = ({sliderContent}) => {

    return (
      <div id='home' className='home'>
        <HomeSlider sliderContent={sliderContent}/>
        <Services />
        <About />
      </div>
    )
}

export default Home;