const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    id_token: {
      type: String
    },
    articleList: {
      type: object,
      timestamps:true
    },
    
},
{timestamps:true});

const article = mongoose.model("article", articleSchema);

module.exports = { article };