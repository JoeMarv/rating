var rating = document.querySelector('.button')
var submit = document.querySelector('.submit')
var ratingPage = document.querySelector('.rating-state')
var thankPage = document.querySelector('.thank-state')
var num = document.getElementById('selection')
num.textContent = '0'

function myFunction() {
    var change = document.getElementsByClassName('button').value;
    num.textContent = change;
}

submit.addEventListener('click', function() {
    ratingPage.style.display = 'none'
    thankPage.style.display = 'flex'
});
