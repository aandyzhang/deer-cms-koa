const mogoose = require("mongoose");
const moment = require("moment");
const { Schema, model } = mogoose;

const articleSchema = new Schema({
  __v: { type: Number, select: false },
  title: { type: String, required: true },
  author: { type: String, required: true },
  keyword: { type: String, required: true },
  multiple: { type: Array, required: true },
  picture: { type: String, required: true },
  content: { type: String, required: true },
  published: {type: Boolean, default: false},
  status: {type: Boolean,default: true,select:false},
  create_time: {
    type: Date,
    default: Date.now
  },
  update_time: {
    type: Date,
    default: Date.now
  }
},{timestamps:{createdAt: "create_time",updatedAt: "update_time"}});

module.exports = model("Article", articleSchema);
