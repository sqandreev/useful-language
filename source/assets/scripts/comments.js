;(() => {
  "use strict";

  const commentsList = document.querySelector(".comments__list");
  const commentsListItems = document.querySelectorAll(".comments__item");
  const commentsPrevButton = document.querySelector(".comments__button--previous");
  const commentsNextButton = document.querySelector(".comments__button--next");
  const commentsPrecent = -((commentsListItems.length - 1) * 100) + "%";

  commentsPrevButton.addEventListener("click", () => {
    if (!(commentsList.style.marginLeft === commentsPrecent)) {
      commentsNextButton.disabled = false;
    }

    if (commentsList.style.marginLeft === "" || commentsList.style.marginLeft === "0%") {
      commentsPrevButton.disabled = true;

      return;
    }

    commentsList.style.marginLeft = parseInt(commentsList.style.marginLeft) + 100 + "%";
  });

  commentsNextButton.addEventListener("click", () => {
    if (commentsList.style.marginLeft === commentsPrecent) {
      commentsNextButton.disabled = true;

      return;
    }

    if (commentsList.style.marginLeft === "") {
      commentsPrevButton.disabled = false;
      commentsList.style.marginLeft = "-100%";

      return;
    }
    commentsList.style.marginLeft = parseInt(commentsList.style.marginLeft) - 100 + "%";
  });
})();