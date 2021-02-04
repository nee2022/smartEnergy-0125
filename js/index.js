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

let pageHeight = window.innerHeight;

let ratioPage = pageWidth / pageHeight;

if (ratioPage < 0.6) {
    html.style.fontSize = (20 / 1125) * pageWidth + 'px';
} else {
    html.style.fontSize = (20 / 2436) * pageHeight + 'px';
}

// var mySwiper = new Swiper('.swiper-container', {
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};
