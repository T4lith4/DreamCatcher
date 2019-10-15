//BACK-END SERVER- where express is set up
const express = require ('express');
const mongoose = require ('mongoose');
const path = require ('path');
const config = require('config');

//Express set-up
const app = express();
app.use(express.json());

//db Config
const db = config.get('mongoURI');

 //connect to Mongo
 mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
   
    //use routes (make file available to the routes)
app.use('/api/dreams', require ('./routes/api/dreams'));
app.use('/api/users', require ('./routes/api/users'));
app.use('/api/auth', require ('./routes/api/auth'));

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
//set static folder- index.html file if there are no api/dreams paths
 app.use(express.static('client/build'));
 app.get('*',(req,res)=> {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
 });
}

//run server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server started on PORT ${port}`));
