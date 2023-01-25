import React from 'react';
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsWhatsapp} from 'react-icons/bs';
import {AiOutlineGithub} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rhzkrrp', 'template_iv396f7', form.current, 'XAUIswaE1b6vbT5pN')
        
        e.target.reset();
      };
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>

        <div className="container contact__container">
            <div className="contact__items">
                <article className="contact__info">
                    <HiOutlineMail />
                    <h4>Email</h4>
                    <a href="mailto:mf.dev17@gmail.com">Send a Message</a>
                </article>
                <article className="contact__info">
                    <BsWhatsapp />
                    <h4>Whatsapp</h4>
                    <a href="https://api.whatsapp.com/send?phone=31687177029" target='bk'>Send a Message</a>
                </article>
                <article className="contact__info">
                    <AiOutlineGithub />
                    <h4>Github</h4>
                    <a href="https://github.com/Skreedd" target='bk'>View Profile</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Fullname' required/>
                <input type="email" name='email' placeholder='Your Email' required/>
                <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                <button type="submit" className='btn-primary'> Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact;