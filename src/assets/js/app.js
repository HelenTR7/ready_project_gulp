// WINDOW WIDTH DETECT
let currentWidth = $(window).width();
$(window).resize(function () {
    currentWidth = $(window).width();
});

const Application = {
    init: function() {
        this.events();
    },
    events: function() {
        !window.reinit && (window.reinit = {});

        //main events
        this.eventList.lazyImgs();
        this.eventList.svgPolifill();
        this.eventList.mask();

        //app events
        this.eventList.header();
        this.eventList.sliders();
        this.eventList.connectedSliders();
        this.eventList.formstyler();
        this.eventList.sticky();

        this.eventList.tabs();
        this.eventList.counter();
        this.eventList.filters();
        this.eventList.filterClassic();
        this.eventList.rangeSlider();
        this.eventList.catalog();
        this.eventList.cart();
        this.eventList.footer();
    },
    eventList: {
        lazyImgs: function(){

            let callback_loaded = function(el) {
                const $img = $(el),
                      $img_wrap = $img.closest('.lazy-img-wrap');
                $img_wrap.addClass('loaded');
            };

            new LazyLoad({
                elements_selector: ".lazy-img",
                threshold: 0,
                callback_loaded: callback_loaded,
            });
        },
        svgPolifill: function () {
            // svg sprites
            svg4everybody && svg4everybody();
        },
        mask: function() {
            $("[type=tel]").inputmask({
                mask: '+7 (999) 99-99-99',
                "clearIncomplete": false,
                "showMaskOnHover": false,
                "showMaskOnFocus": true,
                "clearMaskOnLostFocus": true
            });
        },

        header: function(){
            //mobile
            $('.js-mobile-burger').on('click touch', function () {
                $(this).toggleClass('active');
                $('.js-mobile-nav').toggleClass('active');
            });
            $('.js-mobile-nav .nav__toggle').on('click touch', function () {
                $(this).closest('.has-submenu').toggleClass('open').find('.nav__lvl2-list').slideToggle();
            });
            $('.header-user__head').on('click touch', function () {
                $(this).toggleClass('active');
                $('.header-user__body').toggleClass('active');
            })
            //search
            $('.js-search-toggle').on('click touch', function () {
                if(currentWidth < 1024) {
                    $(this).next().toggleClass('active');
                }
            })
            //header
            let $header = $('.header');
            let maxScrollTop = 53;
            $(window).scroll(function () {

                if(currentWidth > 1023) {

                    if ($(window).scrollTop() > 53) {
                        $header.addClass('is-scroll');
                        $('.main').addClass('fake-header');
                    } else {
                        $header.removeClass('is-scroll');
                        $('.main').removeClass('fake-header');
                    }
                    if (maxScrollTop < $(this).scrollTop()) {
                        maxScrollTop = $(this).scrollTop();
                        $header.removeClass('is-scroll-top');
                    } else {
                        maxScrollTop = $(this).scrollTop();
                        $header.addClass('is-scroll-top');
                    }
                }
            });
        },
        sliders: function(){
            $('.js-swiper-catalog-popular').each(function(i){
                let catPopSwiper = new Swiper($('.js-swiper-catalog-popular .swiper-container')[i], {
                    // Disable preloading of all images
                    preloadImages: false,
                    // Enable lazy loading
                    lazy: {
                        loadPrevNext: true,
                    },
                    loop: true,

                    // Navigation arrows
                    navigation: {
                        nextEl: $('.js-swiper-products .swiper-button-next')[i],
                        prevEl: $('.js-swiper-products .swiper-button-prev')[i],
                    },
                    breakpoints: {
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 'auto',
                        },
                    }
                });
            });
            $('.js-swiper-banner').each(function(i){
                let bannerSwiper = new Swiper($('.js-swiper-banner .swiper-container')[i], {
                    // Disable preloading of all images
                    //preloadImages: false,
                    // Enable lazy loading
                    //lazy: {
                    //    loadPrevNext: true,
                    //},
                    autoplay: {
                        delay: 5000,
                    },
                    loop: true,
                    spaceBetween: 15,

                    // Navigation arrows
                    navigation: {
                        nextEl: $('.js-swiper-banner .swiper-button-next')[i],
                        prevEl: $('.js-swiper-banner .swiper-button-prev')[i],
                    },
                });
            });
            $('.js-swiper-products-sm').each(function(i){
                let productsSwiperSm = new Swiper($('.js-swiper-products-sm .swiper-container')[i], {
                    // Disable preloading of all images
                    preloadImages: false,
                    // Enable lazy loading
                    lazy: {
                        loadPrevNext: true,
                    },
                    loop: true,

                    // Navigation arrows
                    navigation: {
                        nextEl: $('.js-swiper-products-sm .swiper-button-next')[i],
                        prevEl: $('.js-swiper-products-sm .swiper-button-prev')[i],
                    },
                    breakpoints: {
                        0: {
                            lazy: {
                                loadPrevNextAmount: 4,
                            },
                            spaceBetween: 5,
                            slidesPerView: 'auto',
                        },
                        768: {
                            spaceBetween: 5,
                            slidesPerView: 3,
                        },
                        1024: {
                            spaceBetween: 5,
                            slidesPerView: 4,
                        },
                        1310: {
                            spaceBetween: 5,
                            slidesPerView: 4,
                        },
                    }
                });
            });
            $('.js-swiper-products').each(function(i){
                let productsSwiper = new Swiper($('.js-swiper-products .swiper-container')[i], {
                    // Disable preloading of all images
                    preloadImages: false,
                    // Enable lazy loading
                    lazy: {
                        loadPrevNext: true,
                    },
                    loop: true,

                    // Navigation arrows
                    navigation: {
                        nextEl: $('.js-swiper-products .swiper-button-next')[i],
                        prevEl: $('.js-swiper-products .swiper-button-prev')[i],
                    },
                    breakpoints: {
                        0: {
                            lazy: {
                                loadPrevNextAmount: 4,
                            },
                            spaceBetween: 5,
                            slidesPerView: 'auto',
                        },
                        768: {
                            spaceBetween: 5,
                            slidesPerView: 3,
                        },
                        1024: {
                            spaceBetween: 5,
                            slidesPerView: 4,
                        },
                        1310: {
                            spaceBetween: 5,
                            slidesPerView: 5,
                        },
                    }
                });
            });


            $('.js-swiper-brands').each(function(i){
                let brandsSwiper = new Swiper($('.js-swiper-brands .swiper-container')[i], {
                    // Disable preloading of all images
                    preloadImages: false,
                    // Enable lazy loading
                    lazy: {
                        loadPrevNext: true,
                    },
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 15,
                    // Navigation arrows
                    navigation: {
                        nextEl: $('.js-swiper-brands .swiper-button-next')[i],
                        prevEl: $('.js-swiper-brands .swiper-button-prev')[i],
                    },
                });
            });

            window.reinit.recipesSwiper = function () {
                $('.js-swiper-recipes').each(function(i){
                    let recipesSwiper = new Swiper($('.js-swiper-recipes .swiper-container')[i], {
                        // Disable preloading of all images
                        preloadImages: false,
                        // Enable lazy loading
                        lazy: {
                            loadPrevNext: true,
                        },
                        loop: true,
                        observer: true,//update for switch d-none/d-block

                        // Navigation arrows
                        navigation: {
                            nextEl: $('.js-swiper-recipes .swiper-button-next')[i],
                            prevEl: $('.js-swiper-recipes .swiper-button-prev')[i],
                        },
                        breakpoints: {
                            0: {
                                spaceBetween: 15,
                                slidesPerView: "auto",
                            },
                            768: {
                                spaceBetween: 15,
                                slidesPerView: 1,
                            },
                            1024: {
                                spaceBetween: 30,
                                slidesPerView: 2,
                            },
                        }
                    });
                });
            }
            window.reinit.recipesSwiper();

            $('.js-swiper-recipes-sm').each(function(i){
                let recipesSwiper = new Swiper($('.js-swiper-recipes-sm .swiper-container')[i], {
                    // Disable preloading of all images
                    preloadImages: false,
                    // Enable lazy loading
                    lazy: {
                        loadPrevNext: true,
                    },
                    loop: true,
                    observer: true,//update for switch d-none/d-block

                    // Navigation arrows
                    navigation: {
                        nextEl: $('.js-swiper-recipes-sm .swiper-button-next')[i],
                        prevEl: $('.js-swiper-recipes-sm .swiper-button-prev')[i],
                    },
                    breakpoints: {
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 'auto',
                        },
                        768: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                        },
                        1024: {
                            spaceBetween: 20,
                            slidesPerView: 3,
                        },
                        1310: {
                            spaceBetween: 30,
                            slidesPerView: 4,
                        },
                    }
                });
            });

            $('.js-swiper-about').each(function(i){
                let aboutSwiper = new Swiper($('.js-swiper-about .swiper-container')[i], {
                    loop: false,
                    spaceBetween: 10,

                    // Navigation arrows
                    navigation: {
                        nextEl: $('.js-swiper-about .swiper-button-next')[i],
                        prevEl: $('.js-swiper-about .swiper-button-prev')[i],
                    },
                    breakpoints: {
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 'auto',
                        },
                        768: {
                            spaceBetween: 15,
                            slidesPerView: 3,
                        },
                        1024: {
                            spaceBetween: 15,
                            slidesPerView: 4,
                        },
                        1310: {
                            spaceBetween: 15,
                            slidesPerView: 5,
                        },
                    }
                });
            });

            //vendor -> .js-slider-ven-cat-mob < 768px
            //vendor -> .js-slider-ven-pop-mob < 768px
            window.reinit.venCatSwiper = function (){
                $('.js-slider-ven-cat-mob').each(function (i) {
                    let venCatSwiper = new Swiper($('.js-slider-ven-cat-mob .swiper-container')[i], {
                        loop: false,
                        spaceBetween: 10,
                        slidesPerView: 'auto'
                    });
                });
            }
            window.reinit.venPopSwiper = function (){
                $('.js-slider-ven-pop-mob').each(function(i){
                    let productsSwiper = new Swiper($('.js-slider-ven-pop-mob .swiper-container')[i], {
                        loop: true,
                        spaceBetween: 5,
                        slidesPerView: 'auto',
                    });
                });
            }

            if(currentWidth < 768) {
                window.reinit.venCatSwiper();
                window.reinit.venPopSwiper();
            }



        },
        connectedSliders: function(){
            function reportWindowSize() {
                window.addEventListener('resize', function () {
                    return window.innerWidth;
                });
            }
            let swiperThumbs = new Swiper('.js-swiper-thumbs .swiper-container', {
                // Disable preloading of all images
                preloadImages: false,
                // Enable lazy loading
                lazy: {
                    loadPrevNext: true,
                },
                direction: 'vertical',
                spaceBetween: 10,
                slidesPerView: 5,
                navigation: {
                    nextEl: '.th-swiper-button-next',
                    prevEl: '.th-swiper-button-prev',
                },
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                breakpoints: {
                    0: {
                        spaceBetween: 5,
                        slidesPerView: 5,
                    },
                    576: {
                        spaceBetween: 10,
                        slidesPerView: 5,
                    },
                }
            });
            let swiperMain = new Swiper('.js-swiper-main .swiper-container', {
                // Disable preloading of all images
                preloadImages: false,
                // Enable lazy loading
                lazy: {
                    loadPrevNext: true,
                },
                spaceBetween: 15,
                breakpoints: {
                    320: {
                        width: reportWindowSize(),
                    },
                    576: {
                        width: 400,
                    },
                    768: {
                        width: 472,
                    },
                    1024: {
                        width: 295,
                    },
                    1310: {
                        width: 472,
                    },
                },
                thumbs: {
                    swiper: swiperThumbs
                }
            });

        },
        formstyler: function(){
            $('.js-formstyler').styler({
                selectSearch: true,
                selectSearchLimit: 5,
                selectSmartPositioning: false,
            })
        },
        sticky: function(){
            const sticky = new Sticky('.js-sticky', {
                marginTop: 10,
                stickyFor: 1024,
                stickyClass: 'is-sticky',
                stickyContainer: '.js-sticky-wrap',
            });
        },


        tabs: function () {
            let $titles = $('.js-tabs-titles li'),
                $bodies = $('.js-tabs-items > div');
            $titles.on('click touch', function () {
                let $thisBody = $(this).closest('.js-tabs');
                $titles.removeClass('active');
                let $this = $(this);
                $this.addClass('active');
                let $index = $this.index();
                $thisBody.find('.js-tabs-items > div').removeClass('active');
                $thisBody.find('.js-tabs-items > div').eq($index).addClass('active');

                //product page ->
                window.reinit.recipesSwiper();
            });
        },
        counter: function(){
            let offCounterMinus = function($input) {
                var $counterMinus = $input.siblings('.js-counter-minus');
                $counterMinus.prop('disabled', true)
            };
            let onCounterMinus = function($input) {
                var $counterMinus = $input.siblings('.js-counter-minus');
                $counterMinus.prop('disabled', false)
            };
            let offCounterPlus = function($input) {
                var $counterPlus = $input.siblings('.js-counter-plus');
                $counterPlus.prop('disabled', true)
            };
            let onCounterPlus = function($input) {
                var $counterPlus = $input.siblings('.js-counter-plus');
                $counterPlus.prop('disabled', false)
            };

            let uploadCounterBtnState = function($input) {
                var $counterInput = $input;
                var counterValueMax = parseInt($counterInput.attr('data-max-value'));
                var counterValueMin = parseInt($counterInput.attr('data-min-value'));

                if (parseInt($counterInput.val()) === counterValueMin) {
                    offCounterMinus($counterInput)
                } else {
                    onCounterMinus($counterInput)
                }
                if (parseInt($counterInput.val())=== counterValueMax) {
                    offCounterPlus($counterInput)
                } else {
                    onCounterPlus($counterInput)
                }
            };
            let handlerCounterFocus = function () {
                var $counterInput = $(this);
                $counterInput.val(parseInt($counterInput.val()))
            };
            let handlerCounterBlur = function () {
                var $this = $(this);
                var counterValue = parseInt($this.val());
                setCounterValue($this, counterValue);
            };
            let handlerCounterChange = function () {
                var $counterInput = $(this);
                var counterValueNext = parseInt($counterInput.val());
                setCounterValue($counterInput, counterValueNext);
            };

            let handlerCounterMinus = function () {
                var $this = $(this);
                var $counterInput = $this.siblings('.js-counter-input');
                var counterValue = parseInt($counterInput.val());
                setCounterValue($counterInput, --counterValue);
                $counterInput.trigger('change');
            };
            let handlerCounterPlus = function () {
                var $this = $(this);
                var $counterInput = $this.siblings('.js-counter-input');
                var counterValue = parseInt($counterInput.val());
                setCounterValue($counterInput, ++counterValue);
                $counterInput.trigger('change');
            };

            let setCounterValue = function ($input, value) {
                var $counterInput = $input;
                var counterValueNext = value;
                var counterValueMax = parseInt($counterInput.attr('data-max-value'));
                var counterValueMin = parseInt($counterInput.attr('data-min-value'));
                var counterValueSuffix = $counterInput.attr('data-suffix');

                if (!isNaN(counterValueMax) && counterValueNext > counterValueMax) {
                    $counterInput.val(counterValueMax);
                    $counterInput.trigger('counter-value-max', [$counterInput, $counterInput.val()]);
                } else if (!isNaN(counterValueMin) && counterValueNext < counterValueMin) {
                    $counterInput.val(counterValueMin);
                    $counterInput.trigger('counter-value-min', [$counterInput, $counterInput.val()]);
                } else if (isNaN(counterValueNext)) {
                    $counterInput.val(0);
                } else {
                    $counterInput.val(counterValueNext);
                }

                uploadCounterBtnState($counterInput);

                $counterInput.trigger('counter-change', [$counterInput, $counterInput.val()]);
                counterValueSuffix && $counterInput.val($counterInput.val() + counterValueSuffix);
            };

            $(document).on('click', '.js-counter-minus', handlerCounterMinus);
            $(document).on('click', '.js-counter-plus', handlerCounterPlus);
            $(document).on('focus', '.js-counter-input', handlerCounterFocus);
            $(document).on('blur', '.js-counter-input', handlerCounterBlur);
            $(document).on('change', '.js-counter-input', handlerCounterChange);

            $('.js-counter-input').each(function(i,el) {
                uploadCounterBtnState($(el));
            })
        },
        filters: function(){
            $('.js-clear-block').on('click touch',function () {
                $(this).closest('.filter-block').find('.filter-block__fields input').prop('checked', false);
            });
            $('.js-close-filters').on('click touch', function () {
                $('.js-mobile-filters').removeClass('active');
                $('body').removeClass('fixed');
            });
            $('.js-open-filters').on('click touch', function () {
                $('.js-mobile-filters').addClass('active');
                $('body').addClass('fixed');
            });
            $('.js-sort-title').on('click touch', function () {
                if(currentWidth < 768) {
                    $('.js-sort-body').slideToggle();
                }
            });
            $('.js-sort-body a').on('click touch', function () {
                if(currentWidth < 768) {
                    $('.js-active').html($(this).html());
                    $('.js-sort-body').slideUp();
                }
            })
        },
        filterClassic: function(){

            $('.filters-form--classic .filter-block__title').on('click touch', function () {
                let _this = $(this);
                if(_this.hasClass('active')) {
                    _this.next().slideUp();
                    _this.removeClass('active');
                } else {
                    _this.next().slideDown();
                    _this.addClass('active');
                }

            })
        },
        rangeSlider: function(){
            var $range = $(".js-range-slider"),
                $inputFrom = $(".js-range-from"),
                $inputTo = $(".js-range-to"),
                instance,
                min = 0,
                max = 1000,
                from = 0,
                to = 0;

            $range.ionRangeSlider({
                skin: "round",
                type: "double",
                min: min,
                max: max,
                from: 0,
                to: 10000,
                hide_min_max: true,
                hide_from_to: true,
                onStart: updateInputs,
                onChange: updateInputs
            });
            instance = $range.data("ionRangeSlider");

            function updateInputs (data) {
                from = data.from;
                to = data.to;

                $inputFrom.prop("value", from);
                $inputTo.prop("value", to);
            }

            $inputFrom.on("input", function () {
                var val = $(this).prop("value");

                // validate
                if (val < min) {
                    val = min;
                } else if (val > to) {
                    val = to;
                }

                instance.update({
                    from: val
                });
            });

            $inputTo.on("input", function () {
                var val = $(this).prop("value");

                // validate
                if (val < from) {
                    val = from;
                } else if (val > max) {
                    val = max;
                }

                instance.update({
                    to: val
                });
            });
        },
        catalog: function(){
            $('.catalog-item__title').on('click touch', function () {
                if(currentWidth < 768){
                    $(this).toggleClass('active');
                    $(this).next().slideToggle();
                }
            });
            $('.js-list-view').on('click touch', function () {
                if(currentWidth > 767) {
                    if(!($(this).hasClass('active'))){
                        $(this).addClass('active');
                        $('.js-grid-view').removeClass('active');
                        $('.js-view-box').addClass('category__items--list');
                        $('.product-item').addClass('product-item--list');
                    }
                } else {
                    $(this).removeClass('active');
                    $('.js-grid-view').addClass('active');
                    $('.js-view-box').removeClass('category__items--list');
                    $('.product-item').removeClass('product-item--list');
                }

            });
            $('.js-grid-view').on('click touch', function () {
                if(currentWidth > 767) {
                    if(!($(this).hasClass('active'))){
                        $(this).addClass('active');
                        $('.js-list-view').removeClass('active');
                        $('.js-view-box').removeClass('category__items--list');
                        $('.product-item').removeClass('product-item--list');
                    }
                } else {
                    $(this).removeClass('active');
                    $('.js-list-view').addClass('active');
                    $('.js-view-box').addClass('category__items--list');
                    $('.product-item').addClass('product-item--list');
                }
            });

        },
        cart: function () {
            let cartAction = $('.js-cart-item-action');
            cartAction.on('click touch', '.remove', function () {
                let _this = $(this),
                    thisItem = _this.closest('.cart-item');
                thisItem.addClass('cart-item--disabled');
            });
            cartAction.on('click touch', '.return', function () {
                let _this = $(this),
                    thisItem = _this.closest('.cart-item');
                thisItem.removeClass('cart-item--disabled');
            })
        },
        footer: function(){
            let $title = $('.js-toggle-title');
            $title.on('click touch', function () {
                $(this).toggleClass('active').next().slideToggle();

                //product page ->
                window.reinit.recipesSwiper();
            });
        },
    }
};
$(function () {
    'use strict';
    Application.init();
});
