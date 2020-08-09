const express  = require('express');
// requiring express
const app = express();
const port = 8000;
const Task = require('./models/tasks');
const path=require('path')
const db = require('./config/mongoose');
// setting location for assets
app.use(express.static('./assets'));
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

// getting the homepage
app.get('/',function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log(`Error in finding the tasks : ${err}`);
            return;
        }
        res.render('home',{tasks:tasks});
    })
    
});

// creating a task
app.post('/create-task',function(req,res){
    Task.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,task){
        if(err){
            console.log(`Error in creating task : ${err}`);
            return;
        }else{
            console.log(task);
            res.redirect('back');
        }
    });
})
// listening to port
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
