import React from 'react';
import './contact.scss'
import tel from '../../assets/contact/tel.svg'
import mail from '../../assets/contact/mail.svg'
import logo from '../../assets/logo-bg.png'
import Header from '../../components/Header/Header'

const Contact = () => {
    return (
        <div className='contact'>
            <Header header={'Kontak'}/>
            <div className='contact-content'>
                <div className='contact-details'>
                    <h2>Dekarstwo <img alt='rw' src={logo}/></h2>
                    <div className='tel'>
                        <div className='tel-icon'>
                            <img alt='tel' src={tel} />
                        </div>
                        <div className='tel-detail'>
                            <p>123 456 789</p>
                            <p id='desc'>Proszę o kontak w godzinach 7-18</p>
                        </div>

                    </div>
                    <div className='mail'>
                        <div className='mail-icon'>
                            <img alt='mail' src={mail} />
                        </div>
                        <p id='mail'>dekarstwoRW@gmail.com</p>
                    </div>
                    <div className='company-data'>
                        <h2>Dane firmy</h2>
                        <div className='details'>
                            <p>Dekarstwo RW Rafał Wrycza</p>
                            <p>83-200 Starogard Gdański</p>
                            <p>ul.Klebeerga 74a</p>
                            <p>NIP: 123-456-789</p>
                            <p>REGON: 123456789</p>
                        </div>
                    </div>
                </div>
                <div className="mapouter">
                    <h2>Lokalizacja</h2>
                    <div className="gmap_canvas">
                        <iframe title='google-maps' width="602" height="344" id="gmap_canvas" src="https://maps.google.com/maps?q=starogard%20GDa%C5%84ski%2C%20ul%20kleberga%2074a&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
                    </div>
                </div>
            </div>
            <footer className='rodo-footer'>
                <span>RODO</span>
                <p>
                    Zgodnie z RODO użyjemy Państwa danych (adresu e-mail; nr telefonu) dla potrzeb realizacji usługi:
                </p>
                <p>
                    – udzielenia odpowiedzi na zapytanie ofertowe
                </p>
                <p>
                    – realizację i umówienie terminów wykonania prac dekarskich.
                </p>
            </footer>
        </div> 
    )
}

export default Contact