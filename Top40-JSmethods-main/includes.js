// start of pop function with input and output data
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  let inputOne = document.getElementById("inputOne").value;
  document.getElementById("myLabel").innerHTML = inputOne;

  let inputTwo = document.getElementById("inputTwo").value;
  document.getElementById("myLabelOne").innerHTML = inputTwo;

  let inputThree = document.getElementById("inputThree").value;
  document.getElementById("myLabelTwo").innerHTML = inputThree;

  let inputFour = document.getElementById("inputFour").value;
  document.getElementById("myLabelThree").innerHTML = inputFour;

  let inputFive = document.getElementById("inputFive").value;
  document.getElementById("myLabelFour").innerHTML = inputFive;
  myLabelFour.style.backgroundColor = "yellow";
  myLabelFour.style.padding = "5px 10px";

  let data = [inputOne, inputTwo, inputThree, inputFour];

  if (
    inputOne === inputFive ||
    inputTwo === inputFive ||
    inputThree === inputFive ||
    inputFour === inputFive
  ) {
    document.getElementById("popResult").innerText =
      "the word you type is included in the array";
  } else {
    document.getElementById("popResult").innerText =
      "the word you type is not included in the array";
  }
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

console.log(Number(new Date()));
