import { refs } from './refs';

export const createMoviesMarkup = (movies) => {
    if (!movies?.length) return false;

    return movies.map(({ poster_path, original_title, original_name, release_date, overview }) => (
        `
        <li class="movie-item">
            <img
                class="movie-poster"
                src="https://image.tmdb.org/t/p/w300/${poster_path}"
                alt="${original_title || original_name}"
                loading="lazy"
            />
            <div class="movie-info">
                <div>
                    <h3 class="movie-title">${original_title || original_name}</h3>
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

export const showLoader = (active) => {
    refs.loader.classList[active ? 'add' : 'remove']('active');
}
export const showResetBtn = (active) => {
    refs.resetBtn.classList[active ? 'add' : 'remove']('active');
}