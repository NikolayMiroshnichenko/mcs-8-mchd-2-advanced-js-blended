export const createMurkup = ({ title, description, id }) => (
    `
        <li class="task-list-item">
            <button data-task_id="${id}" class="task-list-item-btn">Delete</button>
            <h3>${title}</h3>
            <p>${description}</p>
        </li>
    `
);