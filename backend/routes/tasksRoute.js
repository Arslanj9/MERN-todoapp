const express = require('express');
const router = express.Router();
const Todo = require('../models/todoSchema')

// GET
router.route('/').get((req, res) => {
    const tasks = Todo.find()
        .then((tasks) => {
            res.json(tasks)
        })
        .catch((err) => {
            res.json({message: "Unable to get tasks"})
        })
})

// GET by id
router.route('/:id').get((req, res) => {
    const task = Todo.findById(req.params.id)
        .then((task) => {
            res.json(task)
        })
})


// POST
router.route('/').post((req, res) => {
    const { text }  = req.body;
    const task = new Todo({ text });
    task.save()
      .then((task) => {
         res.json({message: "Task created successfuly"})
      })
      .catch((err) => {
        res.json({ message: "Error"})
      })
})


// DELETE
router.route('/:id').delete((req, res) => {
    const task = Todo.findByIdAndDelete(req.params.id)
        .then((task) => {
            res.json({ message: "task deleted successfuly"})
        })
        .catch((err) => {
            res.json({ message: "Something went wrong!"})
        })
})

// PUT
router.route('/:id').put((req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const updatedTask = Todo.findByIdAndUpdate(id, { text })
       .then((updatedTask) => {
          res.json({ message: "Task updated successfuly"})
       }) 
       .catch((err) => {
          res.json({ message: "Something went wrong"})
       })
})



module.exports = router;