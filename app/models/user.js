const mogoose = require('mongoose');

const { Schema, model } = mogoose;

const userSchema = new Schema({
    __v: {type: Number, select: false},
    username: {type: String,required: true},
    password: {type: String,required: true,select:false},
    sex: {type: String,enum:['male','feimale'],default:"male",required: true},
    // location: {type: [{type: String}]},
    // following: {
    //     type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    //     select: false,
    // }
})

module.exports = model('User',userSchema)