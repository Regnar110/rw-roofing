import { useState } from 'react'
import NavigationLarge from '../NavigationLarge/NavigationLarge'
import NavigationSmall from '../NavigationSmall/NavigationSmall'
import HomeSlider from '../HomeSlider/HomeSlider'

const Home = ({ navType }) => {

    const [router, setRoute] = useState('home')

    const routeCheckHandler = (route) => {
        setRoute(route);
        console.log(router);
    }

    return (
      <div id='home' className='home'>
        {
            navType === 'large' ? <NavigationLarge router={routeCheckHandler}/> : <NavigationSmall router={routeCheckHandler} />
        }
        <HomeSlider />
        {/* <div id='sections' style={{backgroundColor: 'green', height: '1000px'}}>asdasd</div> */}
      </div>
      
    )
}

export default Home;