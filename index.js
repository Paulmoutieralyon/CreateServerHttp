const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`<h1>Bienvenue sur votre serveur !!</h1>`);
});

app.get('/contact', (req, res) => {
  res.send(`<h1>Nous ne sommes pas joignables pour le moment ! </h1>`);
});

app.get('/display/:name', (req, res) => {
  res.send(`<h1>Vous tentez d’afficher le profil de ${req.params.name}</h1>`);
});

const message = `Server is running on port ${port}`;
app.listen(port);
console.log(message);
