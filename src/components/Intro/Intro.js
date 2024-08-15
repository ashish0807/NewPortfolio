import React from "react";
import './Intro.css';
import bg from '../../assets/front-img.jpeg';
import { Link } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';


const Intro =() => {

    return(
        <section id="intro" >
            <div className="introContent">
               <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Ashish</span></span>
                <br/>
                <span className="introPara" style={{fontStyle:"italic"}}>I possess a deep passion for the <span className="introName">creation</span> of visually appealing <br/> and intuitively designed websites. Also I am sincerely committed to <span className="introName">continuous learning</span> and <br/> actively engaging with <span className="introName">emerging technologies</span> across various domains.</span>
               <br/>
            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginTop: '20px' }}>
            <Link><button className="btn" onClick={()=> {
                document.getElementById('contactPage').scrollIntoView({behaviour: 'smooth'});

            }}>Hire me</button></Link>
            <span style={{ display: 'flex', gap: '10px', marginLeft: '15px'}}>
            <SocialIcon network="github" bgColor="white" fgColor="black" url="https://github.com/ashish0807" style={{ width: '40px', height: '40px' }}/>
            <SocialIcon network="linkedin" url="https://www.linkedin.com/in/ashishkshrma/" style={{ width: '40px', height: '40px' }}/>
            <SocialIcon network="leetcode" url="https://leetcode.com/u/a_ashishsharma/" style={{ width: '40px', height: '40px' }} />
            <SocialIcon network="x" bgColor="white" fgColor="black" url="https://x.com/CarryOnn4" style={{ width: '40px', height: '40px' }}/>

            </span>
            </div>
            </div>
            
            <div className="bg-main">
            <img src={bg} alt="profile" className="bg"/>

            </div>
            

        </section>
    );
}

export default Intro;