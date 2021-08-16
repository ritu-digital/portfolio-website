import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import './ContactFormStyles.css';
import { db } from './firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '&  .MuiInputBase-root ': {
      color: 'white',
      borderBottom: '0.1px solid rgba(173, 168, 168, 0.308)',
    },
    '&  .MuiFormLabel-root': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottom: '1px solid red',
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection('contacts')
      .add({
        name: name,
        lastname: lastname,
        email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        alert('Message has been submitted 👍');
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setName('');
    setLastname('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className='contactform'>
      <h4>Get in Touch</h4>
      <form onSubmit={handleSubmit} className={classes.root}>
        <div className='contactform__fullname'>
          <FormControl>
            <InputLabel htmlFor='name'>Name</InputLabel>
            <Input
              id='name'
              type='text'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='lastname'>Lastname</InputLabel>
            <Input
              type='text'
              id='lastname'
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </FormControl>
        </div>
        <FormControl>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            type='email'
            id='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='subject'>Subject</InputLabel>
          <Input
            type='text'
            id='subject'
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </FormControl>
        <TextField
          id='message'
          label='Message'
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          color='primary'
        />

        <button
          type='submit'
          style={{ background: loader ? '#ccc' : '#c24253' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
