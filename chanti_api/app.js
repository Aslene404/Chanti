const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');



const usersRouter = require('./routes/users');
const contactRouter= require('./routes/contact');
const materialsRouter= require('./routes/materials');
const projectsRouter= require('./routes/projects');
const tasksRouter= require('./routes/tasks');
const app = express();
app.use(cors());

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use('/api/v1/users', usersRouter);
app.use('/api/v1/contact' ,contactRouter);
app.use('/api/v1/materials', materialsRouter);
app.use('/api/v1/tasks', tasksRouter);
app.use('/api/v1/projects', projectsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error 
  res.status(err.status || 500);
  res.json({
    error: 'error server code:500'
  });
});

module.exports = app;
