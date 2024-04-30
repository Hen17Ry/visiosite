<template>
  <div>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-left">
                <a href="#" class="logo">MAN OF GOD</a>
            </div>
            <div class="navbar-right">
                <a href="#about">À Propos</a>
                <a href="#service">Nos Service</a>
                <a href="#reservation">Faire une Réservation</a>
                <router-link to="/blog">Blog</router-link>
                <a href="#contact">Nous Contacter</a>
            </div>
        </div>
        <div style="display: flex;flex-direction: column; align-items: center; justify-content: center; margin-top: 100px;">
            <div class="wel" style="width: 400px; height: 100px; border: solid 2px aqua; font-size: 30px; text-align: center; color: white; justify-content: center; align-items: center; display: flex;">
                Bienvenue Chez Man Of God
            </div>
            <h4 style="color: white">Accéder à nos service de spiritualité en toute confiance, confidance,anonymat et tout cela gratuitement</h4>
        </div>
    </nav>
    <div class="contain" id="about">
        <div class="text">
            <h2>About Me</h2>
            <p>
              Les premières signes de la création de ce monde visible a été l’appel des élus consacré à gouverner les sept temples qui forme l’agneau de Dieu , le fils unique Jésus Christ ainsi que ces douze serviteurs révèle la meilleure manière d’adorer le Saint . 
            </p>
            <p>
              Une église basée sur le rassemblement d’une seule et unique église venu des cieux qui a pour but d’amener les brebis perdu à la source  divine . Le temps est proche , nous sommes dans les dernières moments, une tempête s’annonce où tout être humain sera éprouvé, les vrais adorateurs sont là pour accomplir la prophétie du soulèvement. 
            </p>
            <p>
              La mort perdra sa force et la vie vivra à jamais. Préparer vos habits blanche pour le festin , la table des saints est dressé, les chérubins préparent leur instrument, le trône du de Dieu ce déplace pour venir à notre rencontre, c’est l’heure  , c’est l’heure, c’est l’heure du révélateur  L’ÉLU promis d’Oshoffa.
            </p>
        </div>
        <div class="image">
            <img src="/public/image2.jpeg" alt="Image">
        </div>
    </div>
    <div id="service" class="servco" >
        <h2>Nos Services</h2>
        <div class="service">
            <div class="serv">
                <h4>Conseil Spirutielle</h4>
            </div>
            <div class="serv">
                <h4>Explication des rêves</h4>
            </div>
            <div class="serv">
                <h4>Travaux Spirutielle</h4>
            </div>
        </div>
    </div>
    <div class="reservation-form" id="reservation">
    <h2>Réservation</h2>
    <form @submit.prevent="submitReservation">
        <div class="form-row">
            <div class="form-group">
                <label for="nom">Nom:</label>
                <input type="text" id="nom" name="nom" required v-model="reservation.nom">
            </div>
            <div class="form-group">
                <label for="prenom">Prénom:</label>
                <input type="text" id="prenom" name="prenom" required v-model="reservation.prenom">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label for="tel">Numéro de téléphone:</label>
                <input type="tel" id="tel" name="tel"  required v-model="reservation.tel">
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required v-model="reservation.email">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required v-model="reservation.date">
            </div>
            <div class="form-group">
                <label for="heure">Heure:</label>
                <input type="time" id="heure" name="heure" required v-model="reservation.heure">
            </div>
        </div>
        <div class="form-group">
            <label for="sujet">Sujet:</label>
            <textarea id="sujet" name="sujet" rows="5" required v-model="reservation.sujet"></textarea>
        </div>
        <button type="submit">Envoyer</button>
    </form>
    </div>
    <div class="contact-form" id="contact">
      <h2>Contactez-nous</h2>
      <form action="#" method="post">
        <div class="forme-group">
            <label for="nom">Nom:</label>
            <input type="text" id="nom" name="nom" required>
        </div>
        <div class="forme-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="forme-group">
            <label for="sujet">Sujet:</label>
            <input type="text" id="sujet" name="sujet" required>
        </div>
        <div class="forme-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
    </form>
    </div>
    <footer>
        <div class="footer-content">
            <p style="font-size: 50px;">Man Of God</p>
            <div class="contact-info">
                <p>Contactez-nous : nathandohounge@icloud.com</p>
                <p>Téléphone : https://wa.me/22957593617</p>
                <!-- Ajoutez d'autres informations de contact si nécessaire -->
            </div>
            <div class="social-links">
                <a href="https://facebook.com/votrepage">Facebook</a>
                <a href="https://twitter.com/votrepage">Twitter</a>
                <!-- Ajoutez d'autres liens sociaux si nécessaire -->
            </div>
            <p style="font-size: 30px;">&copy; MAN_OF_GOD</p>
        </div>
    </footer>

  </div>
