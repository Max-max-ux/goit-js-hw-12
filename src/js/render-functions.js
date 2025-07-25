import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');
const loader = document.querySelector('.loader');

export const lightbox = new SimpleLightbox('.gallery a');

export function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            width="360"
          />
        </a>
        <ul class="gallery-item-info">
          <li class="info-block"><h5>Likes</h5><p>${likes}</p></li>
          <li class="info-block"><h5>Views</h5><p>${views}</p></li>
          <li class="info-block"><h5>Comments</h5><p>${comments}</p></li>
          <li class="info-block"><h5>Downloads</h5><p>${downloads}</p></li>
        </ul>
      </li>`
    )
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
