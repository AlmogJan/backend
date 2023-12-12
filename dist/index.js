"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const task_service_1 = require("./services/task/task.service");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/task', (req, res) => {
    res.send(task_service_1.taskService.query());
});
app.get('/task/:id', (req, res) => {
    res.send(task_service_1.taskService.getById(req.params.id));
});
app.post('/task', (req, res) => {
    const taskDto = req.body;
    res.send(task_service_1.taskService.add(taskDto));
});
app.delete('/task/:id', (req, res) => {
    try {
        res.send(task_service_1.taskService.remove(req.params.id));
        res.status(200).send();
    }
    catch (err) {
        console.log(err);
        if (err instanceof Error) {
            res.status(404).send({ message: err.message });
        }
    }
});
app.put('/task/:id', (req, res) => {
    try {
        const taskDto = req.body;
        res.send(task_service_1.taskService.edit(req.params.id, taskDto));
    }
    catch (err) {
        console.log(err);
        if (err instanceof Error) {
            res.status(404).send({ message: err.message });
        }
    }
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
