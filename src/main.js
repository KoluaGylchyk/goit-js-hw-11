import showMessage from './lybraries-scripts/iziToast.js';
import { lightbox } from './lybraries-scripts/lightbox.js';

const form = document.querySelector('#form'),
  searchInput = document.querySelector('#searchInput'),
  gallery = document.querySelector('#gallery'),
  loader = document.querySelector('.loader');

form.addEventListener('submit', fetchImages);

function fetchImages(event) {
  loader.classList.remove('hide');
  gallery.innerHTML = '';
  event.preventDefault();
  const searchParams = new URLSearchParams({
    key: '41474300-2fa05bee877be877b8dc1781f',
    q: searchInput.value,
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
  });

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
        loader.classList.add('hide');
        if (images.hits.length === 0) {
          return showMessage('Sorry, there are no images matching your search query. Please try again!');
        }
        renderImages(images.hits);
    })
    .catch(error => console.log(error))
    .finally(() => {
      form.reset();
    });
}

function renderImages(images) {
  gallery.innerHTML = images.reduce(
    (
      html,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) =>
      html +
      `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="image-desc">
          <div>Likes <span>${likes}</span></div>
          <div>Views <span>${views}</span></div>
          <div>Comments <span>${comments}</span></div>
          <div>Downloads <span>${downloads}</span></div>
        </div>
      </li>
      `,
    ''
  );
  lightbox.refresh();
}