let calculator = document.querySelector(".calculator");
let output = document.querySelector("output");

let key = document.createElement("div");
key.classList.add("keys");
calculator.appendChild(key);
"C/*-+123456789=".split("").map((item) => {
  key.insertAdjacentHTML(
    "beforeend",
    `<button value="${item}">${item}</button>`
  );
});
key.addEventListener("click", function (evt) {
  let target = evt.target;
  let num1 = 0;
  let num2 = 0;
  if (target.tagName == "BUTTON") {
    output.textContent += target.textContent;
  }
  if (target.value == "C") {
    output.textContent = "";
  }
  if (target.textContent == "+") {
    // num1 = output.value;

    console.log(num1);
  }
  if (target.textContent == "=") {
    // let res = output.textContent.split("");
    // let res2 = res.pop();
    // res.join("");

    output.textContent = eval(
      output.textContent.substring(output.textContent.length - 1, -1)
    );
  }
});
