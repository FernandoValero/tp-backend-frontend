const mongoose = require('mongoose');
const URI = 'mongodb://localhost/trabajoPractico5';
mongoose.connect(URI)
    .then(db => console.log('La Base de Datos esta conectada'))
    .catch(err => console.error(err))
module.exports = mongoose;
