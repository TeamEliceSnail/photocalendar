const jwt = require('jsonwebtoken');
const YOUR_SECRET_KEY = process.env.JWT_SECRET;
const LOGINURL = `${process.env.VIEW_URL}/login`
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const clientToken = req.cookies.user;
    if (!clientToken) {
        return res.status(401).json({ error: 'token empty' });
    } else {
        try {
            const decoded = jwt.verify(clientToken, YOUR_SECRET_KEY);
            if (decoded) {
                res.locals.userId = decoded.user_id;
                res.status(200);
                next();
            } else {
                res.status(401).json({ error: 'unauthorized' });
            }
        } catch (err) {
            res.status(401).json({ error: err });
        }
};

exports.verifyToken = verifyToken;