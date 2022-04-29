const mongoose = require("mongoose");

const mainPageSchema = mongoose.Schema({
    date: {
      type: String
    },
    photoUrl: {
      type: String
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    dateTag: {
        month: Number,
        day : Number
    },
    bookmark:{
        type: Boolean,
        default: false
    }
},
{timestamps:true});

const mainPage = mongoose.model("mainPage", mainPageSchema);

module.exports = { mainPage };