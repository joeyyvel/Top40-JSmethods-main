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

//----------- creating objects to call the inner function
let obj = counting();
obj.truncate();
obj.truncate();

function funcLikes() {
  obj.truncate();
}

//----------- save icon by the user's count-----------
function functionShow() {
  let popup = document.getElementById("myPopup");
  popup.classList.add("show");
}

function functionHide() {
  let popup = document.getElementById("myPopup");
  popup.classList.remove("show");
}

//-----------------------------comments section-----------

let commentsID = document.getElementById("commentsID");

//function for counting user comments

function commenting() {
  let count = 0;
  function commentClosure() {
    count++;
    console.log(count);
    commentsID.innerHTML = count;
  }

  return { commentClosure };
}

let commentObject = commenting();
commentObject.commentClosure();
commentObject.commentClosure();

function functionCommentCount() {
  commentObject.commentClosure();
}

//-------------show and hide popup comment----------------
function functionShowCommentResult() {
  let showPop = document.getElementById("myPopTwo");
  showPop.classList.add("showComment");
}

function functionHideComment() {
  let hidePop = document.getElementById("myPopTwo");
  hidePop.classList.remove("showComment");
}
