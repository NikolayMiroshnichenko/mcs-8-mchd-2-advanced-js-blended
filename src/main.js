import refs from "./js/refs.js";
import { addTask, initTasks, removeTask } from "./js/tasks.js";
import { renderTaskList } from "./js/render-tasks.js";
import { loadTasks, changeTheme, loadTheme } from './js/local-storage-api.js';
import { handlerTheme } from './js/theme-switcher.js';

function init() {
  const storegeTasks = loadTasks();
  const storegeTheme = loadTheme();


  initTasks(storegeTasks);
  renderTaskList();

  if (storegeTheme) {
    refs.body.classList.add(storegeTheme);
  };
};


refs.taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = event.target.taskName.value.trim();
  const desc = event.target.taskDescription.value.trim();

  if (!title || !desc) {
    alert('Заповніть поля форми!')
    return;
  };

  addTask(title, desc);
  renderTaskList();

  refs.taskForm.reset();
});

refs.taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const taskId = event.target.dataset.task_id;

    removeTask(taskId);
    renderTaskList();
  }
});

refs.themeBtn.addEventListener('click', handlerTheme);

init();



