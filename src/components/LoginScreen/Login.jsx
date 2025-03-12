import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const Login = () => {
  return (
    <div className="login text-align-center" >; 
      <form action style={{ textAlign: 'center' }}>
        <FaUser style={{ marginBottom: '10px' }} /> 
        <h2>Login</h2>
        
        <div className='input-box'>
          <input
            type="text"
            placeholder='Email'
            required
             
          />
          <MdOutlineEmail className='icona'  /> 
        </div>

       
        <div className='input-box'>
          <input
            type="password" 
            placeholder='Password'
            required
          />
          <TbLockPassword className='icona'  /> 
        </div>

        <button type='submit' >
          Accedi
        </button>

        <p className='mt-2'>  
          Non hai un account? <br /><a href="#" style={{ color: 'black', textDecoration: "none" }}>Registrati come Utente </a>

        </p>
        <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Registrati come Volontario </a>

        
      </form>
    </div>
  );
};

export default Login;