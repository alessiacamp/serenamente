import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './RegistratiUtente.css';
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const RegistratiUtente = () => {
  return (
    <div className="login text-align-center" style={{ color: 'black' }}> {/* Testo nero per tutto il contenuto */}
      <form action style={{ textAlign: 'center' }}>
        <FaUser style={{ color: 'black', marginBottom: '10px' }} /> {/* Icona nera */}
        <h2 style={{ color: 'black' }}>Registrati come Utente</h2> {/* Titolo nero */}
        
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
          Registrati
        </button>

       
        
      </form>
    </div>
  );
};

export default RegistratiUtente;