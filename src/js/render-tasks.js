import refs from "./refs.js";
import { getTasks } from "./tasks.js";
import { createMurkup } from './markup-tasks.js';

export const renderTaskList = () => {
    refs.taskList.innerHTML = '';

    const tasks = getTasks();

    const markup = tasks.map(task => createMurkup(task)).join('');
    refs.taskList.insertAdjacentHTML('afterbegin', markup);
}