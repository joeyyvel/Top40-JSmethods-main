// start of pop function with input and output data
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  let inputOne = document.getElementById("inputOne").value;
  document.getElementById("myLabel").innerHTML = inputOne;

  let inputTwo = document.getElementById("inputTwo").value;
  document.getElementById("myLabelOne").innerHTML = inputTwo;

  let inputThree = document.getElementById("inputThree").value;
  document.getElementById("myLabelTwo").innerHTML = inputThree;

  let data = [inputOne, inputTwo, inputThree];

  function myFunc(total, num) {
    return total - num;
  }

  document.getElementById("popResult").innerText = data.reduce(myFunc);
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
