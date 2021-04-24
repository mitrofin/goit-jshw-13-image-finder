import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

export default function openModal(e) {
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.sourse}" width="" height="">
`);
  instance.show();
}
