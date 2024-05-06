const productContainers = [...document.querySelectorAll('.s-product')];
const nxtBtn = [...document.querySelectorAll('.s-nxt-btn')];
const preBtn = [...document.querySelectorAll('.s-pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width / 2;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

