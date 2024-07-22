import React from 'react';
// import Slider from "react-slick";
import './Projects.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import news from  "../../assets/news.jpg";
import ecommerce from "../../assets/ecommerce.jpg";
import weather from "../../assets/weather.jpg";
import medico from "../../assets/Medico.png";

const Projects = () => {

  return (
    <section id='works'>

    <h2 className='worksTitle'>My Projects</h2>
      <div className='worksImgs'>
      <figure>
      <img src={news} alt="News" className='worksImg' />
      <figcaption>News Website</figcaption>
      </figure>
      <figure>
      <img src={ecommerce} alt="Ecommerce" className='worksImg' />
      <figcaption>Ecommerce Platform</figcaption>
      </figure>
      <figure>
      <img src={weather} alt="Weather" className='worksImg' />
      <figcaption>Weather App</figcaption>
      </figure>
      <figure>
      <img src={medico} alt="MedicalHealth" className='worksImg' />
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
