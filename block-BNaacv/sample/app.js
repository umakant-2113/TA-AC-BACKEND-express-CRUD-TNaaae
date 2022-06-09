let express = require('express');
let mongoose = require('mongoose');
let path = require('path');

// mongoose connection
mongoose.connect('mongodb://127.0.0.1/sample', (err) => {
  console.log(err ? err : 'mongoose connection true');
});

// intainciate
let app = express();

// require router file
app.use(express.urlencoded({extended: false}))
app.use('/user', require('./router/user'));
app.use('/index', require('./router/index'));


// setup of ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//404 page not found
app.use((req, res) => {
  res.statusCode = 404;
  res.send('404 Page not found');
});

// server error handler
app.use((err, req, res, next) => {
  return next(err);
});

// server
app.listen(3000, () => {
  console.log('server on port 4k');
});
