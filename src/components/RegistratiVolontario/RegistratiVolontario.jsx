import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistratiVolontario.css';
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const RegistratiVolontario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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
    setSuccess(false);

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
      const response = await fetch('http://localhost:8080/volontario', {
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

      // Registrazione riuscita
      setSuccess(true);
      console.log('Registrazione volontario avvenuta con successo:', data);

      // Reindirizza dopo 2 secondi per mostrare il messaggio di successo
      setTimeout(() => {
        navigate('/login', { state: { registrationSuccess: true } });
      }, 2000);

    } catch (err) {
      setError(err.message || 'Si è verificato un errore durante la registrazione');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registrazione text-align-center" style={{ backgroundColor: "white" }}>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center', backgroundColor: "#DEB887", fontFamily: "Tinos" }}>
        <h2 style={{ color: '#603311', fontWeight: "bold" }}>Registrati come Volontario</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyUSIyK9p6BATvVhdZc4sxw5MbzUxNEv70g&s"
          className="d-inline w-70 h-70 rounded-circle"
          alt="Profilo volontario"
        />

        {error && <div className="alert alert-danger" style={{ color: 'red' }}>{error}</div>}
        {success && <div className="alert alert-success" style={{ color: 'green' }}>Registrazione completata con successo!</div>}

        <div className='input-box'>
          <input
            type="text"
            name="nome"
            placeholder='Nome'
            value={formData.nome}
            onChange={handleChange}
            required
            style={{ color: '#603311' }}
          />
          <FaUserAlt className='icona' style={{ color: '#603311' }} />
        </div>

        <div className='input-box'>
          <input
            type="text"
            name="cognome"
            placeholder='Cognome'
            value={formData.cognome}
            onChange={handleChange}
            required
            style={{ color: '#603311' }}
          />
          <FaUserAlt className='icona' style={{ color: '#603311' }} />
        </div>

        <div className='input-box'>
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
            style={{ color: '#603311' }}
          />
          <MdOutlineEmail className='icona' style={{ color: '#603311' }} />
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
            style={{ color: '#603311' }}
          />
          <TbLockPassword className='icona' style={{ color: '#603311' }} />
        </div>

        <button
          type='submit'
          style={{
            color: '#603311',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            opacity: loading ? 0.7 : 1
          }}
          disabled={loading || success}
        >
          {loading ? 'Registrazione in corso...' : success ? 'Registrato!' : 'Registrati'}
        </button>
      </form>
    </div>
  );
};

export default RegistratiVolontario;