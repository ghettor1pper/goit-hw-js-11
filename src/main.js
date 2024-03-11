import { clearGallery, renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api.js';

const form = document.querySelector('.form');
const loader = document.querySelector(`.loader`);

async function handleClickSearch(event) {
  event.preventDefault();
  const searchTerm = form.elements.searchBar.value;
  if (!searchTerm) {
    alert`Please enter something to search for!`;
    return;
  }
  loader.classList.remove('hidden');
  const { images, totalImages } = await searchImages(searchTerm.trim());
  loader.classList.add('hidden');
  clearGallery();
  if (images.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
  renderGallery(images);
}

form.addEventListener('submit', handleClickSearch);
