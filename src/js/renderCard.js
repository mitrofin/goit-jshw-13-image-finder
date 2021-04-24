import imageCardTmpl from '../templates/imgCard.hbs';
import appendMarkUp from './appendMarkUp';

export default function renderCard({ hits }) {
  const markUp = imageCardTmpl(hits);
  appendMarkUp(markUp);
}
