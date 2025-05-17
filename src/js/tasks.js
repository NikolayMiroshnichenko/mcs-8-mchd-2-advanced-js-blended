import { saveTasks } from "./local-storage-api";
let tasks = [];

const addTask = (title, description) => {
    const task = {
        id: Date.now().toString(),
        title,
        description
    };

    tasks.push(task);
    saveTasks(tasks)

    return tasks;
};

const getTasks = () => tasks;

const initTasks = (newTasks) => {
    tasks = newTasks;
};

const removeTask = (id) => {
    tasks = tasks.filter(item => item.id !== id);
    saveTasks(tasks)
}

export { addTask, tasks, getTasks, initTasks, removeTask }; 