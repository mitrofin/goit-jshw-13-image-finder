import './styles.css';
import '../node_modules/modern-normalize/modern-normalize.css';
import imageCardTmpl from './templates/imageCard.hbs';
import apiService from './js/apiService';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import getRefs from './js/getRefs';
import appendMarkUp from './js/appendMarkUp';

const refs = getRefs();
const api = new apiService();

/* api.fetchApi().then(renderCard); */

function renderCard({ hits }) {
  const markUp = imageCardTmpl(hits);
  appendMarkUp(markUp);
}
/* refs.searchForm.img.focus(); */
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  api.resetPage();
  api.img = event.target.elements.query.value;
  console.log(event.target.elements.query.value);
  api.fetchApi().then(renderCard);
}

/* const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show(); */
/* renderCard(); */
