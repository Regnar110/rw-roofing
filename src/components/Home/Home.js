import HomeSlider from '../HomeSlider/HomeSlider'
import Services from '../Services/Services'
import About from '../About/About';


const Home = () => {
    return (
      <div id='home' className='home'>
        <HomeSlider />
        <Services />
        <About />
      </div>
    )
}

export default Home;