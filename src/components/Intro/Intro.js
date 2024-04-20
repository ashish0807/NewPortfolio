import React from "react";
import './Intro.css';
import bg from '../../assets/front-img.png';
import { Link } from 'react-scroll';


const Intro =() => {
    return(
        <section id="intro">
            <div className="introContent">
               <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Ashish</span></span>
                <br/>
                <span className="introPara" style={{fontStyle:"italic"}}>I possess a deep passion for the <span className="introName">creation</span> of visually appealing <br/> and intuitively designed websites. Also I am sincerely committed to <span className="introName">continuous learning</span> and <br/> actively engaging with <span className="introName">emerging technologies</span> across various domains.</span>
               <br/>
            <Link><button className="btn">Hire me</button></Link>
            </div>
            

            <img src={bg} alt="profile" className="bg"/>


        </section>
    );
}

export default Intro;