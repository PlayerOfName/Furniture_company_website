const swiper = new Swiper('.text-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        clickable: true,
        // Динамические буллеты
        dynamicBullets: true,
    },
    // Изменение курсора на слайдере
    //grabCursor: true,
    // Управление клавиатурой
    keyboard: {
        // Включить/выключить
        enabled: true,
        // Включить/выключить
        //только когда слайдер
        //в пределах вьюпорта
        OnlyInViewport: true,
        // Включить/выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },

    // autoHeight (Авто высота)
    //autoHeight: true,

    //Отступ между слайдами
    //spaceBetween: 30,

    // Активный слайд по центру
    // centeredSlides: true,

    //Автопрокрутка
    autoplay: {
        // Пауза между прокруткой
        delay: 5000,
        // Закончить на последнем слайде
        stopOnLastSlide: true,
        // Отключить после ручного переключения
        disableOnInteraction: false,
    },

    // Скорость
    speed: 500,

    // Эффект переключения слайдов
    // Переворот
    //effect: 'flip',

    // Дополнения к flip
    //flipEffect: {
    // Тень
    //slideShadows: true,
    // Показ только активного слайда
    //limitRotation: true,
    //},
    // адаптив
    // Ширина экрана
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1,
        },
    },

    // Бесконечный slider
    loop: true,

});

const swiper1 = new Swiper('.image-slider', {
    // Arrow
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        clickable: true,
        // Динамические буллеты
        dynamicBullets: true,
    },
    keyboard: {
        // Включить/выключить
        enabled: true,
        // Включить/выключить
        //только когда слайдер
        //в пределах вьюпорта
        OnlyInViewport: true,
        // Включить/выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },
    spaceBetween: 10,
    // autoHeight (Авто высота)
    // autoHeight: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1,
        },
    },
    grabCursor: true,
});

const swiper2 = new Swiper('.image-slider_2', {
    // Arrow
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 10,
    // autoHeight (Авто высота)
    // autoHeight: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
    grabCursor: true,
    slidesPerView: 3,
    // slidesPerGroup: 0,
    keyboard: {
        // Включить/выключить
        enabled: true,
        // Включить/выключить
        //только когда слайдер
        //в пределах вьюпорта
        OnlyInViewport: true,
        // Включить/выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },
    effect: 'coverflow',

    //Дополнения
    coverflowEffect: {
        // Угол
        rotate: 20,
        // Наложение
        stretch: 50,
        // Тень
        slideShadows: true,
    },
    loop: true,
    freeMode: true,

});