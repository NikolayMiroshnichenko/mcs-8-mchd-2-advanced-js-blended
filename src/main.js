import { refs } from "./js/refs";
import { resetMoviesList, showLoader, showLoadMoreBtn } from './js/render-functions';
import { getTrendingMovies, getSearchMovies } from "./js/movies-api";
import { handlerInitRequst, handlerSearchRequst } from "./js/utils";

export const settings = {
    currentPage: 1,
    type: 'tranding',
    qery: ''
};

async function init() {
    resetMoviesList();
    showLoader(true);

    const data = await getTrendingMovies();
    handlerInitRequst(data, settings.currentPage);
};

refs.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const value = e.target.movie.value.trim();

    if (value && value !== '') {
        resetMoviesList();
        showLoader(true);

        const data = await getSearchMovies(value);
        handlerSearchRequst(data, value);
    } else {
        alert('Введіть значення!');
    };
});

refs.resetBtn.addEventListener('click', init);

refs.loadMoreBtn.addEventListener('click', async () => {
    showLoader(true);
    showLoadMoreBtn(false);

    if (settings.type === 'tranding') {
        const data = await getTrendingMovies(settings.currentPage);
        handlerInitRequst(data);
    } else {
        const data = await getSearchMovies(settings.qery, settings.currentPage);
        handlerSearchRequst(data);
    }
});

init();


