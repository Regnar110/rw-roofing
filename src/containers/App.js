// import { Frame, Scroll, useCycle } from "framer"
import { useEffect, useState } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import Home from '../components/Home/Home'
import NavigationLarge from '../components/NavigationLarge/NavigationLarge'
import NavigationSmall from '../components/NavigationSmall/NavigationSmall'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'


function App() {
  const [navType, setNav] = useState('large');
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
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact} />
      </Switch>
     <Footer />
    </div>
  )
}
export default App;
