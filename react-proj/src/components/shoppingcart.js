import React, { useState } from 'react';
import NavigationBar from './Navbar';
import './shoppingcart.css';


const ShoppingCart = () => {
  const [creditCardName, setCreditCardName] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // Tableau de produits disponibles dans le panier
  const [products] = useState([
    { id: 1, name: 'Produit 1', price: 10 },
    { id: 2, name: 'Produit 2', price: 15 },
    { id: 3, name: 'Produit 3', price: 20 },
    // Ajoutez d'autres produits si nécessaire
  ]);

  // Tableau de produits sélectionnés par le client
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  // Fonction pour supprimer un produit du panier
  const removeFromCart = (productId) => {
    const updatedProducts = selectedProducts.filter((product) => product.id !== productId);
    setSelectedProducts(updatedProducts);
  };

  // Fonction pour calculer le prix total du panier
  const calculateTotalPrice = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  };

  // Vérifier si toutes les informations de la carte sont remplies
  const isCreditCardInfoFilled = () => {
    return creditCardName.trim() !== '' && creditCardNumber.trim() !== '' && securityCode.trim() !== '' && postalCode.trim() !== '';
  };

  // Acheter les produits seulement si toutes les informations de la carte sont remplies
  const handleBuy = () => {
    if (isCreditCardInfoFilled()) {
      // Logique pour finaliser l'achat
      alert('Achat effectué avec succès !');
    } else {
      alert('Veuillez remplir toutes les informations de la carte.');
    }
  };

  return (
    <>
      <NavigationBar />
      <div>
        <h1>Panier</h1>
        <div>
          <h2>Produits disponibles :</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price} Dnt
                <button onClick={() => addToCart(product)}>Ajouter au panier</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Produits sélectionnés :</h2>
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price} DNT
                <button onClick={() => removeFromCart(product.id)}>Retirer du panier</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Prix total du panier :</h2>
          <p>{calculateTotalPrice()} DNT</p>
        </div>
        <div>
          <input type="text" placeholder="Nom sur la carte" value={creditCardName} onChange={(e) => setCreditCardName(e.target.value)} />
          <input type="text" placeholder="Numéro de carte" value={creditCardNumber} onChange={(e) => setCreditCardNumber(e.target.value)} />
          <input type="text" placeholder="Code de sécurité" value={securityCode} onChange={(e) => setSecurityCode(e.target.value)} />
          <input type="text" placeholder="Code postal" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </div>
        <button onClick={handleBuy}>Acheter</button>
      </div>
    </>
  );
};

export default ShoppingCart;
