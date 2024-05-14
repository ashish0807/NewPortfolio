import React from 'react';
import './Projects.css';
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

    {/* <div className="worksImgs">
        <div className="worksImg">
          <img src={news} alt=''/>
          <div className="layer">
            <h3>News Website</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quia maiores illum commodi asperiores odio aut? Consectetur fugit optio unde.</p>
            <a href="/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
        <div className="worksImg">
          <img src={ecommerce} alt=''/>
          <div className="layer">
            <h3>Weather App</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quia maiores illum commodi asperiores odio aut? Consectetur fugit optio unde.</p>
            <a href="/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
        <div className="worksImg">
          <img src={weather} alt=''/>
          <div className="layer">
            <h3>E-commerce = Website</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quia maiores illum commodi asperiores odio aut? Consectetur fugit optio unde.</p>
            <a href="/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </div> */}
    
    <button className='worksBtn'>
    See more
    </button>
    </section>
  );
}

export default Projects;
