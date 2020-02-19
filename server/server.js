require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const colors = require('colors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));


mongoose.connect(process.env.URLDB,
     {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useFindAndModify: false
     }, (err, res) => {
          if (err) throw err;
          console.log('Base de Datos online'.green);
     });

app.listen(process.env.PORT, () => {
     console.log('Escuchando puerto: ', process.env.PORT)
});