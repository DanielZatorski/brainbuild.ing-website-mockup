document.getElementById("year").textContent = new Date().getFullYear()


const card = document.querySelector('.card__inner');

card.addEventListener('click', function () {

  card.classList.toggle('is-flipped')
});