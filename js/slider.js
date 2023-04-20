const prevBtn = document.querySelector('[data-action = "prev"]');
const nextBtn = document.querySelector('[data-action= "next"]');
const valueElem = document.querySelector('.photo');

const slider = {
    value: 0,
    next() {
      this.value += 1
  },
  prev() {
    this.value -= 1;
  }
};

nextBtn.addEventListener('click', function () {
  slider.next();
  valueElem.textContent = slider.value;
});

prevBtn.addEventListener('click', function () {
  slider.prev();
  valueElem.textContent = slider.value;
});
