import { Uid } from "../../interfaces";
import { Status, Tags, Task } from "./task.interfaces";

export const taskService = {
    query,
    getById
}

const tasks: Task[] = [
    {
        id: '1234',
        title: "fix bug",
        desc: "fix the bug in the bag",
        lastEdited: new Date(),
        status: Status.InProgress,
        tag: Tags.Bug,
        userId: "user1234"
    },
    {
        id: '5678',
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
