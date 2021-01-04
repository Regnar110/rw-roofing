import React from 'react'
import './projects.scss'



const Projects = () => {

    return (
        <div className='projects'>
            <h1>Zrealizowane projekty</h1>
            <div className='projects-content'>
                <div className='projects-text'>
                    <p>
                        Zrealizowaliśmy już bardzo wiele projektów dla klientów indywidualnych jak również dla firm.
                        Projekty realizujemy podchodząc do każdego z nich indywidualnie, będąc w ciągłym kontakcie z klientem i informując go o zmianach jak i postępach prac. 
                        Każdy projekt realizowany jest z myślą o zadowoleniu klienta/klientów a także o dotrzymaniu terminów i przestrzeganiu najlepszych praktyk dekarskich.
                    </p>
                </div>
                <div className='gallery-container'>
                    <Gallery enableImageSelection={false} images={HOME__IMAGES} backdropClosesModal={true} showLightboxThumbnails={true}/>   
                </div>   
            </div>
            <p className='projects-footer'>
                Zapraszamy do zapoznania się z całą galerią, w której zestawione są nasze wszystkie realizacje projektów.
            </p>
            <Link to='/projects'><div className='projects-link'>Galeria</div></Link>
        </div>
    )
}

export default Projects;
