import React from "react";
import emailjs from 'emailjs-com';
import NavigationBar from './Navbar';

const Supplier = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const productType = form["type_de_produit"].value.trim(); // Assurez-vous que le nom est correct
        const email = form["email"].value.trim(); // Assurez-vous que le nom est correct
        const quantité = form["quantité"].value.trim(); // Assurez-vous que le nom est correct
        const message = form["message"].value.trim(); // Assurez-vous que le nom est correct
      
        if (!productType || !email || !quantité || !message) {
          alert('Veuillez remplir tous les champs.');
          return;
        }
      
        emailjs.sendForm('service_tdquxyf', 'template_b929n1f', form, 'GC2_YrC1HN9sIiUyT')
          .then((result) => {
            alert('Message envoyé avec succès !');
            form.reset();
          }, (error) => {
            alert('Échec de l’envoi du message, veuillez réessayer.');
          });
      };

    return (
        <>
            <NavigationBar />
            <h2 style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Pour nos fournisseurs</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="type_de_produit" placeholder="Type de produit" />
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="quantité" placeholder="Quantité" />
                <textarea name="message" placeholder="Message" required rows={4}></textarea>
                <button type="submit">Envoyer le message</button>
            </form>
        </>
    );
};

export default Supplier;
