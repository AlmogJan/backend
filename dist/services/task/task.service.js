"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskService = void 0;
const task_interfaces_1 = require("./task.interfaces");
exports.taskService = {
    query,
    getById
};
const tasks = [
    {
        id: '1234',
        title: "fix bug",
        desc: "fix the bug in the bag",
        lastEdited: new Date(),
        status: task_interfaces_1.Status.InProgress,
        tag: task_interfaces_1.Tags.Bug,
        userId: "user1234"
    },
    {
        id: '5678',
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
