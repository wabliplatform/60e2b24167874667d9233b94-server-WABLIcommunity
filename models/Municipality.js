
const { MunicipalityMimageSchema } =require('./MunicipalityMimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const municipalitySchema = new Schema({
Underscoreid:String , 


mimage:  
MunicipalityMimageSchema
 , 


mname:String 



})

module.exports = {
  Municipality : mongoose.model('municipality', municipalitySchema),
}

