import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Login = () => {
  const [info, setInfo] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Soumettre les données du formulaire au serveur
  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', info);
      if (response) {
        localStorage.setItem('token', response.data.result.token);
        localStorage.setItem('isAuth', true);
        navigate('/blogs');
      } else {
        console.log('bad request');
      }
      return response;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrors({ server: error.response.data.message });
      } else {
        setErrors({ server: 'An error occurred. Please try again later.' });
      }
    }
  };
  
  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <h1>Login</h1>
      <form action="/login" method="post">
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" onChange={handleChange} /><br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" onChange={handleChange} /><br />
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Log in</button>
        {errors.server && <p className="error">{errors.server}</p>}
      </form> 
      
    </div>
    </>
  );
  
};

export default Login;
