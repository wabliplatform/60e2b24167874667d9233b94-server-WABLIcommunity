
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MunicipalityMimageSchema = new Schema({
data:String , 
name:String 
});

module.exports = { MunicipalityMimageSchema };

