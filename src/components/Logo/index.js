import './index.scss'
import Logo5 from '../../assets/Logo/logo-5.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from "gsap-trial"


const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const outlineLogoRef2 = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
     gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1
      })
    .from(outlineLogoRef.current,{
      drawSVG: 0,
      duration: 8
    })
    .from(outlineLogoRef2.current,{
      drawSVG: 0,
      duration: 4, 
      delay: "-8"
    })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 3,
        duration: 4,
      }
    )

  }, [])

  return (
    <div className='logo-container' ref={bgRef}>
      <img ref={solidLogoRef} className='solid-logo' src={Logo5} alt="S" />

      <svg
        width="114"
        height="186"
        viewBox="0 0 114 186"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">

        <g
          className="svg-container-1"

        >
           
    {/* <path ref={outlineLogoRef} d="M35.7273 155H2.27273L17.7273 61.9091H50.5455C59.9091 61.9091 67.6818 63.8182 73.8636 67.6364C80.0758 71.4545 84.4545 76.9242 87 84.0455C89.5455 91.1364 90 99.6061 88.3636 109.455C86.7879 118.97 83.6515 127.136 78.9545 133.955C74.2576 140.742 68.2424 145.955 60.9091 149.591C53.5758 153.197 45.1818 155 35.7273 155ZM24.7727 138.136H36.8636C42.7121 138.136 47.8333 137.045 52.2273 134.864C56.6515 132.682 60.2727 129.318 63.0909 124.773C65.9394 120.227 67.9545 114.409 69.1364 107.318C70.2576 100.591 70.1818 95.1364 68.9091 90.9545C67.6667 86.7424 65.2576 83.6667 61.6818 81.7273C58.1061 79.7576 53.4091 78.7727 47.5909 78.7727H34.6364L24.7727 138.136Z" fill="#none"/>
    <path ref={outlineLogoRef2} d="M57.7727 103.909L61.6364 80.6818H64.4545L91.3182 54.1818H113.545L77.7273 89.2727H73.0909L57.7727 103.909ZM36.9091 124L52.3636 30.9091H71.7273L56.2727 124H36.9091ZM80.5455 124L65.0909 93.5909L80.2273 79.9091L103.227 124H80.5455Z" fill="#none"/> */}
        </g> */


      </svg>
      <div />
    </div>
  )
}




 

export default Logo

  // transform="translate(0 457) scale(.1 -.1)"
        // fill='none' 


