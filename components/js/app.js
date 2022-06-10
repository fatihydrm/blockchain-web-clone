const bigCard1 = document.querySelectorAll("#bigCard1 ul li");
const bigCard1Img = document.querySelectorAll("#bigCard1 .right img");

const bigCard2 = document.querySelectorAll("#bigCard2 ul li");
const bigCard2Img = document.querySelectorAll("#bigCard2 .right img");

function clearClassList1() {
  for (let i = 0; i < bigCard1.length; i++) {
    bigCard1[i].classList.remove("active");
    bigCard1Img[i].classList.remove("active");
  }
}

bigCard1.forEach((e, i) => {
  e.addEventListener("click", () => {
    clearClassList1();
    e.classList.add("active");
    console.log(bigCard1Img[i]);
    bigCard1Img[i].classList.add("active");
  });
});


function clearClassList2() {
  for (let i = 0; i < bigCard2.length; i++) {
    bigCard2[i].classList.remove("active");
    bigCard2Img[i].classList.remove("active");
  }
}

bigCard2.forEach((e, i) => {
  e.addEventListener("click", () => {
    clearClassList2();
    e.classList.add("active");
    console.log(bigCard2Img[i]);
    bigCard2Img[i].classList.add("active");
  });
});
