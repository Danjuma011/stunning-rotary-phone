import './index.scss'
import React from 'react';
import Loader from  "react-loaders"
import AnimatedLetters  from '../Animatedletters';
import { useEffect, useState } from 'react'
import PortfolioData from '../../data/portfolio.json';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(PortfolioData)
    
    useEffect (() => {
        const timeoutFunc = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return ()=>{
            window.clearTimeout(timeoutFunc)
        }
     },[]);


    const renderPortfolio = (Portfolio) => {
        return (
            <div className='images-container'>
                {
                    Portfolio.map((port, idx) => {
                        return(
                            <div  className='image-box' key={idx}>
                                <img src={port.cover}
                                className="portfolio-image"
                                alt="portfolio"
                                />
                                <div className='content'>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <button className='btn' onClick={() => window.open(port.url)}>VIEW</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    } 

    return(
    <>
     <div className='container portfolio-page'>
          <h1 className='page-title'>
          <AnimatedLetters
                    letterClass={letterClass}
                    strArray= {['Portfolio'.split('')]}
                    idx={15}
           />
          </h1>
          <div>{renderPortfolio(PortfolioData.portfolio)}</div>
     </div>
      <Loader type='pacman' />
    </>
    );
}

export default Portfolio;