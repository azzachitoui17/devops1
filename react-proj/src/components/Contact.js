import React from "react";
import emailjs from 'emailjs-com';
import NavigationBar from './Navbar'; // Importez le composant NavigationBar
import './contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.user_email.value.trim();
    const phone = form.phone.value.trim();
    const msg = form.message.value.trim();

    if ((!email && !phone) || !msg) {
      alert('Veuillez fournir soit un email soit un numéro de téléphone, et un message.');
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
      <NavigationBar /> {/* Ajoutez la barre de navigation ici */}
      <h2 style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Contactez-nous</h2> {/* Ajoutez l'écriture "Contactez-nous" */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="user_name" placeholder="Nom complet" />
        <input type="email" name="user_email" placeholder="Adresse email" />
        <input type="text" name="subject" placeholder="Sujet" />
        <input type="text" name="phone" placeholder="Numéro de téléphone" />
        <textarea name="message" placeholder="Message" required rows={4}></textarea>
        <button type="submit">Envoyer le message</button>
      </form>
    </>
  );
};

export default Contact;
