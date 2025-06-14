import { refs } from "./refs";
import { createMoviesMarkup, showResetBtn, showLoader, showLoadMoreBtn } from "./render-functions";
import { settings } from "../main";

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

        if (data.page < data.total_pages) {
            settings.currentPage = settings.currentPage += 1;
            showLoadMoreBtn(true);
        }
    } else {
        showLoader(false);
        refs.title.innerHTML = 'Поки що найпопулярніші фільми не доступні';
    };

    showResetBtn(false);
};