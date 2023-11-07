const stars = document.querySelectorAll(".star");
let userRating = 0;

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        userRating = index + 1;
        updateRating();
    });
});

function updateRating() {
    
    stars.forEach((star, index) => {
        if (index < userRating) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}
