import React from 'react'
import './projects.scss'
import Gallery from 'react-grid-gallery';


const Projects = () => {

    const HOME__IMAGES =
        [
            {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
            },
            {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
            },
            
            {
                    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                    thumbnailWidth: 320,
                    thumbnailHeight: 212
            },
            {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 120,
            },
            {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
            },
            
            {
                    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                    thumbnailWidth: 320,
                    thumbnailHeight: 150
            },
            {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
            },
            {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                    thumbnailWidth: 320,
                    thumbnailHeight: 190,
            },
            
            {
                    src: "https://images.unsplash.com/photo-1555002474-6244d85b4bfb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
                    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                    thumbnailWidth: 320,
                    thumbnailHeight: 212
            }
        ]

    return (
        <div className='projects'>
            <h1>Zrealizowane projekty</h1>
            <div className='projects-content'>
                <div className='projects-text'>
                    <p>
                        Zrealizowaliśmy już bardzo wiele projektów dla klientów indywidualnych jak również dla firm.
                        Projekty realiujemy podchodząc do każdego z nich indywidualnie, będąc w ciągłym kontakcie z klientem i informując go o zmianach jak i postępach prac. 
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
            <div className='projects-link'>Galeria</div> 
        </div>
    )
}

export default Projects;
