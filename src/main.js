import { refs } from "./js/refs";
import { resetMoviesList, showLoader, createMoviesMarkup, showResetBtn, showLoadMoreBtn } from './js/render-functions';
import { getTrendingMovies, getSearchMovies } from "./js/movies-api";

let currentPage = 1;
let isTranding = true;
let query = '';

async function init() {
    currentPage = 1;
    query = '';

    resetMoviesList();
    showLoader(true);

    const data = await getTrendingMovies(currentPage);

    if (data?.results?.length > 0) {
        const murkup = createMoviesMarkup(data?.results);
        showLoader(false);

        if (data?.page < data?.total_pages) {
            showLoadMoreBtn(true);
            currentPage = data?.page + 1;
        };

        refs.moviesList.insertAdjacentHTML('beforeend', murkup);
        refs.title.innerHTML = 'Найпопулярніші фільми за тиждень';
    } else {
        showLoader(false);
        refs.title.innerHTML = 'Поки що найпопулярніші фільми не доступні';
    };

    isTranding = true;
    showResetBtn(false);
};

refs.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const value = e.target.movie.value.trim();

    if (value && value !== '') {
        currentPage = 1;
        isTranding = false;
        query = value;

        resetMoviesList();
        showLoader(true);

        const data = await getSearchMovies(value, currentPage);

        if (data?.results?.length > 0) {
            const murkup = createMoviesMarkup(data?.results);
            showLoader(false);

            if (data?.page < data?.total_pages) {
                showLoadMoreBtn(true);
                currentPage = data?.page + 1;
            };

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

refs.loadMoreBtn.addEventListener('click', async () => {
    showLoader(true);
    showLoadMoreBtn(false);

    if (isTranding) {
        const data = await getTrendingMovies(currentPage);

        if (data?.results?.length > 0) {
            const murkup = createMoviesMarkup(data?.results);
            showLoader(false);

            if (data?.page < data?.total_pages) {
                showLoadMoreBtn(true);
                currentPage = data?.page + 1;
            };

            refs.moviesList.insertAdjacentHTML('beforeend', murkup);
        } else {
            showLoader(false);
        };

        return;
    };

    const data = await getSearchMovies(query, currentPage);

    if (data?.results?.length > 0) {
        const murkup = createMoviesMarkup(data?.results);
        showLoader(false);

        if (data?.page < data?.total_pages) {
            showLoadMoreBtn(true);
            currentPage = data?.page + 1;
        };

        refs.moviesList.insertAdjacentHTML('beforeend', murkup);
    } else {
        showLoader(false);
    };
});

init();


