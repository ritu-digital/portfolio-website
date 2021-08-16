import React from 'react';
import './ContactStyles.css';
import { MdLocationOn } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { MdPhoneInTalk } from 'react-icons/md';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Let's Talk</h1>
      <div className='contactForm'>
        <div className='contactForm__left'>
          <ContactForm />
        </div>
        <div className='contactForm__right'>
          <div className='contactForm__rightAddress'>
            <h5>5, Rifle Range Road, kolkata</h5>
            <div className='contactForm-flex'>
              <div className='contactForm-icon'>
                <MdLocationOn
                  style={{ color: '#c24253', fontSize: '1.8rem' }}
                />
              </div>
              <p>Official Address</p>
            </div>
          </div>
          <div className='contactForm__rightMail'>
            <h5>ritu.digital20@gmail.com</h5>
            <div className='contactForm-flex'>
              <div className='contactForm-icon'>
                <MdEmail style={{ color: '#c24253', fontSize: '1.8rem' }} />
              </div>
              <p>Official Mail</p>
            </div>
          </div>
          <div className='contactForm__rightPhone'>
            <h5>+91 9051665298</h5>
            <div className='contactForm-flex'>
              <div className='contactForm-icon'>
                <MdPhoneInTalk
                  style={{ color: '#c24253', fontSize: '1.8rem' }}
                />
              </div>
              <p>Official Phone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
