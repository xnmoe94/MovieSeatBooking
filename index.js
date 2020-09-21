const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieselect = document.getElementById("movie");

let ticketprice = +movieselect.value;

function UpdateSelectedCounts() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectSeatsCount = selectedSeats.length;

    count.innerHTML = selectSeatsCount;

    total.innerHTML = selectSeatsCount * ticketprice;
}


movieselect.addEventListener('change', e => {
    ticketprice = +e.target.value;
    UpdateSelectedCounts();

})
container.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("occupied")
    ) {
        e.target.classList.toggle("selected");

        UpdateSelectedCounts();
    }
});