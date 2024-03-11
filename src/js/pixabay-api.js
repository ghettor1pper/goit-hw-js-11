import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const form = document.querySelector('.form');
const loader = document.querySelector(`.loader`);
function handleClickSearch(event) {
  event.preventDefault();
  const searchTerm = form.elements.searchBar.value;
  if (!searchTerm) {
    alert`Please enter something to search for!`;
    return;
  }
  gallery.innerHTML = '';
  loader.classList.remove('hidden');
  const searchParams = new URLSearchParams({
    key: '42800487-0338ab50e10ef15f71fc3313e',
    q: `${searchTerm.trim()}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  console.log(searchParams.toString()); // "_limit=5&_sort=name"
  const url = `https://pixabay.com/api/?${searchParams}`;
  console.log(url); // "<https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name>"
  const options = {
    method: 'GET',
  };
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      return response.json();
    })
    .then(data => {
      const hits = data.hits;
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      const markup = hits
        .map(
          hit =>
            `<li class="gallery-item">
    <a class="gallery-link" href="${hit.largeImageURL}">
      <img
        class="gallery-image"
        src="${hit.previewURL}"
        alt="${hit.tags}"
      />
    </a>
    <div class="description">
                        <div class="field">
                        <span class="label"><b>Likes</b></span>
                        <span class="value">${hit.likes}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Views</b></span>
                        <span class="value">${hit.views}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Comments</b></span>
                        <span class="value">${hit.comments}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Downloads</b></span>
                        <span class="value">${hit.downloads}</span>
                        </div>
                    </div>
  </li>
  `
        )
        .join('');
      gallery.insertAdjacentHTML('afterbegin', markup);
      lightbox.refresh();
    })

    .catch(error => {
      console.log(error);
    })
    .finally(() => loader.classList.add('hidden'));
}
form.addEventListener('submit', handleClickSearch);
