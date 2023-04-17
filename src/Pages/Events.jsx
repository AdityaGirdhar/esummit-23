import { useEffect } from "react"
import React from 'react'
import zeroToOne from '../Assets/zero-to-one.png'
import pitchCafe from '../Assets/pitch-cafe.png'
import startupFair from '../Assets/startup-fair.png'

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <h2 data-aos="fade-up">events that you'll never forget.</h2>
        <p className='center' data-aos="fade-up">We have planned incredibly fun events where you can get your hands dirty, and play the serial entrepreneur you've always wanted to be.</p>
      <div className="container">

        <a href="https://forms.gle/TASM4aCHxcdSSE5RA">
          <img src={zeroToOne} alt="Zero to One" className="event-banner-min" />
        </a>
        
        <a href="https://forms.gle/buRwqAWz7uPKswzA7">
          <img src={pitchCafe} alt="Pitch Cafe" className="event-banner-min" />
        </a>  

        <a href="https://forms.gle/spYit3unTSUq2o618">
          <img src={startupFair} alt="Startup Fair" className="event-banner-min" />
        </a>
        
      </div>
    </>
  )
}
