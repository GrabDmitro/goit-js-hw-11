import './css/styles.css';
import ApiService from './js/api';
import render from './js/render';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputRef: document.querySelector('#search-form'),
  buttonRef: document.querySelector('[type="submit"]'),
  galleryRef: document.querySelector('.gallery'),
  loadMoreRef: document.querySelector('[type="button"]'),
};
console.log();
// console.log(refs.buttonRef);
// console.log(refs.galleryRef);
const api = new ApiService();

refs.buttonRef.addEventListener('click', onButtonPress);
refs.loadMoreRef.addEventListener('click', onLoadMore);

function onLoadMore(e) {
  api.incrementPage();
  api
    .fetchArticles()
    .then(render)
    .then(marking => {
      refs.galleryRef.insertAdjacentHTML('beforeend', marking);
    });
}

function onButtonPress(e) {
  e.preventDefault();
  if (api.query === refs.inputRef.firstElementChild.value) {
    console.log('ok');
    return;
  }
  refs.loadMoreRef.disabled = false;
  api.query = refs.inputRef.firstElementChild.value;
  api.resetPAge();
  api
    .fetchArticles()
    .then(render)
    .then(marking => {
      if (marking == '') {
        Notiflix.Notify.warning(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      clearGalery();
      refs.galleryRef.insertAdjacentHTML('beforeend', marking);
    });
  api.fetchArticles().then(console.log);
}

function clearGalery() {
  refs.galleryRef.innerHTML = '';
}
