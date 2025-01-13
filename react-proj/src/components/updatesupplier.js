import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';

const UpdateSupplier = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        repeatPassword: ''
    });
    const [errors, setErrors] = useState('');

    useEffect(() => {
        const fetchSupplier = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/suppliers/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error(error);
                setErrors('Error fetching supplier data.');
            }
        };
        fetchSupplier();
    }, [id]);

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
                setErrors('Passwords do not match.');
                return;
            }
            const response = await axios.put(`http://localhost:3000/api/suppliers/${id}`, formData);
            console.log("response", response.data);
            navigate('/blogs');
        } catch (error) {
            console.error(error);
            setErrors('An error occurred. Please try again later.');
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
                    {errors && <p className="error">{errors}</p>}
                    <button className="btn-primary" type="submit">Update supplier</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateSupplier;
