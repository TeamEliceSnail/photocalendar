const mongoose = require("mongoose");



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
    Like:{
      type: Boolean,
      default: false,
    },
    
},
{timestamps:true});

const article = mongoose.model("article", articleSchema);

module.exports = { article };