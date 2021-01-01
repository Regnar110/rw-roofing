import HomeSlider from './HomeSlider/HomeSlider'
import Services from './Services/Services'
import About from './About/About';
import Projects from './Projects/Projects'


const Home = () => {
    return (
      <div id='home' className='home'>
        <HomeSlider />
        <Services />
        <About />
        <Projects />
      </div>
    )
}

export default Home;