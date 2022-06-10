const bigCard1 = document.querySelectorAll("#bigCard1 ul li");
const bigCard1Img = document.querySelectorAll("#bigCard1 .right img");
const bigCard2 = document.querySelectorAll("#bigCard2 ul li");
const bigCard2Img = document.querySelectorAll("#bigCard2 .right img");
const bigCard4 = document.querySelectorAll("#bigCard4 ul li");
const bigCard4Img = document.querySelectorAll("#bigCard4 .right img");

bigCard1.forEach((e, i) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < bigCard1.length; i++) {
      bigCard1[i].classList.remove("active");
      bigCard1Img[i].classList.remove("active");
    }
    e.classList.add("active");
    bigCard1Img[i].classList.add("active");
  });
});

bigCard2.forEach((e, i) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < bigCard2.length; i++) {
      bigCard2[i].classList.remove("active");
      bigCard2Img[i].classList.remove("active");
    }
    e.classList.add("active");
    bigCard2Img[i].classList.add("active");
    console.log(bigCard2Img);
  });
});

bigCard4.forEach((e, i) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < bigCard4.length; i++) {
      bigCard4[i].classList.remove("active");
      bigCard4Img[i].classList.remove("active");
    }
    e.classList.add("active");
    bigCard4Img[i].classList.add("active");
  });
});
