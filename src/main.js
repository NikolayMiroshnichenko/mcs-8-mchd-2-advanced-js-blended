import { refs } from "./js/refs";
import { resetMoviesList, showLoader } from './js/render-functions';
import { getTrendingMovies, getSearchMovies } from "./js/movies-api";
import { handlerInitRequst, handlerSearchRequst } from "./js/utils";

async function init() {
    resetMoviesList();
    showLoader(true);

    const data = await getTrendingMovies();
    handlerInitRequst(data);
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
init();
