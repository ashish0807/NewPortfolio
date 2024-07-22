import React from "react";
import './certifi.css';
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";



const certifi = () => {
    return(
        <section id='certifications'>

        <h2 className='certiTitle'>Certifications</h2>
        <div className='certiImgs'>

        <figure>
        <img src={c1} alt="News" className='certiImg' />
        <figcaption>Data Structures and Algorithms</figcaption>
        </figure>
      
        <figure>
        <img src={c2} alt="Ecommerce" className='certiImg' />
        <figcaption>Cloud Computing on AWS</figcaption>
        </figure>
      
        <figure>
        <img src={c3} alt="Weather" className='certiImg' />
        <figcaption>Server Side Js with Node.js</figcaption>
        </figure>
      
        <figure>
        <img src={c4} alt="MedicalHealth" className='certiImg' />
        <figcaption>Django Web Framework</figcaption>
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


      </section>
    );
}

export default certifi;