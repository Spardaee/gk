let list = document.querySelector('.main .slide-wrapper');
let items = document.querySelectorAll('.main .slide-wrapper .slider');
let dots = document.querySelectorAll('.slide-wrapper .dots li');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval (()=> {next.click()}, 3000);
function reloadSlider() {
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let lastActiveDot = document.querySelector('.slider-m .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})