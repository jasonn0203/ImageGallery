const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const images = $$(".image__container img");
const imageInner = $(".gallery__content img");
const gallery = $(".gallery");
const btnClose = $(".control.close");
const btnPrev = $(".control.previous");
const btnNext = $(".control.next");

// ---------------4
showImage = () => {
  //Hide previous button when click on first image
  if (currentIndex <= 0) {
    btnPrev.classList.add("hide");
  } else {
    btnPrev.classList.remove("hide");
  }
  //Hide next button when click on last image
  if (currentIndex >= images.length - 1) {
    btnNext.classList.add("hide");
  } else {
    btnNext.classList.remove("hide");
  }
  imageInner.src = images[currentIndex].src;
  gallery.classList.add("show");
};
var currentIndex = 0;
images.forEach((item, index) => {
  item.onclick = () => {
    currentIndex = index;
    showImage();
  };
});

//NOTE nextBtn
btnNext.onclick = () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showImage();
  }
};

//NOTE prevBtn
btnPrev.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showImage();
  }
};
//NOTE Close
btnClose.onclick = () => {
  gallery.classList.remove("show");
};
document.onkeydown = (e) => {
  //REVIEW Listen to keyboard to detect keyCode , in this case 27 is (Esc)
  switch (e.keyCode) {
    case 27:
      gallery.classList.remove("show");
      break;

    case 37:
      btnPrev.onclick();
      break;

    case 39:
      btnNext.onclick();
      break;

    default:
      break;
  }
};
