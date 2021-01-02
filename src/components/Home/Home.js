import HomeSlider from './HomeSlider/HomeSlider'
import Services from './Services/Services'
import About from './About/About';
import Projects from './Projects/Projects'


const Home = ({sliderContent}) => {

    return (
      <div id='home' className='home'>
        <HomeSlider sliderContent={sliderContent}/>
        <Services />
        <About />
        <Projects />
      </div>
    )
}

export default Home;