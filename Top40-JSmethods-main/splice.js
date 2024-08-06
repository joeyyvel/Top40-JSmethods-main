// start of pop function with input and output data
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  let inputOne = document.getElementById("inputOne").value;
  document.getElementById("myLabel").innerText = inputOne;

  let inputTwo = document.getElementById("inputTwo").value;
  document.getElementById("myLabelOne").innerText = inputTwo;

  let inputThree = document.getElementById("inputThree").value;
  document.getElementById("myLabelTwo").innerText = inputThree;
  myLabelTwo.style.backgroundColor = "red";
  myLabelTwo.style.padding = "3px 5px";
  myLabelTwo.style.borderRadius = "5px";

  let inputFour = document.getElementById("inputFour").value;
  document.getElementById("myLabelThree").innerText = inputFour;
  myLabelThree.style.backgroundColor = "yellow";
  myLabelThree.style.padding = "3px 5px";
  myLabelThree.style.borderRadius = "5px";

  let inputFive = document.getElementById("inputFive").value;
  document.getElementById("myLabelFour").innerText = inputFive;

  let inputSix = document.getElementById("inputSix").value;
  document.getElementById("myLabelFive").innerText = inputSix;

  const data = [inputOne, inputTwo, inputThree, inputFour, inputFive];
  data.splice(2, 0, inputThree, inputFour);

  document.getElementById("popResult").innerText = data;
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
