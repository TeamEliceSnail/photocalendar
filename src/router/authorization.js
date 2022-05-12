const jwt = require('jsonwebtoken');
const YOUR_SECRET_KEY = process.env.JWT_SECRET;
require('dotenv').config();

const verifyToken = (req, res, next) => {
 
    const clientToken = req.cookies.user;       
    if(clientToken){}else{res.redirect('http://localhost:3000/login')}
    try { 
    const decoded = jwt.verify(clientToken, YOUR_SECRET_KEY);
    if (decoded) { 
      res.locals.userId = decoded.user_id;
      next(); 
    } else {
      res.redirect('http://localhost:3000/login') 
      res.status(401).json({ error: 'unauthorized' });
    } 
  } catch (err) {
    console.log(err)
    res
    .redirect('http://localhost:3000/login');
  } 
};
 
exports.verifyToken = verifyToken;
