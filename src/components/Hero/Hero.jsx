import React from 'react'
import './Hero.css'
import img1 from "../../assets/pro_img.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={img1} alt=''/>
    <h1><span>I'm Suraj Yadav,</span> Fronted developer </h1>
    <p>"Full Stack Developer with expertise in building dynamic and responsive web applications, delivering seamless user experiences and robust, scalable solutions."</p>
    <div className='hero-action'>
      <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      <div className='hero-resume'>My resume</div>
    </div>
    </div>
  )
}

export default Hero
