const userName = document.querySelector("#name");
const btn = document.querySelector("#btn");
const showtext = document.querySelector("#showtext");
const myForm = document.querySelector("#myForm");

const ul = document.createElement("ul");
ul.id = "myUl";
const myUl = document.getElementById("myUl");
const dataArr = [];

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  dataArr.push(userName.value);
  let li = [];
  dataArr.map((res) => (li += `<li>${res} <button>Del</button></li>`));
  ul.innerHTML = li;
  showtext.appendChild(ul);
  userName.value = null;
});

showtext.addEventListener("click", (e) => {
  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
});
