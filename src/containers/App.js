// import { Frame, Scroll, useCycle } from "framer"
import { useEffect, useState } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import Home from '../components/Home/Home'
import NavigationLarge from '../components/NavigationLarge/NavigationLarge'
import NavigationSmall from '../components/NavigationSmall/NavigationSmall'
import Contact from '../components/Contact/Contact'



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
    </div>

  )
}
export default App;









// function App() {

//   const [animate, cycle] = useCycle( // dzięki use cycle możemy zmieniac cykle animacji. Tu destrukturyzujemy z tabilcy animate i cycle. parametr cycle przekazujemy jako event handler do komponentu w którym ma być wywołanym natomiast animate tak samo jako "kontener" na animacje
//     {scale: 1.0, rotate: 0}, // każdy z tych obiektów to jeden cykl
//     {scale: 2.0, rotate: 0},
//     {top: 100, scale: 0.5}
//   )

//   return (
//     <Frame size={100} center animate={animate} onTap={cycle} left={200} top={1100}> 
//       <div style={{backgroundColor:'red'}}>
//         hello :)!
//       </div>
//      </Frame>
//   );
// }

// export default App;
