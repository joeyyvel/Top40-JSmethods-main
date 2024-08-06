// start of pop function with input and output data
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  let inputOne = document.getElementById("inputOne").value;
  document.getElementById("myLabel").innerText = inputOne;
  myLabel.style.backgroundColor = "red";
  myLabel.style.padding = "3px 5px";
  myLabel.style.borderRadius = "5px";

  let inputTwo = document.getElementById("inputTwo").value;
  document.getElementById("myLabelOne").innerText = inputTwo;
  myLabelOne.style.backgroundColor = "red";
  myLabelOne.style.padding = "3px 5px";
  myLabelOne.style.borderRadius = "5px";

  let inputThree = document.getElementById("inputThree").value;
  document.getElementById("myLabelTwo").innerText = inputThree;
  myLabelTwo.style.backgroundColor = "yellow";
  myLabelTwo.style.padding = "3px 5px";
  myLabelTwo.style.borderRadius = "5px";

  let inputFour = document.getElementById("inputFour").value;
  document.getElementById("myLabelThree").innerText = inputFour;
  myLabelThree.style.backgroundColor = "yellow";
  myLabelThree.style.padding = "3px 5px";
  myLabelThree.style.borderRadius = "5px";

  let inputFive = document.getElementById("inputFive").value;
  document.getElementById("myLabelFour").innerText = inputFive;
  myLabelFour.style.backgroundColor = "yellow";
  myLabelFour.style.padding = "3px 5px";
  myLabelFour.style.borderRadius = "5px";

  const arr1 = [inputOne, inputTwo];
  const arr2 = [inputThree, inputFour, inputFive];
  const data = arr1.concat(arr2);

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
