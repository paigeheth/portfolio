const hoverBox = document.querySelector('.thumb');
const hoverImage = document.querySelector('.hover-image');
const hoverImage2 = document.querySelector('.hover-image-2');

function showImage() {
  hoverImage.style.display = 'block';
  hoverImage2.style.display = 'block';
  document.addEventListener('mousemove', moveImage);
}

function hideImage() {
  hoverImage.style.display = 'block';
  hoverImage2.style.display = 'block';
  document.removeEventListener('mousemove', moveImage);
}

function moveImage(event) {
  const x = event.clientX - 100;
  const y = event.clientY - 500;
  hoverImage.style.left = (x - hoverImage.width / 2) + 'px';
  hoverImage.style.top = (y - hoverImage.height / 2) + 'px';

  const x2 = event.clientX - 100;
  const y2 = event.clientY - 600;
  hoverImage2.style.left = (x2 - hoverImage2.width / 2) + 'px';
  hoverImage2.style.top = (y2 - hoverImage2.height / 2) + 'px';
}