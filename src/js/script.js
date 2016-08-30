(function () {
    "use strict";

    $(function(){

        // Слайдер в шапке
        $('.js-slider').slick({
            appendArrows: $('.js-arrows'),
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });

        // Слайдер тематический

        $('.js-style-slider').slick({
            appendArrows: $('.js-arrow-style'),
            prevArrow: '<button type="button" class="slick-prev-style"></button>',
            nextArrow: '<button type="button" class="slick-next-style"></button>'
        });

        // Слайдер производители

        $('.js-tile').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: '<button type="button" class="slick-prev-tile"></button>',
            nextArrow: '<button type="button" class="slick-next-tile"></button>'
        });



        $('.js-wallpaper').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: '<button type="button" class="slick-prev-wall"></button>',
            nextArrow: '<button type="button" class="slick-next-wall"></button>'
        });

        $('.js-interior').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="slick-prev-interior"></button>',
            nextArrow: '<button type="button" class="slick-next-interior"></button>'
        });

        // open tabs

        function tabs() {

            var links = document.getElementsByClassName('js-tab-link');

                for (var i = 0; i < links.length; i++) {

                    links[i].onclick = function() {

                        var parentLinks = $(this).parents('.tabs__link'),
                            thisLink = $(parentLinks).find('.js-tab-link');


                        for(var k = 0; k < thisLink.length; k++) {
                            thisLink[k].classList.remove('active');
                        }

                        var attrLink = this.getAttribute('data-tab');
                            this.classList.add('active');


                            var parent = $(this).parents('.tabs'),
                                blocks = $(parent).find('.js-tab-block');


                            for (var n = 0; n < blocks.length; n++) {
                                blocks[n].classList.remove('visible--tab')
                            }

                            for (var j = 0; j < blocks.length; j++) {

                                var attrBlock = blocks[j].getAttribute('data-tab');

                                if (attrBlock == attrLink) {
                                    blocks[j].classList.add('visible--tab');
                                }
                            }
                    }
                }
        }

        tabs();

        // lazy load

        $("img.js-lazy, div.js-lazy").lazyload({
            effect : "fadeIn"
        });

        // Inputmask

        var selector = document.getElementById('phone-quest');

        var el = new Inputmask("+7 (999) - 99 - 99", {'placeholder': '.'});
        el.mask(selector);

    });

}());