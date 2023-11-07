var productContainers = [...document.querySelectorAll('.scroll_box')];

var nxtBtn = [...document.querySelectorAll('.nxt-btn')];
var preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth-1160;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth-1160;
    })
})