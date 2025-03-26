import React, { useState, useEffect } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ModificaProfilo = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Utente non autenticato');
        }

        const response = await fetch('http://localhost:8080/auth/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Errore nel caricamento del profilo');
        }

        const data = await response.json();
        setFormData({
          nome: data.nome || '',
          cognome: data.cognome || '',
          email: data.email || '',
          password: '',
        });
        setInitialLoad(false);
      } catch (err) {
        setError(err.message);
        setInitialLoad(false);
      }
    };

    loadProfileData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Utente non autenticato');
      }

      const response = await fetch('http://localhost:8080/modifica', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          nome: formData.nome,
          cognome: formData.cognome,
          email: formData.email,
          password: formData.password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Errore durante la modifica del profilo');
      }

      const data = await response.json();
      localStorage.setItem('token', data.accessToken);

      setSuccess('Profilo modificato con successo!');

      setTimeout(() => {
        navigate('/profilo');
      }, 2000);

    } catch (err) {
      setError(err.message || 'Si è verificato un errore');
    }
  };

  if (initialLoad) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white">
        <div>Caricamento...</div>
      </div>
    );
  }

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
          Modifica Profilo
        </h2>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {success && (
          <div className="alert alert-success" role="alert">
            {success}
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
              fontFamily: 'Tinos',

            }}
          />
          <MdOutlineEmail className='position-absolute start-0 top-50 translate-middle-y ms-3' style={{ color: '#603311' }} />
        </div>

        <div className='position-relative mb-4'>
          <input
            type="password"
            name="password"
            placeholder='Password (lasciare vuoto per non modificare)'
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
            cursor: 'pointer',
            fontWeight: 'bold',
            fontFamily: 'Tinos',
            fontSize: '1rem'
          }}
        >
          Salva Modifiche
        </button>
      </form>
    </div>
  );
};

export default ModificaProfilo;