import './index.scss'
import AnimatedLetters from '../Animatedletters'
import { useEffect, useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { MapContainer, TileLayer, useMap } from 'react-leaflet'




const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();


    useEffect(() => {
        const timeoutFunc = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            window.clearTimeout(timeoutFunc)
        }
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm(
            'service_wg75n1e',
            'template_oxd3ryn',
            form.current,
            'ap7TRNS7g_3fTjYFe'
        )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('failed to send the message, please try again')
                }
            )
    };


    return (

        <>
            <div className="container contact-page">
                <div className="text-zone">



                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e',]}
                            idx={15}
                        />
                    </h1>



                    <p>
                        I am interested in freelancing opportunities, especially ambitious or
                        large projects. However, if you have other request or question's,
                        don't hesitate to contact me using the form below.
                    </p>

                    <div className='contact-form'>

                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='_name' placeholder='Name' required />
                                </li>

                                <li className='half'>
                                    <input
                                        type='email'
                                        name='email_id'
                                        placeholder='Email'
                                        required
                                    />
                                </li>

                                <li>
                                    <input
                                        type='text'
                                        name='subject'
                                        placeholder='subject'
                                        required
                                    />
                                </li>

                                <li >
                                    <textarea
                                        placeholder='Message'
                                        name='message'
                                        required
                                    ></textarea>
                                </li>

                                <li>
                                    <input type="submit" className='btn' value="SEND" />
                                </li>

                            </ul>


                        </form>

                    </div>

                </div>

                <div className='info-map'>
                    Danjuma Kuti,
                    <br />
                    Nigeria,
                    <br />
                    No.34 Ilupeju Byepass, Lagos. <br />
                    <span>Ayanfolarin@gmail.com</span>

                </div>

                <div className='map-wrap'>
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={[44.96366, 19.61045]} >
                                    <Popup>Danjuma lives here, come over to solve problems </Popup>    
                                </Marker> */}
                    </MapContainer>



                </div>




            </div>


        </>






    )
}


export default Contact