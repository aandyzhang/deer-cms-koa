const mogoose = require('mongoose');
const moment = require('moment');
const { Schema, model } = mogoose;

const articleSchema = new Schema({
    content: {type: String,required: true},
    create_time: {type: String,default: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),}
})

module.exports = model('Article',articleSchema)