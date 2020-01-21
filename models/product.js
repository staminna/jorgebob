var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    bags: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);