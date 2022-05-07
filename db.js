const mongoose = require("mongoose");



const articleSchema = mongoose.Schema({
    id_token: {
      type: String,
      required:true,
      
    },
    articleList: {
      type: Array
    },
    
},
{timestamps:true});

const article = mongoose.model("article", articleSchema);

module.exports = { article };