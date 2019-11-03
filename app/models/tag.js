const mogoose = require('mongoose');

const { Schema, model } = mogoose;

const tagSchema = new Schema({
    __v: {type: Number, select: false},
    tagName: {type: String,required: true},
    tagDes: {type: String,required: true},
    status: {type: Number,enum:[0,1,-1],default:0},
    create_time: {
        type: Date,
        default: Date.now
      },
      update_time: {
        type: Date,
        default: Date.now
      }
},{timestamps:{createdAt: "create_time",updatedAt: "update_time"}});

module.exports = model('Tag',tagSchema)