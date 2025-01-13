import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importez Switch pour gérer les routes
import Blog from './components/Blog';
import Home from './components/home'; // Importez le composant Contact avec la bonne casse
import Login from './auth/Login'; // Importez le composant Login
import Register from "./auth/Register"; // Importez le composant Register
 
import CreateClient from './components/CreateClient'; // Importez le composant CreateClient
import CreateSupplier from './components/CreateSupplier'; // Importez le composant CreateSupplier
import CreatePost from './components/CreatePost';
//import Home from './components/home'; 
import UpdateSupplier from './components/updatesupplier';
import Contact from "./components/Contact";
import UpdateClient from "./components/updateclient";
import UpdatePost from "./components/updatepost";
import SupplierPage from "./components/supplier";
import ShoppingCart from "./components/shoppingcart";
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/home" element={ <Home/>} />

          <Route path='/blog/create' element={<CreatePost />} />  
          <Route path='/auth/login' element={<Login />} />  
          <Route path='/auth/register' element={<Register />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/contact' element={<Contact />} /> {/* Utilisez le composant Contact sur le chemin /contact */}
          <Route path='/create-client' element={<CreateClient />} /> {/* Ajouter le chemin pour le composant CreateClient */}
           
          <Route path='/create-supplier' element={<CreateSupplier />} /> {/* Ajouter le chemin pour le composant CreateSupplier */}
          <Route path='/create-post' element={<CreatePost />} /> {/* Ajouter le chemin pour le composant CreateSupplier */}
          <Route path="/update-supplier/:id" element={<UpdateSupplier />} />
          <Route path="/update-client/:id" element={<UpdateClient/>} />
          <Route path="/update-post/:id" element={<UpdatePost/>} />
          <Route path="/supplier" element={<SupplierPage/>} />
          <Route path="/shoppingcart" element={<ShoppingCart/>} />
 {/* Ajouter le chemin pour le composant UpdateSupplier */}
        

           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
