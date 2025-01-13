import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';

const UpdatePost = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        slug: '',
        tags: '',
        author: ''
    });
    const [errors, setErrors] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error(error);
                setErrors('Error fetching post data.');
            }
        };
        fetchPost();
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
            const response = await axios.put(`http://localhost:3000/api/posts/${id}`, formData);
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
                    <label>Title</label>
                    <input type="text" placeholder="Enter post title" name="title" value={formData.title} onChange={handleChange} required />
                    <label>Content</label>
                    <input type="text" placeholder="Enter post content" name="content" value={formData.content} onChange={handleChange} required />
                    <label>Slug</label>
                    <input type="text" placeholder="Enter post slug" name="slug" value={formData.slug} onChange={handleChange} required />
                    <label>Tags</label>
                    <input type="text" placeholder="Enter post tags" name="tags" value={formData.tags} onChange={handleChange} />
                    <label>Author</label>
                    <input type="text" placeholder="Enter post author" name="author" value={formData.author} onChange={handleChange} required />
                    {errors && <p className="error">{errors}</p>}
                    <button className="btn-primary" type="submit">Update post</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePost;
