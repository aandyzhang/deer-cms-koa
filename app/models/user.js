const mogoose = require('mongoose');

const { Schema, model } = mogoose;

const userSchema = new Schema({
    __v: {type: Number, select: false},
    username: {type: String,required: true},
    password: {type: String,required: true,select:false},
    repassword: {type: String,required: true,select:false},
    email: {type: String,required: false},
    permission: {type: String,enum:['super','visitor'],required: true},
    create_time: {
        type: Date,
        default: Date.now
      },
      update_time: {
        type: Date,
        default: Date.now
      }
    // sex: {type: String,enum:['male','feimale'],default:"male",required: true},
    // location: {type: [{type: String}]},
    // following: {
    //     type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    //     select: false,
    // }
},{timestamps:{createdAt: "create_time",updatedAt: "update_time"}});

module.exports = model('User',userSchema)