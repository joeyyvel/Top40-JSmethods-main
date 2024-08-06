// start of push function with input and output data
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  try {
    let inputFour = document.getElementById("inputFour").value;
    document.getElementById("myLabelThree").innerText = inputFour;

    if (
      inputFour === "" ||
      inputFour.length === 0 ||
      Object.keys(data).length === 0
    ) {
      alert(" please enter string, array, or object at the fourth element");
    }
  } catch (data) {
    alert("you entered  " + inputFour.value);
  } finally {
    let inputOne = document.getElementById("inputOne").value;
    document.getElementById("myLabel").innerText = inputOne;

    let inputTwo = document.getElementById("inputTwo").value;
    document.getElementById("myLabelOne").innerText = inputTwo;

    let inputThree = document.getElementById("inputThree").value;
    document.getElementById("myLabelTwo").innerText = inputThree;

    myLabelThree.style.backgroundColor = "red";
    myLabelThree.style.fontSize = "18px";
    myLabelThree.style.fontWeight = "bolder";
    myLabelThree.style.lineHeight = "100%";
    myLabelThree.style.padding = "3px 5px";
    myLabelThree.style.borderRadius = "5px";

    const data = [inputOne, inputTwo, inputThree, inputFour.value];
    data.push();

    document.getElementById("popResult").innerText = data;
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
