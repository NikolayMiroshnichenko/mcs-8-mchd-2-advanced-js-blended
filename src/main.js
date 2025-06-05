import { refs } from "./js/refs";
import { getTrendingMovies, getSearchMovies } from "./js/movies-api";
import { createMoviesMarkup, showLoader, showResetBtn } from "./js/render-functions";

const settings = {
  type: 'trending',
  current_page: 1
}

async function init() {
  refs.moviesList.innerHTML = '';
  showLoader(true);

  const data = await getTrendingMovies(settings.current_page);
  const murkup = createMoviesMarkup(data?.results || []);

  showLoader(false);
  refs.moviesList.insertAdjacentHTML('beforeend', murkup);
  showResetBtn(false);
  refs.title.textContent = 'Найпопулярніші фільми за тиждень';
};

refs.form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const value = e.target.movie.value.trim();

  if (value) {
    refs.moviesList.innerHTML = '';
    showLoader(true);

    const data = await getSearchMovies(value, settings.current_page);
    const murkup = createMoviesMarkup(data?.results || []);

    showLoader(false);
    refs.moviesList.insertAdjacentHTML('beforeend', murkup);
    showResetBtn(true);

    refs.form.reset();
    refs.title.textContent = `Результат пошуку за назвою: ${value}`;
  }
});

refs.resetBtn.addEventListener('click', init);

init();