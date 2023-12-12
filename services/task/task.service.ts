import { Uid } from "../../interfaces";
import { utilsService } from "../utils.service";
import { Status, Tags, Task, TaskDto } from "./task.interfaces";

export const taskService = {
    query,
    getById,
    add,
    remove,
    edit
}

const tasks: Task[] = [
    {
        id: utilsService.makeId(),
        title: "fix bug",
        desc: "fix the bug in the bag",
        lastEdited: new Date(),
        status: Status.InProgress,
        tag: Tags.Bug,
        userId: "user1234"
    },
    {
        id: utilsService.makeId(),
        title: "create feature",
        desc: "create a feature with the creature",
        lastEdited: new Date(),
        status: Status.Todo,
        tag: Tags.Feature,
        userId: "user123"
    }
];

function query() {
    return tasks
}

function getById(id: Uid): Task | undefined {
    return tasks.find((task) => task.id === id)
}

function add(dto: TaskDto) {
    const task: Task = {
        ...dto,
        id: utilsService.makeId(),
        lastEdited: new Date()
    }
    tasks.push(task);
    return tasks;
}

function remove(id: Uid): Task[] {
    const index = tasks.findIndex((task) => task.id === id);
    if (index > -1) {
        tasks.splice(tasks.findIndex((task) => task.id === id), 1);
        return tasks;
    } else {
        throw new Error("Task not found");
    }
}

function edit(id: Uid, dto: TaskDto): Task[] {
    const index = tasks.findIndex((task) => task.id === id)
    if (index > -1) {
        const taskToEdit = {
            ...dto,
            id: id,
            lastEdited: new Date()
        }
        tasks[index] = taskToEdit
        return tasks
    } else {
        throw new Error("Task not found");
    }

}