import HomeSlider from '../HomeSlider/HomeSlider'
import Services from '../Services/Services'
import About from '../About/About';
import Contact from '../Contact/Contact'


const Home = () => {
    return (
      <div id='home' className='home'>
        <HomeSlider />
        <Services />
        <About />
        <Contact />
      </div>
    )
}

export default Home;