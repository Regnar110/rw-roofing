import {useState} from 'react'
import './services.scss'
import Header from '../Header/Header'
import {Link, Switch, Route} from 'react-router-dom'
import ServiceSlider from '../Services/service-small-slider/Service_slider'
import bg1 from '../../assets/services/bg1.jpg'
import bg2 from '../../assets/services/bg2.jpg'
import bg3 from '../../assets/services/bg3.jpg'
import bg4 from '../../assets/services/bg4.jpg'
import bg5 from '../../assets/services/bg5.png'
import bg6 from '../../assets/services/bg6.jpg'
import Serviceitem from  './service-item/Service_item'
import goto from '../../assets/footer/goto.svg'
import Servicemain from './service-main/Servicemain'

const Services = () => {
    const [sliderContent] = useState([ // to potem z serwera i bazy danych. DO ZROBIENIA
    {
        line1: "BUDOWA",
        line2: "DACHÓW",
        image: bg1,
    },
    {
        line1: "NAPRAWA",
        line2: "I WYMIANA",
        line3: "DACHÓW",
        image: bg2,
    },
    {
        line1: "PRZEGLĄDY",
        image: bg3,
      },
      {
        line1: "DORADZTWO",
        line2: "I WYCENA",
        image: bg4,
      },
      {
        line1: "KONSTRUKCJE",
        line2: "DACHOWE",
        image: bg5,
      },
      {
        line1: "MONTAŻ",
        line2: "STOLARKI",
        line3: "BUDOWLANEJ",
        image: bg6,
      }
  ])
  const [serviceItems] = useState([
    {
      pathEndPoint: 'roof-building',
      header: 'Budowa dachów'
    },
    {
      pathEndPoint: 'repairs',
      header: 'Naprawa i wymiana'
    },
    {
      pathEndPoint: 'reviews',
      header: 'Przeglądy'
    },
    {
      pathEndPoint: 'consulting-and-pricing',
      header: 'Doradztwo i wycena'
    },
    {
      pathEndPoint: 'roof-structures',
      header: 'Konstrukcje Dachowe'
    },
    {
      pathEndPoint: 'assembly',
      header: 'Montaż stolarki budowlanej'
    }
  ])

    return (
        <div>
            <Header header={'Usługi'}/>
            <div className='outer-services'>
                <ServiceSlider sliderContent={sliderContent} />
                <div className='service-nav'>
                  <Link className='service-link' to='/services/roof-building'><div><img alt='goto' src={goto}/>Budowa dachu</div><div className='service-underline'/></Link>
                  <Link className='service-link' to='/services/repairs'><div><img alt='goto' src={goto}/>Naprawa</div><div className='service-underline'/></Link>
                  <Link className='service-link' to='/services/reviews'><div><img alt='goto' src={goto}/>Przeglądy</div><div className='service-underline'/></Link>
                  <Link className='service-link' to='/services/consulting-and-pricing'><div><img alt='goto' src={goto}/>Wycean i doradztwo</div><div className='service-underline'/></Link>
                  <Link className='service-link' to='/services/assembly'><div><img alt='goto' src={goto}/>Montaż stolarki budowlanej</div><div className='service-underline'/></Link>
                </div>
            </div>
            <Switch>
              <Route exact path='/services' component={Servicemain} />
              {
                serviceItems.map(({pathEndPoint, header}, index) => {
                  return(
                    <Route key={index} exact path={`/services/${pathEndPoint}`}>
                      <Serviceitem header={header} />
                    </Route>
                  )
                })
              }
            </Switch>
        </div>
        
    )
}

export default Services;