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

        // Слайдер производители плитка

        $('.js-tile').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: '<button type="button" class="slick-prev-tile"></button>',
            nextArrow: '<button type="button" class="slick-next-tile"></button>'
        });


        //  слайдер производители обои

        $('.js-wallpaper').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: '<button type="button" class="slick-prev-wall"></button>',
            nextArrow: '<button type="button" class="slick-next-wall"></button>'
        });

        // слайдер каталог дизайн-проектов плитка

        $('.js-tdesign').slick({
            appendArrows: $('.js-tdesign-arrow'),
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="slick-prev-design"></button>',
            nextArrow: '<button type="button" class="slick-next-design"></button>'
        });

        // слайдер каталог дизайн-проектов обои

        $('.js-wdesign').slick({
            appendArrows: $('.js-wdesign-arrow'),
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="slick-prev-wdesign"></button>',
            nextArrow: '<button type="button" class="slick-next-wdesign"></button>'
        });

        // слайдер интерьеров плитка

        $('.js-interior-tale').slick({
            appendArrows: $('.js-intale-arrow'),
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="slick-prev-interior"></button>',
            nextArrow: '<button type="button" class="slick-next-interior"></button>'
        });

        // слайдер интерьеров обои

        $('.js-interior-wall').slick({
            appendArrows: $('.js-walltale-arrow'),
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="slick-prev-wallinterior"></button>',
            nextArrow: '<button type="button" class="slick-next-wallinterior"></button>'
        });

        // слайдер отзывов

        $('.js-reviews-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev-review"></button>',
            nextArrow: '<button type="button" class="slick-next-review"></button>'
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

        // lazy load на табы

        $('.js-tab-link').click(function() {

            var $parents = $(this).parents('.tabs'),
                attr = $(this).attr('data-tab'),
                $images = $parents.find('img.js-lazy-tab'),
                $tabblocks = $parents.find('.js-tab-block');

                // ставим активному блоку класс, чтобы при последующих кликах
                // не перезагружать изображения

                if(!$tabblocks.hasClass('lazy-visible')) {
                    $($images).lazyload({
                        effect : "fadeIn"
                    });
                }

                $($tabblocks).each(function(){

                    if($(this).attr('data-tab') == attr) {
                        $(this).addClass('lazy-visible');
                    }
                });


        });

        // Inputmask

        var selector = document.getElementById('phone-quest');

        if(selector) {
            var el = new Inputmask("+7 (999) - 99 - 99", {'placeholder': '.'});
            el.mask(selector);
        }

        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 100000,
            values: [ 10000, 45500 ],
            slide: function( event, ui ) {
                $('.js-from').val(ui.values[ 0 ]);
                $('.js-to').val(ui.values[ 1 ]);
            }
        });

        $('.js-from').val($( "#slider-range" ).slider( "values", 0 ));

        $('.js-to').val($( "#slider-range" ).slider( "values", 1 ));

        $('.js-checkbox').checkboxradio();

        function viewParams() {
            var arrows = document.getElementsByClassName('js-arrow-filter');

                for (var i = 0; i < arrows.length; i++) {

                    arrows[i].onclick = function() {

                        this.classList.toggle('open--data');

                        var $parent = $(this).parents('fieldset'),
                            $block_data = $($parent).find('.js-data');

                            $block_data.toggleClass('no--visible');

                            if($block_data.hasClass('no--visible')) {
                                $block_data.fadeOut('100');
                            } else {
                                $block_data.fadeIn('100');
                            }

                    }
                }

        }

        viewParams();

    });


}());