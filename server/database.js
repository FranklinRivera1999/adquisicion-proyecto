const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/adqui';

mongoose.connect(URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,

})
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err));

module.exports = mongoose;