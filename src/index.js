import './styles.css';
import '../node_modules/modern-normalize/modern-normalize.css';
import imageCardTmpl from './templates/imageCard.hbs';
import apiService from './js/apiService';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import getRefs from './js/getrefs';
import appendMarkUp from './js/appendMarkUp';

const refs = getRefs();
const api = new apiService();

api.fetchApi().then(renderCard);

function renderCard({ hits }) {
  const markUp = imageCardTmpl(hits);
  appendMarkUp(markUp);
}

/* const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show(); */
/* renderCard(); */
