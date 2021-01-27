var num = 1 / window.devicePixelRatio;

document.write(
    '<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' +
        num +
        ',minimum-scale=' +
        num +
        ',maximum-scale=' +
        num +
        '" />'
);
var html = document.getElementsByTagName('html')[0];
let pageWidth = window.innerWidth;
html.style.fontSize = (20 / 1125) * pageWidth + 'px';

var mySwiper = new Swiper('.swiper-container', {
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
