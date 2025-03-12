import React from 'react';
import './RegistratiUtente.css';
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";


const RegistratiUtente = () => {
  return (
    <div className="registrazione text-align-center" style={{ color: 'black' }}> 
      <form action style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'black' }}>Registrati come Utente</h2> 
        <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyUSIyK9p6BATvVhdZc4sxw5MbzUxNEv70g&s"
                  className="d-inline w-70 h-70 rounded-circle" 
                  alt="..."
                />
      
        <div className='input-box'>
          <input
            type="text"
            placeholder='Nome'
            required
            style={{ color: 'black' }} 
            
          />
          <FaUserAlt className='icona' style={{ color: 'black' }}/>

        </div>

       

        <div className='input-box'>
          <input
            type="text"
            placeholder='Cognome'
            required
            style={{ color: 'black' }} 
          />
          <FaUserAlt className='icona' style={{ color: 'black' }} />

        </div>

        <div className='input-box'>
          <input
            type="text"
            placeholder='Email'
            required
            style={{ color: 'black' }} 
          />
          <MdOutlineEmail className='icona' style={{ color: 'black' }} /> {/* Icona nera */}
        </div>

        
         <div className='input-box'>
          <input
            type="password" 
            placeholder='Password'
            required
            style={{ color: 'black' }} 
          />
          <TbLockPassword className='icona' style={{ color: 'black' }} /> {/* Icona nera */}
        </div>

       
        <button type='submit' style={{ color: 'black', background: 'none', border: 'none', cursor: 'pointer' }}>
          Registrati
        </button>

       
        
      </form>
    </div>
  );
};

export default RegistratiUtente;