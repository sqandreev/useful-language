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
    if (commentsList.style.marginLeft === "" || commentsList.style.marginLeft === "0%") {
      return;
    }

    commentsList.style.marginLeft = parseInt(commentsList.style.marginLeft) + 100 + "%";
  });

  commentsNextButton.addEventListener("click", () => {
    if (commentsList.style.marginLeft === commentsPrecent) {
      return;
    }

    if (commentsList.style.marginLeft === "") {
      commentsList.style.marginLeft = "-100%";

      return;
    }
    commentsList.style.marginLeft = parseInt(commentsList.style.marginLeft) - 100 + "%";
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