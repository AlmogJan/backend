"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskService = void 0;
const utils_service_1 = require("../utils.service");
const task_interfaces_1 = require("./task.interfaces");
exports.taskService = {
    query,
    getById,
    add,
    remove,
    edit
};
const tasks = [
    {
        id: utils_service_1.utilsService.makeId(),
        title: "fix bug",
        desc: "fix the bug in the bag",
        lastEdited: new Date(),
        status: task_interfaces_1.Status.InProgress,
        tag: task_interfaces_1.Tags.Bug,
        userId: "user1234"
    },
    {
        id: utils_service_1.utilsService.makeId(),
        title: "create feature",
        desc: "create a feature with the creature",
        lastEdited: new Date(),
        status: task_interfaces_1.Status.Todo,
        tag: task_interfaces_1.Tags.Feature,
        userId: "user123"
    }
];
function query() {
    return tasks;
}
function getById(id) {
    return tasks.find((task) => task.id === id);
}
function add(dto) {
    const task = Object.assign(Object.assign({}, dto), { id: utils_service_1.utilsService.makeId(), lastEdited: new Date() });
    tasks.push(task);
    return tasks;
}
function remove(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index > -1) {
        tasks.splice(tasks.findIndex((task) => task.id === id), 1);
        return tasks;
    }
    else {
        throw new Error("Task not found");
    }
}
function edit(id, dto) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index > -1) {
        const taskToEdit = Object.assign(Object.assign({}, dto), { id: id, lastEdited: new Date() });
        tasks[index] = taskToEdit;
        return tasks;
    }
    else {
        throw new Error("Task not found");
    }
}
