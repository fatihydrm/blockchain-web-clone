const bigCard1 = document.querySelectorAll("#bigCard1 ul li");
const bigCard1Img = document.querySelectorAll("#bigCard1 .right img");

console.log(bigCard1Img);

function clearClassList() {
  for (let i = 0; i < bigCard1.length; i++) {
    bigCard1[i].classList.remove("active");
    bigCard1Img[i].classList.remove("active");
  }
}

bigCard1.forEach((e, i) => {
  e.addEventListener("click", () => {
    clearClassList();
    e.classList.add("active");
    console.log(bigCard1Img[i]);
    bigCard1Img[i].classList.add("active");
  });
});
