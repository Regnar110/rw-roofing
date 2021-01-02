// import { Frame, Scroll, useCycle } from "framer"
import { useEffect, useState } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import Home from '../components/Home/Home'
import NavigationLarge from '../components/NavigationLarge/NavigationLarge'
import NavigationSmall from '../components/NavigationSmall/NavigationSmall'
import Contact from '../components/Contact/Contact'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import slide1 from '../assets/slider-photos/s1.jpg'
import slide2 from '../assets/slider-photos/s2.jpg'
import slide3 from '../assets/slider-photos/s3.jpg'
import slide4 from '../assets/slider-photos/s4.jpg'

function App() {
  const [navType, setNav] = useState('large');
  const [sliderContent] = useState([ // to potem z serwera i bazy danych. DO ZROBIENIA
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
  ])

  const windowW= window.innerWidth;

  const changeNavBar = () => { // change nav-bar when resizing window
    const navBarRender = window.matchMedia("(max-width: 620px)")
      navBarRender.matches ? setNav('small') : setNav('large');
  }

  useEffect(() => { // check if window width is less or equal 621px and do action depending on this data
    windowW <= 621 ?
      setNav('small')
      :
      setNav('large')
  }, [windowW])

  window.addEventListener('resize', changeNavBar);

  return(
    <div>
      {
        navType === 'large' ? <NavigationLarge/> : <NavigationSmall/>
      }
      <Switch>
        <Route exact path='/'>
          <Home sliderContent={sliderContent}/>
        </Route>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
            <Route exact path='/services/roof-building' component={Services} />
            <Route exact path='/services/repairs' component={Services} />
            <Route exact path='/services/reviews' component={Services} />
            <Route exact path='/services/consulting-and-pricing' component={Services} />
            <Route exact path='/services/assembly' component={Services} />
      </Switch>
     <Footer />
    </div>
  )
}
export default App;
