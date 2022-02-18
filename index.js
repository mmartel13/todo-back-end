const express = require('express');
const cors = require('cors');
const { getTasks, createTask } = require('./src/tasks')//importing getTasks function 
const PORT = process.env.PORT || 3000//checks to see if we have an environmental variable setup on our computer 

const app = express();//creates an express app
app.use(cors());//this and line 2 allow our frontend and backend to talk 
app.use(express.json());//tells express to use a json parcer (to post or patch for API send a body and it's in json format)

//Routes (API)
app.post('/tasks', createTask);
app.get('/tasks', getTasks);
// app.patch('/tasks/:taskId', updateTask)//: says don't display taskId but display whatever the actual id is 


app.listen(PORT, () => {
    console.log('Listening on Port: ', PORT)
});