import React from 'react'
import './servicemain.scss'
import main_services from '../../../assets/main-services/main-img.jpeg'
import one from '../../../assets/main-services/one.svg'
import two from '../../../assets/main-services/two.svg'
import three from '../../../assets/main-services/three.svg'

const Servicemain = () => {
    return(
        <div>
            <div className='main-services-content'>
            <div className='text'>
            <h2>Nasze usługi..</h2>
            <p>
                Zawód dekarza wymaga przede wszystkim obycia ze środowiskiem pracy jak i praktyki zdobywanej w pracy i na szkoleniach.
                Dlatego nasi pracownicy traktują swoją pracę z szacunkiem, dbają o najmniejsze detale, dobrą komunikację z klientem oraz zawsze starają się podążać za najnowszymi trendami ze świata dekarstwa poprzez uczestniczenie w szkoleniach.
                Mimo tego, że jesteśmy młodą firmą, zawsze staramy się konkurować z najlepszymi co dodatnio przekłada się na zadowolenie klientów.
                Usługi, które świadczymy wykonujemy z myślą o kliencie i przede wszystkim w oparciu o dobre praktyki dekarskie.
                Firma świadczy usługi w zakresie budowania dachów, napraw i wymian pokryć dachowych, przeglądów, wyceny i doradztwa a także z zakresu montażu stolarki budowlanej.
                Zapraszamy do zapoznania się z konkretnymi usługami.
            </p>
            </div>
            <div className='main-service-image'>
            <img alt='main-service' src={main_services}/>
            </div>
        </div>
        <div className='second-main-services-content'>
            <div className='second-main-service-image'>
                <img alt='main-service2' src={main_services}/>
            </div>
            <div className='second-text'>
                <h2>Trzy wskazówki kiedy dokładniej przyjrzeć się swojemu dachu</h2>
                <div className='second-text-items'>
                <div className='item'>
                    <h3> <img alt='one' src={one} />Kompletnośc i stan dachówek</h3>
                    <p>
                    Jeżeli zauważyłeś że stan dachówek uległ pogorszeniu, dachówki są uszkodzone, ułożone w nienaturalny sposób lub po prostu ich brakuje, nie zwlekaj z wezwaniem specjalisty.
                    Długotrwałe lub silne opady szybko i brutalnie odkryją przeoczone defekty poprzez zawilgocenie wewnętrznej strony dachu, a nawet podciekania.
                    </p>
                </div>
                <div className='item'>
                    <h3> <img alt='two' src={two} />Stan Rynien</h3>
                    <p>
                    Zdarza się tak, że systemy rynnowe w wyniku działania róznych sił ulegają odkształceniom lub pęknięciom.
                    W takich wypadkach może dojść do tego, że deszczówka zaleje elewacje lub wniknie pod okap.
                    Może to doprowadzić do zniszczenia drewnianej konstrukcji dachu.
                    </p>
                </div>
                <div className='item'>
                    <h3> <img alt='three' src={three} />Sufit w domu</h3>
                    <p>
                    Wbrew pozorom aby dowiedzieć się w jakim stanie jest nasz dach nie zawsze trzeba przyglądać sie jemu z zewnątrz.
                    Czasem wystarczy spojrzeć na sufit w domu i skosom ścian. Jeżeli widzimy jakiekolwiek zacieki, to może być dla nas wiarygodna informacja, że nasz dach nie jest szczelny.

                    </p>
                </div>
                
                </div>
                
            </div>
        </div>
      </div>
    )
}

export default Servicemain