import express, { Express, Request, Response } from 'express';
import cors from "cors"
import dotenv from 'dotenv';
import { taskService } from './services/task/task.service';
import { Task, TaskDto } from './services/task/task.interfaces';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());

app.get('/task', (req: Request, res: Response) => {
    res.send(taskService.query());
});

app.get('/task/:id', (req: Request, res: Response) => {
    res.send(taskService.getById(req.params.id));
});

app.post('/task', (req: Request, res: Response) => {
    const taskDto: TaskDto = req.body as TaskDto;
    res.send(taskService.add(taskDto))
})

app.delete('/task/:id', (req: Request, res: Response) => {
    try {
        res.send(taskService.remove(req.params.id));
        res.status(200).send();

    } catch (err) {
        console.log(err);
        if (err instanceof Error) {
            res.status(404).send({ message: err.message });
        }
    }
});

app.put('/task/:id', (req: Request, res: Response) => {
    try {
        const taskDto: TaskDto = req.body as TaskDto;
        res.send(taskService.edit(req.params.id, taskDto));
    } catch (err) {
        console.log(err);
        if (err instanceof Error) {
            res.status(404).send({ message: err.message });
        }
    }
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});