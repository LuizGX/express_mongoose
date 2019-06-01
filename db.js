
var mongoose = require('mongoose');

const uri = "mongodb+srv://dbUser:123mudar@cluster0-agrfc.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(uri, {
    reconnectTries: 100,
    reconnectInterval: 500,
    autoReconnect: true,
    useNewUrlParser: true,
    dbName: 'nodejs'
  }).catch(err => console.log('Mongo connection error', err))

var customerSchema = new mongoose.Schema({
    name: String,
    email: String
    }, { collection: 'customers' }
);
     
module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }