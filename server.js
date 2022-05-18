require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const home = require('./src/router/router');
const { Logger } = require('concurrently');
const logger = require('morgan');





app.set('views', './src/pages');

app.engine('html', require('ejs').renderFile);

app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}포트로 서버가 가동되었습니다`);
});

app.use(logger('dev'));

app.use(cors({ origin: true, credentials: true }))
    .use(bodyParser.json())
    .use(cookieParser())
    .use('/', home);




mongoose
    .connect(process.env.DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'photocalendar',
    })
    .then(() => console.log('성공적으로 db에 연결됐습니다'))
    .catch((err) => console.log(err));

mongoose.connection.on('connected', () => {
    console.log('연결완료');
});
mongoose.connection.on('disconnected', () => {
    console.log('연결이 끊겼습니다.');
});
mongoose.connection.on('reconnected', () => {
    console.log('재연결완료');
});
mongoose.connection.on('reconnectFailed', () => {
    console.log('재연결 시도 횟수 초과');
});

