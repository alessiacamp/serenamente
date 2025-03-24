import React from 'react';
import './ModificaProfilo.css';
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";


const ModificaProfilo = () => {
  return (
    <div className="registrazione text-align-center" style={{ color: 'black', backgroundColor:"#DEB887" }}> 
      <form action style={{ textAlign: 'center', fontFamily:"Tinos",  }}>
        <h2 style={{ color: '#603311', fontWeight:"bold" }}>Modifica Profilo</h2> 
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
            style={{ color: ' #603311' }} 
            
          />
          <FaUserAlt className='icona' style={{ color: ' #603311' }}/>

        </div>

       

        <div className='input-box'>
          <input
            type="text"
            placeholder='Cognome'
            required
            style={{ color: ' #603311' }} 
          />
          <FaUserAlt className='icona' style={{ color: ' #603311' }} />

        </div>

        <div className='input-box'>
          <input
            type="text"
            placeholder='Email'
            required
            style={{ color: ' #603311' }} 
          />
          <MdOutlineEmail className='icona' style={{ color: ' #603311' }} /> 
        </div>

         <div className='input-box'>
          <input
            type="password" 
            placeholder='Password'
            required
            style={{ color: ' #603311' }} 
          />
          <TbLockPassword className='icona' style={{ color: ' #603311' }} />
        </div>

        <button type='submit' style={{ color: ' #603311', background: 'none', border: 'none', cursor: 'pointer' }}>
          Registrati
        </button>

       
        
      </form>
    </div>
  );
};

export default ModificaProfilo;