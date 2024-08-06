// start of pop function with input and output data
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  let inputOne = document.getElementById("inputOne").value;
  document.getElementById("myLabel").innerText = inputOne;
  myLabel.style.backgroundColor = "red";
  myLabel.style.padding = "3px 5px";
  myLabel.style.borderRadius = "5px";
  myLabel.style.paddingLeft = "50px";
  myLabel.style.paddingRight = "50px";

  let num = parseInt(inputOne);
  let ans = num.toPrecision(2);

  document.getElementById("popResult").innerText = ans;
});
//----------------------- drop down button------------------------
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
//-------Close the dropdown if the user clicks outside of it-------
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// let word = "hello world";
// console.log(word.replace(/hello/i, "goodbye"));

let num = 5.56789;
let ans = num.toFixed();

console.log(ans);
