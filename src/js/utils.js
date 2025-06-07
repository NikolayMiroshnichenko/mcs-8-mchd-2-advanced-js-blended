import { refs } from "./refs";
import { createMoviesMarkup, showResetBtn, showLoader } from "./render-functions";

export const handlerSearchRequst = (data, value = '') => {
    if (data?.results?.length > 0) {
        const murkup = createMoviesMarkup(data?.results);

        showLoader(false);
        refs.moviesList.insertAdjacentHTML('beforeend', murkup);
        refs.title.innerHTML = `Результат пошук за запитом: ${value}`;
    } else {
        showLoader(false);
        refs.title.innerHTML = `Немає результату за Вашим запитом :(`;
    };


    refs.form.reset();
    showResetBtn(true);
}

export const handlerInitRequst = (data) => {
    if (data?.results?.length > 0) {
        const murkup = createMoviesMarkup(data?.results);

        showLoader(false);
        refs.moviesList.insertAdjacentHTML('beforeend', murkup);
        refs.title.innerHTML = 'Найпопулярніші фільми за тиждень';
    } else {
        showLoader(false);
        refs.title.innerHTML = 'Поки що найпопулярніші фільми не доступні';
    }
}