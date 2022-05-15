var rating1 = document.getElementById('button1')
var rating2 = document.getElementById('button2')
var rating3 = document.getElementById('button3')
var rating4 = document.getElementById('button4')
var rating5 = document.getElementById('button5')

var submit = document.querySelector('.submit')
var ratingPage = document.querySelector('.rating-state')
var thankPage = document.querySelector('.thank-state')

var num = document.getElementById('selection')
num.textContent = '0'

rating1.addEventListener('click', function() {
    var change1 = rating1.value;
    num.textContent = change1;
})

rating2.addEventListener('click', function() {
    var change2 = rating2.value;
    num.textContent = change2;
})

rating3.addEventListener('click', function() {
    var change3 = rating3.value;
    num.textContent = change3;
})

rating4.addEventListener('click', function() {
    var change4 = rating4.value;
    num.textContent = change4;
})

rating5.addEventListener('click', function() {
    var change5 = rating5.value;
    num.textContent = change5;
})


submit.addEventListener('click', function() {
    ratingPage.style.display = 'none'
    thankPage.style.display = 'flex'
});

console.log(rating5.value)