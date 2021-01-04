import React, { useEffect, useState } from 'react';
import './about.scss'
import ProgressBar from 'react-customizable-progressbar'
import Header from '../Header/Header'
import background from '../../assets/outerabout/outer-about-bg.jpg'


const About = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timeout; //zmienna słuząca potem do przechowania operacji asynchronicznej i do czyszczeina po niej
        if (progress < 100) {
          timeout = setTimeout(() => { // tiemout staje się operacją setTimeout
            setProgress(progress + 1)
          }, 20); 
        }
        return () => { clearTimeout(timeout) }; // TZW CleanUP function odpalana przy wymontowaniu komponentu. clearTimeout sprząta po setTimeout - usuwa jego efekt i działanie oraz zapobiega przed dalszym działaniem setTimeout.
      }, [progress]);

    return (
        <div>
        <Header header={'O firmie'}/>
            <div className='outer-about' style={{
                background: `url(${background}) center center no-repeat`,
                backgroundSize: 'cover'
            }}>
                <div className='site-content'>
                   <p>
                    Firma dekarska RW została założona w 2017 roku.
                    Codziennym celem naszej firmy jest zapewnienie 100% satysfakcji klienta z naszych usług.
                    Od pierwszego kontaktu z nami, aż do zakończenia pracy, skupiamy się na Tobie, naszym kliencie, i upewniamy się, że wybierając naszą firmę dokonałeś najlepszego możliwego wyboru!
                    Doświadczenie naszych pracowników czyni naszą firmę konkurencyjną w środowisku branży pokryć dachowych. Nasza praca to zawsze dobra praca!
                   </p>
                </div>
                <div className='bars'>
                    <ProgressBar
                        key={1}
                        progress={progress}
                        radius={100}
                        initialAnimation={true}
                        transition={'1s linear'}
                        className={'progress'}
                        strokeWidth={20}
                        trackStrokeWidth={10}
                        trackTransition={'3s linear'}
                        cut={180}
                        rotate={180}
                        strokeColor={'orange'}
                        trackStrokeColor={'gray'}
                        pointerRadius={1}
                    >
                    <div className='progress-content'>
                        <p>{progress}%</p>
                        <p>Zadowoonych klientów</p>
                    </div>
                    </ProgressBar>
                    <ProgressBar
                        key={2}
                        progress={progress}
                        radius={100}
                        initialAnimation={true}
                        transition={'1s linear'}
                        className={'progress'} 
                        strokeWidth={20}
                        trackStrokeWidth={10}
                        cut={180}
                        rotate={180}
                        trackStrokeColor={'gray'}
                        trackTransition={'3s linear'}
                        pointerRadius={1}
                        pointerStrokeColor={'orange'}
                    >
                    <div className='progress-content'>
                        <p>{progress}%</p>
                        <p>Pomyslnych Realizacji</p>
                    </div>
                    </ProgressBar>
                </div>
            </div>
            <div className='inner-about'>
                
            </div>
        </div>
        
    )
}

export default About;