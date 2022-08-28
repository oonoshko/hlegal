// Variant 1 (via jquery)
$('#popupBtn').click(function () {
    $('#popup').addClass('open');
});

$('.titleWrapper svg').click(function (event) {
    if (event.target = this) {
        $('#popup').removeClass('open')
    }
}
)

// Variant 2 (JavaScript)
// const openPopUp = document.getElementById('popupBtn');
// const closePopUp = document.getElementById('pop_up_close');
// const popUp = document.getElementById('popup');

// openPopUp.addEventListener('click', function (e) {
//     e.preventDefault();
//     popUp.classList.add('open');
// })

// closePopUp.addEventListener('click', () => {
//     popUp.classList.remove('open');
// })