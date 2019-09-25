;(() => {
  "use strict";

  const commentsList = document.querySelector(".comments__list");
  const commentsListItems = document.querySelectorAll(".comments__item");
  const commentsPrevButton = document.querySelector(".comments__button--previous");
  const commentsNextButton = document.querySelector(".comments__button--next");
  const commentsPrecent = -((commentsListItems.length - 1) * 100) + "%";

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
})();