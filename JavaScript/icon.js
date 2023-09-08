const sliderWrapper = document.querySelector('.slider-wrapper');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;

sliderWrapper.addEventListener('mousedown', (event) => {
  isDragging = true;
  startPosition = event.clientX;
  previousTranslate = currentTranslate;
  sliderWrapper.style.cursor = 'grabbing';
});

sliderWrapper.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  const currentPosition = event.clientX;
  const diff = currentPosition - startPosition;
  currentTranslate = previousTranslate + diff;
  setSliderPosition();
});

sliderWrapper.addEventListener('mouseup', () => {
  isDragging = false;
  sliderWrapper.style.cursor = 'grab';
});

sliderWrapper.addEventListener('mouseleave', () => {
  isDragging = false;
  sliderWrapper.style.cursor = 'grab';
});

function setSliderPosition() {
  if (currentTranslate > 0) currentTranslate = 0;
  if (currentTranslate < -(sliderWrapper.clientWidth * (sliderWrapper.children.length - 1))) {
    currentTranslate = -(sliderWrapper.clientWidth * (sliderWrapper.children.length - 1));
  }
  sliderWrapper.style.transform = `translateX(${currentTranslate}px)`;
}
