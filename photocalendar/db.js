const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    id_token: {
      type: String
    },
    articleList: {
      type: Object,
      timestamps:true,
    },
    
},
{timestamps:true});

const article = mongoose.model("article", articleSchema);

module.exports = { article };