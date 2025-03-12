import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Salva il token nel localStorage
      localStorage.setItem('accessToken', data.accessToken);

      // Reindirizza l'utente alla pagina protetta
      navigate('/home'); // Modifica con la tua route protetta

    } catch (err) {
      setError(err.message || 'Si è verificato un errore durante il login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login text-align-center d-flex align-items-center justify-content-center" style={{ color: "#603311", fontFamily: "Tinos", backgroundColor: "#DEB887" }}>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <FaUser style={{ marginBottom: '10px' }} />
        <h2 style={{ fontWeight: "bold" }}>Login</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className='input-box'>
          <input
            style={{ color: "#603311" }}
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <MdOutlineEmail className='icona' style={{ color: "#603311" }} />
        </div>

        <div className='input-box' style={{ color: "#603311" }}>
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TbLockPassword className='icona' style={{ color: "#603311" }} />
        </div>

        <button
          type='submit'
          style={{ color: "#603311", textDecoration: "none" }}
          disabled={loading}
        >
          {loading ? 'Caricamento...' : 'Accedi'}
        </button>

        <p className='mt-2' style={{ color: "#603311" }}>
          Non hai un account? <br />
          <a href="#" style={{ color: '#603311', textDecoration: "none" }}>
            Registrati come Utente
          </a>
        </p>
        <a href="#" style={{ color: '#603311', textDecoration: 'none' }}>
          Registrati come Volontario
        </a>
      </form>
    </div>
  );
};

export default Login;