// document.write("Hello Bangladesh");
const slectMousumiDiv = document.getElementById("mousumi");
const loop = document.getElementById("loop");
const cities = document.getElementById("cities");
const forLoop = document.getElementById("forLoop");
const age = document.getElementById("age");
const useAge = document.getElementById("useAge");
const habibVai = document.getElementById("habibVai");
const dp = document.getElementById("dp");
const city = ["Dhaka", "Bogura", "Joypurhat", "Khulna"];
slectMousumiDiv.innerHTML = city[3];

let x = 1;
let y = 569;
while (x <= 20) {
  loop.innerHTML += y + " x " + x + " = " + x * y + "<br>";
  x++;
}

for (let i = 0; i < 10; i++) {
  forLoop.textContent += i + " ";
}

for (let j = 0; j < city.length; j++) {
  cities.innerHTML += city[j] + " ";
}

const funcName = () => {
  const userAge = parseInt(useAge.value);
  if (!userAge) {
    age.innerHTML = "<span style='color:red'>Invalid age</span>";
  } else {
    if (userAge <= 12 && userAge > 0) {
      age.innerHTML = "You are a baby";
    } else if (userAge < 20 && userAge > 12) {
      age.innerHTML = "You are a teenager";
    } else if (userAge < 30 && userAge >= 20) {
      age.innerHTML = "You are a young person";
    } else if (userAge < 50 && userAge >= 30) {
      age.innerHTML = "You are a middle aged person";
    } else if (userAge >= 50 && userAge < 150) {
      age.innerHTML = "You are a old person";
    } else {
      age.innerHTML = "You are not in this world!";
    }
  }
};

let habiburVai = ["Bangladesh", "Manikgonj", "Male", "Daffodil"];
habiburVai.push("Web Developer");
habiburVai.push("Kisu bujhenai");
habiburVai.pop();
habiburVai.shift();
habiburVai.unshift("Prithibi");
habiburVai.map((res) => {
  habibVai.innerHTML += res + "<button>X</button>";
});

const dpf = (dpa) => {
  alert(dpa);
};

dp.addEventListener("click", () => {
  dpf("hi hi hi");
});
