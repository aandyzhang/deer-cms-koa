const mogoose = require('mongoose');

const { Schema, model } = mogoose;

const userSchema = new Schema({
    __v: {type: Number, select: false},
    name: {type: String,required: false},
    sex: {type: String,enum:['male','feimale'],default:"male",required: true},
    location: {type: [{type: String}]},
})

module.exports = model('User',userSchema)