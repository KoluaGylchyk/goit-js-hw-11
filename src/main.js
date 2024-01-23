import axios from 'axios';
import showMessage from './libraries-scripts/iziToast';
import lightbox from './libraries-scripts/lightbox.js';

const API_KEY = '41474300-2fa05bee877be877b8dc1781f';
const API_BASE_URL = 'https://pixabay.com/api/';
let userSearchRequest;

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  orientation: 'horizontal',
  image_type: 'photo',
  safesearch: true,
};

const form = document.querySelector('#form'),
  searchInput = document.querySelector('#searchInput'),
  gallery = document.querySelector('#gallery'),
  loader = document.querySelector('.loader');

form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();
  userSearchRequest = searchInput.value.trim();
  if (!userSearchRequest) {
    return showMessage('Please enter your search query!');
  }
  resetGallery();
  await fetchAndRenderImages();
}

async function fetchAndRenderImages() {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        q: userSearchRequest,
      },
    });
    const images = response.data;
    if (images.hits.length === 0) {
      return showMessage(
        'Sorry, no images match your search query. Please try again!'
      );
    }
    renderImages(images.hits);
  } catch (error) {
    handleAPIError(error);
  } finally {
    loader.classList.add('hide');
  }
}

function renderImages(images) {
  const markup = images.reduce(
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
        <div class="image-desc-item">
        <div class="image-desc-label">Likes</div>
        <div>${likes}</div>
        </div>
        <div class="image-desc-item">
        <div class="image-desc-label">Views</div>
        <div>${views}</div>
        </div>
        <div class="image-desc-item">
        <div class="image-desc-label">Comments</div>
        <div>${comments}</div>
        </div>
        <div class="image-desc-item">
        <div class="image-desc-label">Downloads</div>
        <div>${downloads}</div>
        </div>
        </div>
        </li>
        `,
    ''
  );

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

function resetGallery() {
  loader.classList.remove('hide');
  gallery.innerHTML = '';
}

function handleAPIError(error) {
  console.log(error)
  error?.response?.data 
    ? showMessage(error.response.data )
    : showMessage('Oops... Something went wrong');
}
