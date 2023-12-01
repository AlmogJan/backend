import express, { Express, Request, Response } from 'express';
import cors from "cors"
import dotenv from 'dotenv';
import { taskService } from './services/task/task.service';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors())

app.get('/task', (req: Request, res: Response) => {
    res.send(taskService.query());
});
app.get('/task:id', (req: Request, res: Response) => {
    res.send(taskService.getById(req.params.id));
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
