import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importez Link
import Navbar from './Navbar'; // Importez le composant Navbar

const CreateClient = () => {
  const [info, setInfo] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (info.password !== info.repeatpassword) {
        setErrors({ passwordMatch: 'Passwords do not match.' });
        return;
      }
      const response = await axios.post('http://localhost:3000/api/clients', info);
      console.log("response", response.data);
      if (response) {
        navigate('/shoppingcart'); // Correction: Ajout du '/' avant 'blogs'
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.msg) {
        setErrors({ server: error.response.data.msg });
      } else {
        setErrors({ server: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <>
      <Navbar /> {/* Ajoutez le composant Navbar ici */}
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <label>Client name</label>
          <input type="text" placeholder="Enter client name" name="name" id="name" onChange={handleChange} required /> {/* Correction: Changement de 'username' en 'name' */}
          <label>Email</label>
          <input type="text" placeholder="Enter your email" name="email" id="email" onChange={handleChange} required />
           
          <label>phone</label>
          <input type="text" placeholder="Enter your phone number" name="phone" id="phone" onChange={handleChange} required />
          <label>password</label>
          <input type="password" placeholder="Enter your password" name="password" id="password" onChange={handleChange} required />
          <label>repeat password</label>
          <input type="password" placeholder="Repeat your password" name="repeatpassword" id="repeatpassword" onChange={handleChange} required />
           
          {errors.passwordMatch && <p className="error">{errors.passwordMatch}</p>}
          <button className="btn-primary" type="submit">Create client</button>
          {errors.server && <p className="error">{errors.server}</p>}
        </form>
      </div>
    </>
  );
};
export default CreateClient;
