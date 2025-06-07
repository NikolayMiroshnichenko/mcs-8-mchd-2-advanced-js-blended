import { refs } from "./refs";

export const createMoviesMarkup = (movies) => {
    if (!movies?.length) return false;

    return movies.map(({ poster_path, title, release_date, overview }) => (
        `
        <li class="movie-item">
            <img
                class="movie-poster"
                src="https://image.tmdb.org/t/p/w300/${poster_path}"
                alt="${title}"
                loading="lazy"
            />
            <div class="movie-info">
                <div>
                    <h3 class="movie-title">${title}</h3>
                    <div class="movie-year">${release_date ? release_date : '-'}</div>
                </div>
                <p class="movie-overview">
                    ${overview}
                </p>
            </div>
        </li>
        `
    )).join('')
};

export const resetMoviesList = () => {
    refs.moviesList.innerHTML = '';
}

export const showLoader = (show = false) => {
    refs.loader.classList[show ? 'add' : 'remove']('active');
}

export const showResetBtn = (show = false) => {
    refs.resetBtn.classList[show ? 'add' : 'remove']('active');
}