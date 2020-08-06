const express  = require('express');
// requiring express
const app = express();
const port = 8000;
// setting location for assets
app.use(express.static('./assets'));
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());

// getting the homepage
app.get('/',function(req,res){
    res.render('home');
})
// listening to port
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
