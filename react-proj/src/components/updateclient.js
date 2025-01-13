import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';

const UpdateClient = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        repeatpassword: ''
    });
    const [errors, setErrors] = useState('');

    useEffect(() => {
        const fetchsClient = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/clients/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error(error);
                setErrors('Error fetching client data.');
            }
        };
        fetchsClient();
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
            if (formData.password !== formData.repeatpassword) {
                setErrors('Passwords do not match.');
                return;
            }
            const response = await axios.put(`http://localhost:3000/api/clients/${id}`, formData);
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
                    <label>name</label>
                    <input type="text" placeholder="Enter supplier name" name="name" value={formData.name} onChange={handleChange} required />
                    <label>email</label>
                    <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>phone</label>
                    <input type="text" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} required />
                    <label>password</label>
                    <input type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange} required />
                    <label>repeat password</label>
                    <input type="password" placeholder="Repeat your password" name="repeatpassword" value={formData.repeatpassword} onChange={handleChange} required />
                    {errors && <p className="error">{errors}</p>}
                    <button className="btn-primary" type="submit">Update client</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateClient;
