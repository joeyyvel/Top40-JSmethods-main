// start of pop function with input and output data
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  let inputOne = document.getElementById("inputOne").value;
  document.getElementById("myLabel").innerHTML = inputOne;
  myLabel.style.backgroundColor = "red";
  myLabel.style.padding = "3px 5px";
  myLabel.style.borderRadius = "5px";
  myLabel.style.paddingLeft = "50px";
  myLabel.style.paddingRight = "50px";

  if (inputOne === "true") {
    document.getElementById("popResult").innerHTML = 1;
  } else if (inputOne === "false") {
    document.getElementById("popResult").innerHTML = 0;
  } else if (inputOne === "new Date()" || inputOne === "new  Date()") {
    document.getElementById("popResult").innerHTML = Date.now();
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
