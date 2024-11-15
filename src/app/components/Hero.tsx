import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    <div className="hero">
       <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I am John, Creative Technologist</h1>
            <p className="hero-paragraph">
              Amet minim mollit non deserunt ullamco est sit aliqua doloAmet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </p>
            <button>Download Resume</button>
            </div>
          </div>
          <div className="hero-image">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={280}
            height={280}
          />
        </div>
        </div>
      </div>
      </div>
      </>
  )
}
