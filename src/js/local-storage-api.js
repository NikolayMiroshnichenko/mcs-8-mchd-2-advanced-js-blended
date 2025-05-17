export const TASKS_KEY = 'tasks';
export const THEME_KEY = 'theme';

export const saveTasks = (tasks) => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export const loadTasks = () => {
    const tasks = localStorage.getItem(TASKS_KEY);

    if (tasks) {
        return JSON.parse(tasks);
    };

    return [];
};

export const changeTheme = (theme = false) => {
    if (theme) {
        localStorage.setItem(THEME_KEY, theme);
        return;
    };

    localStorage.removeItem(THEME_KEY);
}

export const loadTheme = () => {
    const currentTheme = localStorage.getItem(THEME_KEY);
    return currentTheme;
}