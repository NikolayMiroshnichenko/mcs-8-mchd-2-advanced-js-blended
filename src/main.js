import { refs } from "./js/refs";
import { getTrendingMovies } from "./js/movies-api";
import { createMoviesMarkup, showLoader } from "./js/render-functions";

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
}

init();