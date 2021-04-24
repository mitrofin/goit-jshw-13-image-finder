import './styles.css';
import '../node_modules/modern-normalize/modern-normalize.css';
/* import imageCardTmpl from './templates/imgCard.hbs'; */
import apiService from './js/apiService';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
/* import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css'; */
import getRefs from './js/getRefs';
import renderCard from './js/renderCard';
import appendMarkUp from './js/appendMarkUp';
import * as showNotify from './js/pnotify';
import openModal from './js/openModal';

const refs = getRefs();
const api = new apiService();

/* api.fetchApi().then(renderCard); */

/* refs.searchForm.img.focus(); */
refs.searchForm.addEventListener('submit', onSearch);
refs.containerList.addEventListener('click', openModal);

function onSearch(event) {
  event.preventDefault();
  api.resetPage();
  api.img = event.target.elements.query.value;
  console.log(event.target.elements.query.value);
  api.fetchApi().then(renderCard);
}
/* console.log(refs.searchForm.elements.query.value); */
/* function openModal(e) {
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.sourse}" width="" height="">
`);
  instance.show();
} */

/* renderCard(); */
