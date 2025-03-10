import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{height: "100vh"}}><h1>know more about us</h1>
    <Image
    src='/About us page-pana.png'
    width={500}
    height={500}
    loading='lazy'
    ></Image>
    </div>
  )
}

export default About