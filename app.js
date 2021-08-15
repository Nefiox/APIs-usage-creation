const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const moviesRoutes = require('./routes/movies');
const countriesRoutes = require('./routes/countries');

app.use('/movies', moviesRoutes);
app.use('/countries', countriesRoutes);

app.listen(3000, () => console.log('Servidor en el puerto 3000'));