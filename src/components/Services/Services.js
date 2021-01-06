import {useState} from 'react'
import './services.scss'
import Header from '../Header/Header'
import {Link, Switch, Route} from 'react-router-dom'
import ServiceSlider from '../Services/service-small-slider/Service_slider'
import bg1 from '../../assets/services/bg1.jpg'
import bg2 from '../../assets/services/bg2.jpg'
import bg3 from '../../assets/services/bg3.jpg'
import bg6 from '../../assets/services/bg6.jpg'
import Serviceitem from  './service-item/Service_item'
import goto from '../../assets/footer/goto.svg'
import Servicemain from './service-main/Servicemain'
import reviews from '../../assets/service-items/reviews.jpg'
import assembly from '../../assets/service-items/assembly.jpg'
import repair from '../../assets/service-items/repair.jpg'
import covering from '../../assets/service-items/covering.jpg'

const Services = () => {
    const [sliderContent] = useState([ // to potem z serwera i bazy danych. DO ZROBIENIA
    {
        line1: "POKRYCIA",
        line2: "DACHOWE",
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
      line1: "MONTAŻ",
      line2: "STOLARKI",
      line3: "BUDOWLANEJ",
      image: bg6,
    }
  ])
  
  const [serviceItems] = useState([
    {
      navContent: `Pokrycia dachów`,
      pathEndPoint: 'roof-building',
      header: 'Pokrycia dachów',
      image: covering,
      contentLine1: `Najczęściej konstrukcja dachów na budynkach mieszkalnych to szkielet i pokrycie dachu. 
      Takie dachy są zbudowane głównie z drewna i przyjmują wiele różnych kształtów i są pokryte różnymi materiałami.`,
      contentLine2: `Większość ludzi myśli o pokryciu dachu, gdy ktoś mówi o dachu. System pokryć dachowych jest bardzo złożony i składa się z zestawu materiałów i rozwiązań technicznych. 
      Różne komponenty współpracują ze sobą, aby chronić Twój dom przed warunkami pogodowymi, żywiołami, a nawet niektórymi ludźmi. 
      Pokrycie dachu jest najbardziej wizualną częścią całego systemu i stanowi większość hydroizolacji i ochrony dlatego właśnie pokrycie dachu jest jedną z jego najważniejszych części.`,
      contentLine3: `Nasza firma specjalizuje się w wykonywaniu wszelkiego rodzaju pokryć dachowych na dachach o różnych kształtach zaczynając od płaskich, jednospadowych poprzez dwuspadowe i kopertowe a kończąc na skomplikowanych konstrukcjach takich jak dachy wielospadowe przy wykorzystaniu różnego rodzaju materiałów.
      Swoją pracę zawsze zaczynamy od ustalenia z klientem jaki rodzaj pokrycia będzie zastosowany oraz od omówienia szczegółów dotyczących pokrywania dachu.
      Z chęcią odpowiadamy na pytania i rozwiewamy wszelkie wątpliwości dotyczące  procesu pokrywania dachu. W trakcie prac zawsze utrzymujemy kontakt z klientem i inforumujemy go na bierząco o postępach prac.`
    },
    {
      navContent: `Naprawy`,
      pathEndPoint: 'repairs',
      header: 'Naprawa i wymiana',
      image: repair,
      contentLine1: `Podejmowanie dobrych decyzji jest kluczem do minimalizacji krótko i długoterminowych kosztów związanych z remontem domu. Jest to szczególnie ważne w przypadku dużych, złożonych prac, takich jak ponowne dachowanie na wypadek jego uszkodzenia. W tym konkretnym przypadku decyzję należy podjąć jak najszybciej aby zminimalizować prawdopodobieństwo dalszego rozprzestrzeniania się uszkodzeń w strukturze dachu.
      Decyzja ta będzie dotyczyć tego, czy po prostu załatać przecieki i uszkodzone obszary, czy też należy częściowo lub całkowicie wymienić dach. Jeśli wybierzesz tę drugą opcję, będziesz musiał również zdecydować, czy pokryć istniejący dach, czy go usunąć.`,
      contentLine2: `Pamiętaj jednak, że wymiana dachu to nie przelewki. Wykonywanie napraw dachów przez osoby nie przeszkolone do tego i bez odpowiedniego doświadczenie może przewyższyć znacznie początkowe koszty napraw wykonanych przez firmy specjalizujące sie w tego typu zadaniach.`,
      contentLine3: `Gdy zdecydujesz się zadzwonić po profesjonalistę zgłoś się do nas! Oferujemy profesjonalne i kompleksowe podejście do naprawy i wymiany dachu, dlatego śmiało można na nas polegać. Zajmiemy się wszystkim od naprawy uszkodzeń do kompletnej wymiany w taki sposób aby sprostać oczekiwaniom klienta oraz uzyskać tylko i wyłącznie najlepszy efekt z możliwych.`
    },
    {
      navContent: `Przeglądy`,
      pathEndPoint: 'reviews',
      header: 'Przeglądy',
      image: reviews,
      contentLine1: `Dach Twojego domu to pierwsza linia obrony przed burzami i ekstremalnymi warunkami pogodowymi, niezależnie od tego, czy jest to śnieg spadający w ciągu nocy, czy też silne wiatry, które przedzierają się przez miasto.
      Kiedy właściciele domów ślepo wierzą w swój dach i całkowicie go zaniedbują, aż do pojawienia się pierwszych oznak przecieku w suficie, mogą już borykać się z dużo większymi problemami - na przykład niechcianymi problemami strukturalnymi, rozwojem pleśni lub uszkodzoną izolacją.
      Jeżeli z jakiegoś powodu masz przeczucie że to czas aby ktoś spojrzał fachowym okiem na Twój dach nie zwlekaj.`,
      contentLine2: `Oferujemy przeglądy dachów z szczególnym zwróceniem uwagi na newralgiczne punkty dachu.
      Do tych miejsc możemy zaliczyć między innymi kosze dachowe, obróbki  blacharskie, rynny czy przejścia przez połać.
      Są to miejsca, które należy sprawdzić bardzo dokładnie.
      Okres zimowy dla tych miejsc jest prawdziwym egzaminem wytrzymałości.
      Sprawdzenia wymagają również dachówki ze względu na możliwość powstania na nich defektów związanych z opadami i zaleganiem śniegu.
      Kolejną ważną rzeczą jest kontrola systemu odwodnienia dachu. Rynny powinny być drożne i nie powinny w nich zalegać żadne zanieczyszczenia. 
      Są to tylko niektóre elementy wymagające kontroli, dlatego jeżeli martwisz się stanem swojego dachu skontaktuj się z nami aby dokonać przeglądu dachu.`
    },
    {
      navContent: `Montaż stolarki budowlanej`,
      pathEndPoint: 'assembly',
      header: 'Montaż stolarki budowlanej',
      image: assembly,
      contentLine1: 'Nasza firma oferuje również usługi z zakresu montażu stolarki budowlanej. Zajmujemy się  montażem okien i drzwi balkonowych, okien dachowych, drzwi zewnętrznych i wewnętrznych oraz montaż bram, osłon okiennych oraz drzwiowych. Wszystkie powierzone zadnia wykonywane są przez pracowników z odpowiednią wiedzą oraz doświadczeniem przy zachowaniu należytej precyzji i dokładności, tak aby efekt końcowy spełniał wszystkie oczekiwania klienta.'
    }
  ])

    return (
        <div>
            <Header header={'Usługi'}/>
            <div className='outer-services'>
                <ServiceSlider sliderContent={sliderContent} />
                <div className='service-nav'>
                  {
                    serviceItems.map(({pathEndPoint, navContent}, index) => {
                      return (
                        <Link key={index} className='service-link' to={`/services/${pathEndPoint}`}><div><img alt='goto' src={goto}/>{navContent}</div><div className='service-underline'/></Link>
                      )
                    })
                  }
                </div>
            </div>
            <Switch>
              <Route exact path='/services' component={Servicemain} />
              {
                serviceItems.map(({pathEndPoint, ...serviceItemProps}, index) => {
                  return(
                    <Route key={index} exact path={`/services/${pathEndPoint}`}>
                      <Serviceitem {...serviceItemProps} />
                    </Route>
                  )
                })
              }
            </Switch>
        </div>
        
    )
}

export default Services;