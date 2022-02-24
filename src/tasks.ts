//ES5 version
import { Request, Response } from "express";
import { connectDb } from "./connectDb";

export const createTask = (req: Request, res: Response) => {
    const newTask = {
      task: req.body.task,
      done: false   
  }
    const db = connectDb();
    db.collection('tasks')
        .add(newTask)
        .then(doc =>res.status(201).send(doc.id))
        .catch(err => res.status(500).send(err))
}

export const getTasks = (req: Request, res: Response) => {
  const db = connectDb();
  db.collection("tasks")
    .get() //to get all tasks from the task collection
    .then((snapshot) => {
      const taskList = snapshot.docs.map((doc) => {
        //.map always has to have a return, it's reshaping the array so we have to tell it what we want it to look like
        let task = doc.data();
        task.id = doc.id;
        return task;
      });
      res.send(taskList);
    })
    .catch((err) => res.status(500).send(err));
};

export const updateTask = (req: Request, res: Response) => {
    const { taskId } = req.params
    const isDone = req.body.done
    const db = connectDb();
    db.collection('tasks').doc(taskId).update({ done: isDone })
    .then(doc => res.status(202).send(doc))
    .catch(err => res.status(500).send(err))
}
