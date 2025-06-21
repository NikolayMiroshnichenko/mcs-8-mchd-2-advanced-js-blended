import { refs } from "./js/refs";
import { resetMoviesList, showLoader, createMoviesMarkup, showResetBtn } from './js/render-functions';
import { getTrendingMovies, getSearchMovies } from "./js/movies-api";

async function init() {
    resetMoviesList();
    showLoader(true);

    const data = await getTrendingMovies();

    if (data?.results?.length > 0) {
        const murkup = createMoviesMarkup(data?.results);

        showLoader(false);

        refs.moviesList.insertAdjacentHTML('beforeend', murkup);
        refs.title.innerHTML = 'Найпопулярніші фільми за тиждень';
    } else {
        showLoader(false);
        refs.title.innerHTML = 'Поки що найпопулярніші фільми не доступні';
    };

    showResetBtn(false);
};

refs.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const value = e.target.movie.value.trim();

    if (value && value !== '') {
        resetMoviesList();
        showLoader(true);

        const data = await getSearchMovies(value);

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
    } else {
        alert('Введіть значення!');
    };
});

refs.resetBtn.addEventListener('click', init);

init();


