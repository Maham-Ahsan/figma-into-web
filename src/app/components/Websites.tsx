import React from 'react'
import Image from 'next/image'
import Work from './works'

const Websites = () => {
  return (
    <>
    <div className='web'>
      <div className='container'>
        <div className="main">
          <div>
          <h3 className='web-heading'>Featured Works</h3>
          </div>
          <div className="featured-work">
            <div className="box">
            <div className="web-image">
              <Image
                src='/Rectangle 30.png'
                alt='Website Image 1'
                width={246}
                height={184}
              />
            </div>
            <Work />

            </div>
            <div className="box">
            <div className="web-image">
              <Image
                src='/Rectangle 32.png'
                alt='Website Image 2'
                width={246}
                height={184}
              />
            </div>
            <Work />
            </div>
            <div className="box">
            <div className="web-image">
              <Image
                src='/Rectangle 34.png'
                alt='Website Image 3'
                width={246}
                height={184}
              />
            </div>
            <Work />
            </div>
          </div>

        </div>
        </div></div></>
  )
}

export default Websites;