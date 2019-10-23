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
  published: {tyep: Boolean, default: false},
  create_time: {
    type: String,
    default: () => moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
  },
  update_time: {
    type: String,
    default: () => moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
  }
});

module.exports = model("Article", articleSchema);
