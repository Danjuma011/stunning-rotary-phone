import './index.scss'
import AnimatedLetters from '../Animatedletters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3,  faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faG } from '@fortawesome/free-solid-svg-icons'
import "animate.css"

const About = () => {
  
    const [letterClass, setLetterClass] = useState('text-animate')
   
    // useEffect (() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 3000)
    //  },[])


       
     useEffect (() => {
        const timeoutFunc = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return ()=>{
            window.clearTimeout(timeoutFunc)
        }
     },[])
      
    return (

        <div className='container about-page'> 
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                     strArray= {['A','b','o','u','t',' ','M','e']}
                     idx={15}/>
                    
                </h1>
                <p>
                    I'm a very ambitious front-end developer looking for a role index
                    an established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quite confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time
                </p>
                <p>
                    If i need to define myself in one sentence that would be a family
                    person, a sport fanatic, and tech-obsessed!!!
                </p>
{/* 
            <p>HTML<br/> CSS<br/> JAVASCRIPT<br/> BOOTSTRAP <br/> REACT</p>
            <p>NODE.JS</p>  */}
            </div>

                
         
            
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#dd00b1" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#FFFF00" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faBootstrap} color="#00FF00" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
                    </div>
                </div>


            </div>

        
        </div>

         
    )
}

export default About