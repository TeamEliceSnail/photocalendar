
const jwt = require('jsonwebtoken');
const YOUR_SECRET_KEY = process.env.JWT_SECRET;
require('dotenv').config();

const jwtdecode=(jwtValue)=>{
    const decodeValue = jwt.verify(jwtValue, YOUR_SECRET_KEY);
    if (decodeValue) {
      return decodeValue;
    } else {
      console.log("decode를 실패했습니다.");
    }
}

exports.jwtdecode= jwtdecode 