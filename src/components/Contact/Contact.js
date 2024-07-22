import React ,{useRef} from 'react';
import './Contact.css';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const [state, handleSubmit] = useForm("xvgpzzql");
  // if (state.succeeded) {
  //     return alert("Thanks for contacting us!");
  // }

  
  const formRef = useRef(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);

    if (state.succeeded) {
      alert("Thanks for contacting us!");
      formRef.current.reset();
    }
  };


  return (
    <section id='contactPage'>

    <div className="contact">
      <h1 className='contactTitle'>Contact Me</h1>
      <span className='contactPara'>Please fill it out to contact me.</span>

      
     <form  ref={formRef} className='contactForm' onSubmit={handleFormSubmit} action='https://formspree.io/f/xvgpzzql' method='POST'>
   
      <input type="text" className='name' name='name' placeholder='Name' />

      <input type="email" className='email' name='email' placeholder='Email' />
      <ValidationError prefix="Email" field="email" errors={state.errors}/>

      <textarea className="msg" name='message' rows="5" placeholder='Message'></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type='submit' value='Send' className='submitBtn'>Submit</button>

    </form>

      <div className='links'>
          <a href="https://www.instagram.com/carryon_tech/" target="_blank" rel="noreferrer"><img src={instagram} alt="" className='link' /></a>
          <a href="https://www.linkedin.com/in/ashishkshrma/" target="_blank" rel="noreferrer" ><img src={linkedin} alt="" className='link' /> </a>
          <img src={twitter} alt="" className='link' />
          <a href="https://github.com/ashish0807" target="_blank" rel="noreferrer" ><img src={github} alt="" className='link' /></a>   
        </div>

    </div>
   </section>
  );
}

export default Contact
