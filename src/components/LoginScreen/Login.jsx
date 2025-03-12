import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const Login = () => {
  return (
    <div className="login text-align-center" style={{ }}>; {/* Testo nero per tutto il contenuto */}
      <form action style={{ textAlign: 'center' }}>
        <FaUser style={{ color: 'black', marginBottom: '10px' }} /> {/* Icona nera */}
        <h2 style={{ color: 'black' }}>Login</h2> {/* Titolo nero */}
        
        {/* Campo Email */}
        <div className='input-box'>
          <input
            type="text"
            placeholder='Email'
            required
            style={{ color: 'black' }} 
          />
          <MdOutlineEmail className='icona' style={{ color: 'black' }} /> {/* Icona nera */}
        </div>

        {/* Campo Password */}
        <div className='input-box'>
          <input
            type="password" 
            placeholder='Password'
            required
            style={{ color: 'black' }} 
          />
          <TbLockPassword className='icona' style={{ color: 'black' }} /> {/* Icona nera */}
        </div>

        {/* Bottone di Accesso */}
        <button type='submit' style={{ color: 'black', background: 'none', border: 'none', cursor: 'pointer' }}>
          Accedi
        </button>

        {/* Link per la Registrazione */}
        <p className='mt-2'>  
          Non hai un account? <br /><a href="#" style={{ color: 'black', textDecoration: 'underline' }}>Registrati come Utente </a>

        </p>
        <a href="#" style={{ color: 'black', textDecoration: 'underline' }}>Registrati come Volontario </a>

        
      </form>
    </div>
  );
};

export default Login;