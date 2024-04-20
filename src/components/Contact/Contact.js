import React, {useRef} from 'react';
import './Contact.css';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
   <section id='contactPage'>
    <div className="contact">
      <h1 className='contactTitle'>Contact Me</h1>
      <span className='contactPara'>Please fill it out to contact me.</span>

      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type="text" className='name' placeholder='Name' />
        <input type="email" className='email' placeholder='Email' />
        <textarea className="msg" name='message' rows="5" placeholder='Message'></textarea>
        <button type='submit' value='Send' className='submitBtn'>Submit</button>

        <div className='links'>
          <a href="https://www.instagram.com/carryon_tech/" target="_blank" rel="noreferrer"><img src={instagram} alt="" className='link' /></a>
          <a href="https://www.linkedin.com/in/ashishkshrma/" target="_blank" rel="noreferrer" ><img src={linkedin} alt="" className='link' /> </a>
          <img src={twitter} alt="" className='link' />
          <a href="https://github.com/ashish0807" target="_blank" rel="noreferrer" ><img src={github} alt="" className='link' /></a>
          
        </div>

      </form>
    </div>
   </section>
  )
}

export default Contact
