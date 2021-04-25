export default function getRefs() {
  return {
    searchForm: document.querySelector('.search-form'),
    searchInput: document.querySelector('.search-input'),
    containerList: document.querySelector('.gallery'),
    clickButton: document.getElementById('button'),
    pointForDownloadNextImg: document.getElementById('dowmload-next-imeges'),
  };
}
