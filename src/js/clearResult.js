import getRefs from './getRefs';

const refs = getRefs();

export default function clearResult() {
  refs.searchInput.value = '';
}
