// function heart likes, counting people likes the page.
let heart = document.getElementById("myID");
let likesID = document.getElementById("likesID");
//function counting likes from the users
function counting() {
  let count = 0;
  function truncate() {
    count++;
    console.log(count);
    likesID.innerHTML = count;
  }
  return { truncate };
}
// creating objects to call the inner function
let obj = counting();
obj.truncate();
obj.truncate();

function funcLikes() {
  obj.truncate();
}
