export default function render(responce) {
  data = responce.data.hits;
  // console.log(data);
  return data
    .map(elem => {
      return `
<div class="photo-card">
  <img src="${elem.previewURL}" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b> <span>:<br> ${elem.likes}</span>
    </p>
    <p class="info-item">
      <b>Views</b> <span>:<br> ${elem.views}</span>
    </p>
    <p class="info-item">
      <b>Comments</b><span>:<br> ${elem.comments}</span>
    </p>
    <p class="info-item">
      <b>Downloads</b><span>:<br> ${elem.downloads}</span>
    </p>
  </div>
</div>`;
    })
    .join('');
}
