import React from 'react';
import './Skills.css';
import fullstack from '../../assets/fullstack.jpg';
import Mern from '../../assets/Mern.png';
import sde from '../../assets/sde.png';


const Skills = () => {
  return (
      <section id='skills'>
        <span className='skillsTitle'>What I do</span>
        <br/>
        <span className='skillsPara'>Aspiring Software developer with a passion for building innovative and user-friendly applications.<br/>Proficient in a variety of programming languages,frameworks, and also web development tools.<br/>Eager to make meaningful contributions within a team of seasoned developers.</span>
        <div className='skillsBars'>
         <div className='skillsBar'>
           <img src={Mern} alt="" className='skillsBarImg' />
           <div className='skillsBarText'>
            <h2>MERN Stack Developer</h2>
            <p>2022-present</p>
           </div>
        </div>

        <div className='skillsBar'>
           <img src={sde} alt="" className='skillsBarImg' />
           <div className='skillsBarText'>
            <h2>Software Developer</h2>
            <p>2021-present</p>
           </div>
        </div>

        <div className='skillsBar'>
           <img src={fullstack} alt="" className='skillsBarImg' />
           <div className='skillsBarText'>
            <h2>Full Stack Developer</h2>
            <p>2022-present</p>
           </div>
        </div>

        </div>
      </section>
  );
}

export default Skills;
