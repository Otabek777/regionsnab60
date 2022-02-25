$(window).scroll(function(){
    if ( $(this).scrollTop() > 50) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    };
});

document.querySelector('.header__catalog').addEventListener('click', function() {
    this.classList.toggle("active");
    document.querySelector('.black_bg').classList.toggle("active");
    document.querySelector('.catalog_menu').classList.toggle('active');
    document.querySelector('.header').classList.toggle('open');

});
document.querySelector('.black_bg').addEventListener('click', function() {
    this.classList.remove('active');
    document.querySelector('.header__catalog').classList.remove("active");
    document.querySelector('.catalog_menu').classList.remove('active');
    document.querySelector('.header').classList.remove('open');
});


const accordeon = document.querySelectorAll('.catalog_menu__li');
document.querySelector('body').addEventListener('click', function() {
    for(let i = 0; i < accordeon.length; i++) {
        accordeon[i].classList.remove('active');
    }
});

accordeon.forEach(elements => {
    elements.classList.remove('active');
    elements.addEventListener('click', function() {
        if(!elements.classList.contains('active')) {
            accordeon.forEach (elements => {
                elements.classList.remove('active');
            });
        };
        setTimeout(function() {
            elements.classList.toggle('active');
        }, 01);
    });
});

document.querySelector('.header__center .btn').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('active');
    document.querySelector('body').classList.add('hidden');
});

const modalClose = document.querySelectorAll('.modal__close');
for(let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function() {
        document.querySelector('.modal').classList.remove('active');
        document.querySelector('.modal_done').classList.remove('active');
        document.querySelector('body').classList.remove('hidden');
    });
};

const footerH5 = document.querySelectorAll('.footer__box h5')
for(let i = 0; i < footerH5.length; i++) {
    footerH5[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
};