import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const RegistratiUtente = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8080/utente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Errore durante la registrazione');
      }



      setRegistrationSuccess(true);

      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      console.error('Errore:', err);
      setError(err.message || 'Si è verificato un errore durante la registrazione');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white">
      <form
        className="p-4 rounded"
        style={{
          backgroundColor: "#DEB887",
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
          fontFamily: "Tinos",
          color: '#603311'
        }}
        onSubmit={handleSubmit}
      >
        <h2 style={{
          color: '#603311',
          fontWeight: "bold",
          marginBottom: '1.5rem'
        }}>
          Registrati come Utente
        </h2>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}



        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyUSIyK9p6BATvVhdZc4sxw5MbzUxNEv70g&s"
          className="d-inline-block rounded-circle mb-4"
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover'
          }}
          alt="Profilo"
        />

        <div className='position-relative mb-3'>
          <input
            type="text"
            name="nome"
            placeholder='Nome'
            required
            className="w-100 ps-5 py-2"
            style={{
              color: '#603311',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: '1px solid #603311',
              outline: 'none',
              fontFamily: 'Tinos'
            }}
            value={formData.nome}
            onChange={handleChange}
            disabled={registrationSuccess}
          />
          <FaUserAlt className='position-absolute start-0 top-50 translate-middle-y ms-3' style={{ color: '#603311' }} />
        </div>

        <div className='position-relative mb-3'>
          <input
            type="text"
            name="cognome"
            placeholder='Cognome'
            required
            className="w-100 ps-5 py-2"
            style={{
              color: '#603311',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: '1px solid #603311',
              outline: 'none',
              fontFamily: 'Tinos'
            }}
            value={formData.cognome}
            onChange={handleChange}
            disabled={registrationSuccess}
          />
          <FaUserAlt className='position-absolute start-0 top-50 translate-middle-y ms-3' style={{ color: '#603311' }} />
        </div>

        <div className='position-relative mb-3'>
          <input
            type="email"
            name="email"
            placeholder='Email'
            required
            className="w-100 ps-5 py-2"
            style={{
              color: '#603311',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: '1px solid #603311',
              outline: 'none',
              fontFamily: 'Tinos'
            }}
            value={formData.email}
            onChange={handleChange}
            disabled={registrationSuccess}
          />
          <MdOutlineEmail className='position-absolute start-0 top-50 translate-middle-y ms-3' style={{ color: '#603311' }} />
        </div>

        <div className='position-relative mb-4'>
          <input
            type="password"
            name="password"
            placeholder='Password'
            required
            className="w-100 ps-5 py-2"
            style={{
              color: '#603311',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: '1px solid #603311',
              outline: 'none',
              fontFamily: 'Tinos'
            }}
            value={formData.password}
            onChange={handleChange}
            disabled={registrationSuccess}
          />
          <TbLockPassword className='position-absolute start-0 top-50 translate-middle-y ms-3' style={{ color: '#603311' }} />
        </div>

        <button
          type='submit'
          className="w-100 py-2 text-decoration-none"
          style={{
            color: '#603311',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: registrationSuccess ? 'default' : 'pointer',
            fontWeight: 'bold',
            fontFamily: 'Tinos',
            fontSize: '1rem'
          }}
          disabled={isSubmitting || registrationSuccess}
        >
          {registrationSuccess ? 'La registrazione è avvenuta con successo!' :
            (isSubmitting ? 'Registrazione in corso...' : 'Registrati')}
        </button>
      </form>
    </div>
  );
};

export default RegistratiUtente;