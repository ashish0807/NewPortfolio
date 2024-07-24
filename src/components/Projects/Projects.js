import React from 'react';
import './Projects.css';
import chat from "../../assets/letschat.jpg";
import ecommerce from "../../assets/ecommerce.jpg";
import medico from "../../assets/Medico.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {

  return (
    <section id='works'>

    <h2 className='worksTitle'>My Projects</h2>
      <div className='worksImgs'>
      <figure>
      <img src={chat} width="260px" alt="Letschat" className='worksImg'/>
      <br/>
      <a href="https://letschat-nfoy.onrender.com/login" target='_blank'  rel="noopener noreferrer">
      <FaExternalLinkAlt size={20} color='#f3165c' cursor="pointer" />
      </a>
      {" "}
      <a href="https://github.com/ashish0807/Letschat" target='_blank'  rel="noopener noreferrer">
      <FaGithub size={20} color='#f3165c' cursor="pointer" />
      </a>
      <br/>
      <figcaption>LetsChat-Realtime Chat-App</figcaption>
      </figure>
      <figure>
      <img src={ecommerce} alt="Ecommerce" className='worksImg' />
      <br/>
      <FaExternalLinkAlt size={20} color='#f3165c' cursor="pointer" />
      <br/>
      <figcaption>Ecommerce Platform</figcaption>
      </figure>
      {/* <figure>
      <img src={weather} alt="Weather" className='worksImg' />
      <figcaption>Weather App</figcaption>
      </figure> */}
      <figure>
      <img src={medico} alt="MedicalHealth" className='worksImg' />
      <br/>
      <FaExternalLinkAlt size={20} color='#f3165c' cursor="pointer" />
      {" "}
      <a href="https://github.com/ashish0807/Medico_health_app" target='_blank'  rel="noopener noreferrer">
      <FaGithub size={20} color='#f3165c' cursor="pointer" />
      </a>
      <br/>
      <figcaption>Medical Health Recommendation</figcaption>
      </figure>
      </div>
    
    {/* <button className='worksBtn'>
    See more
    </button> */}
    </section>
  );
}



export default Projects;
