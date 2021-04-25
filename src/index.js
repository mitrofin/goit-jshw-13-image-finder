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
import clearPage from './js/clearPage';

const refs = getRefs();
const api = new apiService();

/* api.fetchApi().then(renderCard); */

/* refs.searchForm.img.focus(); */
refs.searchForm.addEventListener('submit', onSearch);
refs.containerList.addEventListener('click', openModal);

async function onSearch(event) {
  event.preventDefault();
  api.resetPage();
  api.img = event.target.elements.query.value;
  if (api.img.length === 0 || !api.img.trim()) {
    clearPage();
    showNotify.ShowInfo();
    return;
  }
  try {
    const onEntry = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && api.img !== '') {
          api.fetchApi().then(renderCard);
        }
      });
    };
    const option = {
      rootMargin: '50px',
    };

    const observer = new IntersectionObserver(onEntry, option);
    observer.observe(refs.pointForDownloadNextImg);
  } catch (error) {
    showNotify.showError();
  }

  /* console.log(event.target.elements.query.value);
  await api.fetchApi().then(renderCard); */
}
/* console.log(refs.searchForm.elements.query.value); */
/* function openModal(e) {
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.sourse}" width="" height="">
`);
  instance.show();
} */

/* renderCard(); */
