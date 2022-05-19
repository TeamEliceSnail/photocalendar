const jwt = require('jsonwebtoken');
const YOUR_SECRET_KEY = process.env.JWT_SECRET;
const LOGINURL = `${process.env.VIEW_URL}/login`
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const clientToken = req.cookies.user;
    if (clientToken) {
        try {
            const decoded = jwt.verify(clientToken, YOUR_SECRET_KEY);
            if (decoded) {
                res.locals.userId = decoded.user_id;
                next();
            } else {
                res.redirect(LOGINURL);
                res.status(401).json({ error: 'unauthorized' });
            }
        } catch (err) {
            console.log(err);
            res.redirect(LOGINURL);
        }
    } else {
        res.redirect(LOGINURL);
    }
};

exports.verifyToken = verifyToken;