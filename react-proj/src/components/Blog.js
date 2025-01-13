import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Blog.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [clients, setClients] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [blogDeleteMsg, setBlogDeleteMsg] = useState(false);
    const [clientDeleteMsg, setClientDeleteMsg] = useState(false);
    const [supplierDeleteMsg, setSupplierDeleteMsg] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogResponse = await axios.get('http://localhost:3000/api/posts');
                setBlogs(blogResponse.data);
                const clientResponse = await axios.get('http://localhost:3000/api/clients');
                setClients(clientResponse.data);
                const supplierResponse = await axios.get('http://localhost:3000/api/suppliers');
                setSuppliers(supplierResponse.data);
            } catch (error) {
                console.error('Something went wrong with fetching data!', error);
            }
        };

        fetchData();
    }, []);  

    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/posts/${id}`);
            const response = await axios.get('http://localhost:3000/api/posts');
            setBlogDeleteMsg(true);
            setTimeout(() => setBlogDeleteMsg(false), 3000); // Supprimer le message après 3 secondes
            inputRef.current.scrollIntoView({ behavior: 'smooth' });
            setBlogs(response.data);
        } catch (error) {
            console.error('Something went wrong with deleting post!', error);
        }
    };
    
    const deleteClient = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/clients/${id}`);
            const response = await axios.get('http://localhost:3000/api/clients');
            setClientDeleteMsg(true);
            setTimeout(() => setClientDeleteMsg(false), 3000); // Supprimer le message après 3 secondes
            inputRef.current.scrollIntoView({ behavior: 'smooth' });
            setClients(response.data);
        } catch (error) {
            console.error('Something went wrong with deleting client!', error);
        }
    };

    const deleteSupplier = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/suppliers/${id}`);
            const response = await axios.get('http://localhost:3000/api/suppliers');
            setSupplierDeleteMsg(true);
            setTimeout(() => setSupplierDeleteMsg(false), 3000); // Supprimer le message après 3 secondes
            inputRef.current.scrollIntoView({ behavior: 'smooth' });
            setSuppliers(response.data);
        } catch (error) {
            console.error('Something went wrong with deleting supplier!', error);
        }
    };

    const updatePost = async (id) => {
        try {
            // Implémentez ici la logique de mise à jour d'un post
            console.log(`Update post with ID ${id}`);
        } catch (error) {
            console.error('Something went wrong with updating post!', error);
        }
    };

    const updateClient = async (id) => {
        try {
            // Implémentez ici la logique de mise à jour d'un client
            console.log(`Update client with ID ${id}`);
        } catch (error) {
            console.error('Something went wrong with updating client!', error);
        }
    };

    const updateSupplier = async (id) => {
        try {
            // Implémentez ici la logique de mise à jour d'un fournisseur
            console.log(`Update supplier with ID ${id}`);
        } catch (error) {
            console.error('Something went wrong with updating supplier!', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='container' ref={inputRef}>
                <div className='flex'></div>
                <div className="logout-container">
                <Link to="/home" className="logout-btn">Log out</Link>
                </div>
                {blogDeleteMsg && <div className="msg">Post deleted successfully</div>}
                {clientDeleteMsg && <div className="msg">Client deleted successfully</div>}
                {supplierDeleteMsg && <div className="msg">Supplier deleted successfully</div>}
                <div>
                    <h2>Produit List</h2>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Author</th>
                                <th>Slug</th>
                                <th>Tags</th>
                                <th>supplier</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map(blog => (
                                <tr key={blog._id}>
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                    <td>{blog.author}</td>
                                    <td>{blog.slug}</td>
                                    <td>{blog.tags}</td>
                                    <td>{blog.supplier}</td>
                                    <td>
                                        <div className="btn-container">
                                            <button onClick={() => deletePost(blog._id)} className='delete-btn'>Delete</button>
                                            <Link to={`/update-post/${blog._id}`} className='edit-btn' onClick={() => updatePost(blog._id)}>Modifier</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2>Client List</h2>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map(client => (
                                <tr key={client._id}>
                                    <td>{client.name}</td>
                                    <td>
                                        <a href={`mailto:${client.email}`}>{client.email}</a>
                                    </td>
                                    <td>{client.phone}</td>
                                    <td>
                                        <div className="btn-container">
                                            <button onClick={() => deleteClient(client._id)} className='delete-btn'>Delete</button>
                                            <Link to={`/update-client/${client._id}`} className='edit-btn' onClick={() => updateClient(client._id)}>Modifier</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2>Supplier List</h2>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.map(supplier => (
                                <tr key={supplier._id}>
                                    <td>{supplier.name}</td>
                                    <td>
                                        <a href={`mailto:${supplier.email}`}>{supplier.email}</a>
                                    </td>
                                    <td>{supplier.contact}</td>
                                    <td>
                                        <div className="btn-container">
                                            <button onClick={() => deleteSupplier(supplier._id)} className='delete-btn'>Delete</button>
                                            <Link to={`/update-supplier/${supplier._id}`} className='edit-btn' onClick={() => updateSupplier(supplier._id)}>Modifier</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Blog;
