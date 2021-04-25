import imageCardTmpl from '../templates/imgCard.hbs';
import appendMarkUp from './appendMarkUp';
import * as showNotify from '../js/pnotify';
import clearResult from '../js/clearResult';

export default function renderCard({ hits }) {
  if (hits.length === 0) {
    showNotify.showError();
    clearResult();
  }
  const markUp = imageCardTmpl(hits);
  appendMarkUp(markUp);
}
