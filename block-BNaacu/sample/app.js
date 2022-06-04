let express = require('express');
let mongoose = require('mongoose');


// mongoose connection
mongoose.connect('mongodb://127.0.0.1/sample', (err) => {
  if (err) console.log(err);
  console.log('connection true');
});
// intanciate 
let app = express();

// middleware
app.use(express.urlencoded({ extended: false }));

//routing middlewares
app.use('/', require('./routers/index'));

app.use('/users', require('./routers/student'));

//ejs setup-engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//error handler
app.use((req,res)=>{
 res.send("page not found")
})

// server error  handler 

app.use((err,req,res,next)=>{
    return next(err)
})
// server
app.listen(5000, () => {
  console.log('server listening on port 3k');
});

