const nav = document.getElementById("nav");
const toggleAbt = document.getElementById("toggleAbt");
const abt = document.getElementById("abt");
const clickPorse = document.getElementById("clickPorse");
// console.log(nav.children[0].children);

nav.addEventListener("click", (e) => {
  const allLi = e.target.parentNode.parentNode.children;
  for (let i = 0; i < allLi.length; i++) {
    if (allLi[i] !== e.target.parentNode) {
      allLi[i].classList.remove("activeLink");
    } else {
      allLi[i].classList.add("activeLink");
    }
  }
});

toggleAbt.addEventListener("click", () => {
  abt.classList.toggle("d-block");
  clickPorse.classList.toggle("d-block");
  abt.classList.toggle("d-none");
  clickPorse.classList.toggle("d-none");
});

clickPorse.addEventListener("click", () => {
  abt.classList = "d-none";
  clickPorse.classList = "d-none";
});

/* const dhk = document.getElementById("dhk");
const ctg = document.getElementById("ctg");
const dhkDtl = document.getElementById("dhkDtl");
const ctgDtl = document.getElementById("ctgDtl");

ctg.addEventListener("click", () => {
  dhk.classList = "";
  ctg.classList = "activeTab";
  ctgDtl.classList = "";
  dhkDtl.classList = "d-none";
});
dhk.addEventListener("click", () => {
  dhk.classList = "activeTab";
  ctg.classList = "";
  ctgDtl.classList = "d-none";
  dhkDtl.classList = "";
}); */

const header = document.querySelectorAll(".header")[0];
const details = document.querySelectorAll(".details")[0];

header.addEventListener("click", (e) => {
  const headers = header.children;
  const detail = details.children;
  for (let i = 0; i < headers.length; i++) {
    if (headers[i] === e.target) {
      headers[i].classList = "activeTab";
      detail[i].classList = "";
    } else {
      headers[i].classList = "";
      detail[i].classList = "d-none";
    }
  }
});

const hello = document.getElementsByClassName("hello")[0];
const assalamuoyalaikum =
  document.getElementsByClassName("assalamuoyalaikum")[0];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septembar",
  "October",
  "November",
  "December",
];

const myTime = () => {
  const d = new Date();
  hello.innerHTML =
    d.getDate() + "-" + months[d.getMonth()] + "-" + d.getFullYear();
  assalamuoyalaikum.innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
};
setInterval(myTime, 1000);
