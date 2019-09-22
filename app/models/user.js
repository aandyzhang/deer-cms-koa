const mogoose = require('mongoose');

const { Schema, model } = mogoose;

const userSchema = new Schema({
    name: {type: String,required: true}
})

module.exports = model('User',userSchema)