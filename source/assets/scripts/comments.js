;(() => {
  "use strict";

  const commentsList = document.querySelector(".comments__list");
  const commentsListItems = document.querySelectorAll(".comments__item");
  const commentsPrevButton = document.querySelector(".comments__button--previous");
  const commentsNextButton = document.querySelector(".comments__button--next");
  const commentsPrecent = -((commentsListItems.length - 1) * 100) + "%";
  const commentsCount = document.querySelector(".comments-count");
  var j = 1;

  commentsPrevButton.addEventListener("click", () => {
    console.log(commentsList.style.marginLeft);
    
    if (parseInt(commentsList.style.marginLeft) === 0) {
      console.log(true);
      commentsCountItems.forEach(element => element.classList.remove("comments-count__item--current"));

      commentsCountItems[0].classList.add("comments-count__item--current");
    }

    if (commentsList.style.marginLeft === "" || commentsList.style.marginLeft === "0%") {

      return;
    }

    commentsList.style.marginLeft = parseInt(commentsList.style.marginLeft) + 100 + "%";

    if (commentsList.style.marginLeft !== "0%") {
      commentsCountItems.forEach(element => element.classList.remove("comments-count__item--current"));
    
      var test = Number(commentsList.style.marginLeft.toString().slice(1, 2));
      commentsCountItems[test].classList.add("comments-count__item--current");
    }
  });

  commentsNextButton.addEventListener("click", () => {
    if (commentsList.style.marginLeft === commentsPrecent) {
      return;
    }

    if (commentsList.style.marginLeft === "") {
      commentsList.style.marginLeft = "-100%";

      commentsCountItems.forEach(element => element.classList.remove("comments-count__item--current"));

      commentsCountItems[1].classList.add("comments-count__item--current");

      return;
    }

    commentsList.style.marginLeft = parseInt(commentsList.style.marginLeft) - 100 + "%";

    commentsCountItems.forEach(element => element.classList.remove("comments-count__item--current"));
    
    var test = Number(commentsList.style.marginLeft.toString().slice(1, 2));
    commentsCountItems[test].classList.add("comments-count__item--current");
  });

  for (let i = 0; i < commentsListItems.length; i++) {
    let commentsCountItem = document.createElement("li");
    commentsCountItem.classList.add("comments-count__item");
    commentsCountItem.setAttribute("data-count", j++);
    
    if (i === 0) {
      commentsCountItem.classList.add("comments-count__item--current");
    }

    commentsCount.appendChild(commentsCountItem);
  }

  const commentsCountItems = document.querySelectorAll(".comments-count__item");

  commentsCountItems.forEach(element => element.addEventListener("click", (event) => {
    let item = event.currentTarget;
    commentsCountItems.forEach(element => element.classList.remove("comments-count__item--current"));

    item.classList.add("comments-count__item--current");

    let dataCount = item.getAttribute("data-count");
    commentsList.style.marginLeft = (-(dataCount - 1) * 100) + "%";
  }));
})();