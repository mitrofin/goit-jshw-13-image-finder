const refs = getRefs();

export default function intersectionObserver() {
  const onEntry = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && api.img !== '') {
        api.fetchApi().then(renderCard);
      }
    });
  };
  const option = {
    rootMargin: '200px',
  };

  const observer = new IntersectionObserver(onEntry, option);

  observer.observe(refs.pointForDownloadNextImages);
}
