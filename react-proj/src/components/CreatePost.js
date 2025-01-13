import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar'; // Importez le composant Navbar
import './CreatePost.css'; // Importation du fichier CSS

const CreatePost = () => {
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState({});

    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/api/posts', newProduct); // Assurez-vous de spécifier l'URL correcte
            navigate('/blogs');
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <>
            <NavigationBar /> {/* Utilisez le composant Navbar ici */}
            <form onSubmit={handleSubmit} className="form-container">
                <input type="text" name="title" placeholder="Titre du post" onChange={handleChange} />
                <input type="text" name="content" placeholder="Contenu" onChange={handleChange} />
                <input type="text" name="author" placeholder="Auteur" onChange={handleChange} />
                <input type="text" name="slug" placeholder="Slug" onChange={handleChange} />
                <input type="text" name="tags" placeholder="Tags" onChange={handleChange} />
                <input type="text" name="supplier" placeholder="supplier" onChange={handleChange} />
                 
                <button type="submit">Créer Post</button>
            </form>
        </>
    ); 
};

export default CreatePost;
