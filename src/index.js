import './styles.css';
import '../node_modules/modern-normalize/modern-normalize.css';
import apiService from './js/apiService';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import getRefs from './js/getRefs';
import renderCard from './js/renderCard';
import * as showNotify from './js/pnotify';
import openModal from './js/openModal';
import clearPage from './js/clearPage';

const refs = getRefs();
const api = new apiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.containerList.addEventListener('click', openModal);

function onSearch(event) {
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
      rootMargin: '100px',
    };

    const observer = new IntersectionObserver(onEntry, option);
    observer.observe(refs.pointForDownloadNextImg);
  } catch (error) {
    showNotify.showError();
  }
}
