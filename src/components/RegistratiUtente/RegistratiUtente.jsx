import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistratiUtente.css';
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";

const RegistratiUtente = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    setError('');

    // Validazione lato client
    if (!formData.nome || !formData.cognome || !formData.email || !formData.password) {
      setError('Tutti i campi sono obbligatori');
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError('La password deve contenere almeno 8 caratteri');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/utente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          cognome: formData.cognome,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Errore durante la registrazione');
      }

      // Registrazione riuscita - puoi gestire la risposta qui
      console.log('Registrazione avvenuta con successo:', data);

      // Reindirizza l'utente alla pagina di login o dashboard
      navigate('/login', { state: { registrationSuccess: true } });

    } catch (err) {
      setError(err.message || 'Si è verificato un errore durante la registrazione');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registrazione text-align-center" style={{ color: 'black' }}>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'black' }}>Registrati come Utente</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:AND9GcRdyUSIyK9p6BATvVhdZc4sxw5MbzUxNEv70g&s"
          className="d-inline w-70 h-70 rounded-circle"
          alt="Profile"
        />

        {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}

        <div className='input-box'>
          <input
            type="text"
            name="nome"
            placeholder='Nome'
            value={formData.nome}
            onChange={handleChange}
            required
            style={{ color: 'black' }}
          />
          <FaUserAlt className='icona' style={{ color: 'black' }} />
        </div>

        <div className='input-box'>
          <input
            type="text"
            name="cognome"
            placeholder='Cognome'
            value={formData.cognome}
            onChange={handleChange}
            required
            style={{ color: 'black' }}
          />
          <FaUserAlt className='icona' style={{ color: 'black' }} />
        </div>

        <div className='input-box'>
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
            style={{ color: 'black' }}
          />
          <MdOutlineEmail className='icona' style={{ color: 'black' }} />
        </div>

        <div className='input-box'>
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            minLength="8"
            style={{ color: 'black' }}
          />
          <TbLockPassword className='icona' style={{ color: 'black' }} />
        </div>

        <button
          type='submit'
          style={{
            color: 'black',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            opacity: loading ? 0.7 : 1
          }}
          disabled={loading}
        >
          {loading ? 'Registrazione in corso...' : 'Registrati'}
        </button>
      </form>
    </div>
  );
};

export default RegistratiUtente;