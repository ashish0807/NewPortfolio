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
                <span className="introPara">Aspiring Software developer with a passion for building innovative and user-friendly applications.<br/>Proficient in a variety of programming languages,frameworks, and also web development tools.<br/>Eager to make meaningful contributions within a team of seasoned developers.</span>
               <br/>
            <Link><button className="btn">Hire me</button></Link>
            </div>
            

            <img src={bg} alt="profile" className="bg"/>


        </section>
    );
}

export default Intro;