</template>



<script>
import axios from 'axios';

export default {
  data() {
    return {
      reservation: {
        nom: '',
        prenom: '',
        tel: '',
        email: '',
        date: '',
        heure: '',
        sujet: '',
      }
    };
  },
  methods: {
    submitReservation() {
      axios.post('/store', this.reservation)
        .then(response => {
          console.log(response.data); // Gérer la réponse du serveur
          // Réinitialiser les données du formulaire après succès
          this.reservation = {
            nom: '',
            prenom: '',
            tel: '',
            email: '',
            date: '',
            heure: '',
            sujet: '',
          };
        })
        .catch(error => {
          console.error(error); // Gérer les erreurs
        });
    }
  }
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Poppins:400,700);

  /* Styles de la barre de navigation */
.navbar {
    background-image: url('image1.jpeg'); /* Ajoutez le chemin vers votre image de fond */
    background-size: cover;
    padding: 20px 0;
    height: 500px;
    font-family: 'Poppins', sans-serif;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 20px;
}

.navbar-left {
    flex: 1;
}

.navbar-right {
    flex: 1;
    text-align: right;
}

.logo {
    color: #fff;
    font-size: 44px;
    text-decoration: none;
}

.navbar-right a {
    color: #fff;
    margin-left: 20px;
    text-decoration: none;
    font-size: 16px;
}

.navbar-right a:hover {
    text-decoration: underline;
}

/* Styles de contenu */
.content {
    padding: 20px;
}

/* Media Queries pour la responsivité */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: stretch;
    }

    .navbar-left, .navbar-right {
        flex: none;
        width: 100%;
    }

    .navbar-right {
        text-align: center;
    }

    .navbar-right a {
        display: block;
        margin: 10px 0;
    }
}


.contain {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    width: 100%;
}

.text, .image {
    width: 100%; /* Changer la largeur pour qu'elle soit à 100% sur les petits écrans */
}

.text {
    text-align: center; /* Centrer le texte */
}

.text h2 {
    border-left: 1px solid;
    padding-left: 10px;
    font-size: 30px; /* Réduire la taille de la police pour les petits écrans */
    text-transform: uppercase;
}

.image {
    margin-top: 20px; /* Ajoutez une marge entre le texte et l'image */
    text-align: center; /* Centrer l'image */
}

.image img {
    max-width: 100%;
    height: auto;
}

/* Media queries pour les écrans plus grands */
@media (min-width: 768px) {
    .contain {
        flex-direction: row;
    }

    .text, .image {
        width: 50%;
    }

    .text {
        margin-inline-start: 0; /* Supprimer la marge négative */
        text-align: left; /* Aligner le texte à gauche */
    }

    .image img {
        margin-inline-start: 0; /* Supprimer la marge */
    }
}

.reservation-form {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
}

.reservation-form h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.form-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; /* Permettre le retour à la ligne */
    align-items: center;
    justify-content: center;
}

.form-group {
    flex: 1;
    margin-bottom: 10px; /* Ajouter un espace entre les lignes */
    align-items: center;
    width: 100%;
}


.form-group label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}

.form-group input[type="text"],
.form-group input[type="tel"],
.form-group input[type="email"],
.form-group input[type="date"],
.form-group input[type="time"],
.form-group textarea {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-inline-start: 30px;
}


.form-group textarea {
    resize: none;
    margin-inline-start: 70px;
}

button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
    background-color: #555;
}

/* Media Queries pour la responsivité */
@media (max-width: 768px) {
    .form-row {
        flex-direction: column; /* Afficher les éléments en colonne */
    }

    .form-group {
        margin-right: 0; /* Réinitialiser la marge */
    }
}


.contact-form {
    max-width: 800px;
    margin: 80px auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.forme-group {
    margin-bottom: 20px;
    margin-right: 18px;
}

.forme-group label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}

.forme-group input[type="text"],
.forme-group input[type="email"],
.forme-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.forme-group textarea {
    resize: none;
}

button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
    background-color: #555;
}

/* Media Queries pour la responsivité */
@media (max-width: 768px) {
    .contact-forme {
        max-width: 100%;
    }
}


.service{
    display: flex;
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
}

.servco {
  width: 100%;
}

.servco h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.service {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
}

.serv {
  width: 30%;
  margin: 1rem;
  text-align: center;
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
 .serv {
    width: 45%;
  }
}

@media (max-width: 480px) {
 .serv {
    width: 100%;
  }
}
footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
}

.site-name {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
}

.social-links a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
    font-size: 20px;
}

.contact-info p {
    margin: 5px 0;
    font-size: 20px;
}


</style>
