const express = require('express');
const app = express();
const router = require('./routes/tasksRoute');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const Todo = require('./models/todoSchema')



// middleware
app.use(cors())
app.use(bodyParser.json())
dotenv.config();



// ------- database connection -------
const uri = "mongodb+srv://aja118379:todoapp1234@cluster15.xfwsdii.mongodb.net/Todo?retryWrites=true&w=majority";

mongoose.connect(uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Mongodb connected')
})
.catch((err) => {
  console.log(err)
})




// router
app.use('/tasks', router)

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`)
})
