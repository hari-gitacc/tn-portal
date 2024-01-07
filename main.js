
let stars = document.querySelectorAll(".cursor-pointer");
let msg = document.querySelector(".ratingmsg");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    let currentStar = index + 1;

    stars.forEach((star, i) => {
      star.innerHTML = i < currentStar ? "&#9733;" : "&#9734;";
    });

    msg.innerHTML = `thanks for your ratings!`;
  });
});
