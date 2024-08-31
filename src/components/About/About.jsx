import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/pro_img.png'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern}/>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_image}/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>Passionate  Web Developer with a knack for crafting intuitive, high-performance web applications that delight users and drive business success. With deep expertise in modern frameworks like React and Node.js</p>
                    <p>I excel at bridging the gap between design and functionality, ensuring seamless integration across all layers of the tech stack. My commitment to clean, maintainable code and innovative problem-solving makes me an asset to any development team.</p>
                </div>
                <div className='about-skills'>
                <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                <div className='about-skill'><p>JavaScript</p><hr style={{width:"40%"}}/></div>
                <div className='about-skill'><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className='about-skill'><p>Node JS</p><hr style={{width:"60%"}}/></div>
                <div className='about-skill'><p>Express JS</p><hr style={{width:"50%"}}/></div>
                <div className='about-skill'><p>SQL</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
        <h1>10+</h1>
        <p>PROJECTS COMPLETED(js)</p>
        </div>
        <hr/>
        <div className='about-achievement'>
        <h1>10+</h1>
        <p>PROJECTS COMPLETED(react js)</p>
        </div>
        <hr/>
        <div className='about-achievement'>
        <h1>5+</h1>
        <p>PROJECTS COMPLETED(node js)</p>
        </div>
      </div>
    </div>
  )
}

export default About
