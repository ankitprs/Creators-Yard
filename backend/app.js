import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import mongoose from './config/config.js';
import userRouter from './routes/user.js'
import videoRouter from './routes/video.js'
import channelRouter from './routes/channel.js'
import paymentRouter from './routes/payment.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v0/user', userRouter);
app.use('/api/v0/video', videoRouter);
app.use('/api/v0/channel', channelRouter);
app.use('/api/v0/payment', paymentRouter)

app.get('/', function (req, res) {
  res.send('Creators Yard is running !!!')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// GLOBAL Catches - error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3002, (req, res) => {
  console.log("Server is running in port 3002");
});
