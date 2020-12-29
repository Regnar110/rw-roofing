import { useState } from 'react'
import NavigationLarge from '../NavigationLarge/NavigationLarge'
import NavigationSmall from '../NavigationSmall/NavigationSmall'
import HomeSlider from '../HomeSlider/HomeSlider'
import Services from '../Services/Services'

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
        <Services />
      </div>
    )
}

export default Home;