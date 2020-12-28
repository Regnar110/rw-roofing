// import { Frame, Scroll, useCycle } from "framer"
import { useState } from 'react';
import './App.scss';
import Home from '../components/Home/Home'


function App() {
  const [navType, setNav] = useState('large')

  const changeNavBar = () => {
    const navBarRender = window.matchMedia("(max-width: 565px)")
      navBarRender.matches ? setNav('small') : setNav('large');
  }
  window.addEventListener('resize', changeNavBar);

  return(
    <Home navType={navType}/>
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
