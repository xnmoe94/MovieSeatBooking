const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieselect = document.getElementById("movie");

let ticketprice = +movieselect.value;

populateUI();

function setMovieData(movieIndex, MoviePrice) {
    localStorage.setItem('selectMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', MoviePrice);


}

function UpdateSelectedCounts() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectSeatsCount = selectedSeats.length;

    const seatsIndex = [...selectedSeats].map((seat) => {
        return [...seats].indexOf(seat);
    });


    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const selectedSeatsCount = selectSeatsCount.length;


    count.innerHTML = selectSeatsCount;

    total.innerHTML = selectSeatsCount * ticketprice;
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }


    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieselect.selectedIndex = selectedMovieIndex;
    }

}

movieselect.addEventListener('change', e => {
    ticketprice = +e.target.value;
    setMovieDate(target.selectedIndex, e.target.value);
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

//Intial Count and Total 

UpdateSelectedCounts();