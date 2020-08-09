const express  = require('express');
// requiring express
const app = express();
const port = 8000;
// requiring model
const Task = require('./models/tasks');
const path=require('path')
// requiring db
const db = require('./config/mongoose');
// setting location for assets
app.use(express.static('./assets'));
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
// setting up directory path
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

// getting the homepage
app.get('/',function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log(`Error in finding the tasks : ${err}`);
            return;
        }
        return res.render('home',{tasks:tasks});
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
            return res.redirect('back');
        }
    });
});
// Updating a task status
// Updating the database for the request
app.post('/update-task',function(req,res){
    let id = req.query.id;
    // finding the task
    Task.findById(id,function(err,task){
        if(err){
            console.log("not found");
            return;
        }
        const newTask=task;
        const status = req.query.status;
        if(status=='true'){
            newTask.checked=false;
        }else {
            newTask.checked=true;
        }
        // updating that found task
        Task.findByIdAndUpdate(id,newTask,function(err,newCreatedTask){
            if(err){
                console.log("Error in Updating");
                return;
            }
            return res.redirect('back');
        })
        
    });
});
// delete a task
app.get('/delete-tasks',function(req,res){
    Task.deleteMany({checked:true},function(err){

        if(err){
            console.log('Error in deleting tasks');
            return res.redirect('back');
        }
        return res.redirect('back');
    })
});
// listening to port
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
