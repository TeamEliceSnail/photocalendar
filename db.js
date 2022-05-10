const mongoose = require("mongoose");
const { string } = require("prop-types");



const articleSchema = mongoose.Schema({
    id_token: {
      type: String,
      required:true,
    },
    date: {
      type: Date,
      required:true,
    },
    title:{
      type: String,
    },
    content:{
      type: String,
    },
    imgurl:{
      type: String,
    },
    like:{
      type: Boolean,
      default: false,
    },
    
},
{timestamps:true});


const userSchema = mongoose.Schema({
    id_token: {
      type: String,
      required:true,
    },
    nickname:{
      type:String,
    },
    email: {
      type: String,
      default: "",
    }
},
{timestamps:true});


const article = mongoose.model("article", articleSchema);
const user = mongoose.model("user", userSchema);
module.exports = { article, user};