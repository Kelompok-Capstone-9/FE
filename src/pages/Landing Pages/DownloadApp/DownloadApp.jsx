import React from 'react'
import './DownloadApp.css'
import ImageFitness from '../../../assets/img/menfitness.svg'
import ImageBarbel from '../../../assets/img/barbel.svg'

const DownloadApp = () => {
    return (
        <div className='container-section'>
            <div className='section-top text-center text-lg-start d-flex flex-column flex-lg-row align-items-center justify-content-evenly'>
                <div>
                    <h1 style={{color: 'var(--primary-600)', fontSize: '2.5rem', fontWeight: 'bold'}}>Achieve Fitness Anywhere and <br /> Anytime with GoFit!</h1>
                </div>
                <div>
                    <img src={ImageFitness} alt="fitness" className='img-fluid'/>
                </div>
            </div>
            <div className="section-bottom text-center d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <div>
                    <img src={ImageBarbel} alt="fitness" className='img-fluid'/>
                </div>
                <div>
                    <h1 style={{color: 'var(--primary-600)', fontSize: '2.25rem', fontWeight: 'bold'}}>Set Your Goals Now!</h1>
                    <h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>Enjoy a fit life</h1>
                </div>
                <button className='btn-download'>
                    Download App
                </button>
            </div>
        </div>
    )
}

export default DownloadApp