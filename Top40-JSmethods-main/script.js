let heart = document.getElementsByClassName("fa-heart-circle-plus");
let likesID = document.getElementById("likesID");

function funcLikes() {
  let val = 0;

  function inner() {
    val++;
    likesID.innerText = val;
  }
  inner();
}
