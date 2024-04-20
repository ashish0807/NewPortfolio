import React from 'react';
import './Technology.css';
import cplus from '../../assets/c++.png';
import django from '../../assets/django.png';
import express from '../../assets/express.png';
import js from '../../assets/js.png';
import mongodb from '../../assets/mongodb.png';
import mysql from '../../assets/mysql.jpg';
import node from '../../assets/node.png';
import python from '../../assets/python.png';
import react from '../../assets/react.png';

const Technology = () => {
  return (
   <section id="tech">
   <h2 className='techTitle'>Tools and frameworks</h2>
   <span className='techPara'>These are the tools i'm working with right now.</span>
   <div className="techImgs">
    <img src={cplus} alt="" className='techImg'/>
    <img src={django} alt="" className='techImg'/>
    <img src={express} alt="" className='techImg'/>
    <img src={js} alt="" className='techImg'/>
    <img src={mongodb} alt="" className='techImg'/>
    <img src={mysql} alt="" className='techImg'/>
    <img src={node} alt="" className='techImg'/>
    <img src={python} alt="" className='techImg'/>
    <img src={react} alt="" className='techImg'/>
    
   </div>
   
   </section>
  )
}

export default Technology
