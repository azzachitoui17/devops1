import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from './Navbar';

const CreateSupplier = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    repeatPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.repeatPassword) {
        setErrors({ passwordMatch: 'Passwords do not match.' });
        return;
      }
      const response = await axios.post('http://localhost:3000/api/suppliers', formData);
      console.log("response", response.data);
      if (response) {
        // Naviguer vers la page des fournisseurs après la création réussie du fournisseur
        navigate('/supplier');
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
    <div>
      <NavigationBar />
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <label>Supplier name</label>
          <input type="text" placeholder="Enter supplier name" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Contact</label>
          <input type="text" placeholder="Enter your phone number" name="contact" value={formData.contact} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Repeat password</label>
          <input type="password" placeholder="Repeat your password" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} required />
          {errors.passwordMatch && <p className="error">{errors.passwordMatch}</p>}
          <button className="btn-primary" type="submit">Create supplier</button>
          {errors.server && <p className="error">{errors.server}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateSupplier;
