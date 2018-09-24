var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
    address: String,
    city: String,
    USstate: String,
    country: String,
    notes: String
});

module.exports = mongoose.model('Location', LocationSchema);