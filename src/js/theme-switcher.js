import refs from "./refs";
import { changeTheme } from "./local-storage-api";

export const handlerTheme = () => {
    refs.body.classList.toggle('theme-dark');

    if (refs.body.classList.contains('theme-dark')) {
        changeTheme('theme-dark');
        return;
    };

    changeTheme();
}