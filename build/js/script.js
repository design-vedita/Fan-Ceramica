(function () {
    "use strict";

    $(function(){

        // fancybox

        $(".fancybox").fancybox({
            openEffect	: 'none',
            closeEffect	: 'none'
        });

        // ������� � �����
        $('.js-slider-collection').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js-collection-nav'
        });

        $('.js-collection-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.js-slider-collection',
            arrows: true,
            focusOnSelect: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });

        // ������� �������� ���������
        $('.js-slider').slick({
            appendArrows: $('.js-arrows'),
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });

        // ������� ������������

        $('.js-style-slider').slick({
            appendArrows: $('.js-arrow-style'),
            prevArrow: '<button type="button" class="slick-prev-style"></button>',
            nextArrow: '<button type="button" class="slick-next-style"></button>'
        });

        // ������� ������������� ������

        $('.js-tile').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: '<button type="button" class="slick-prev-tile"></button>',
            nextArrow: '<button type="button" class="slick-next-tile"></button>'
        });


        //  ������� ������������� ����

        $('.js-wallpaper').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: '<button type="button" class="slick-prev-wall"></button>',
            nextArrow: '<button type="button" class="slick-next-wall"></button>'
        });

        // ������� ������� ������-�������� ������

        $('.js-tdesign').slick({
            appendArrows: $('.js-tdesign-arrow'),
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="slick-prev-design"></button>',
            nextArrow: '<button type="button" class="slick-next-design"></button>'
        });

        // ������� ������� ������-�������� ����

        $('.js-wdesign').slick({
            appendArrows: $('.js-wdesign-arrow'),
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="slick-prev-wdesign"></button>',
            nextArrow: '<button type="button" class="slick-next-wdesign"></button>'
        });

        // ������� ���������� ������

        $('.js-interior-tale').slick({
            appendArrows: $('.js-intale-arrow'),
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="slick-prev-interior"></button>',
            nextArrow: '<button type="button" class="slick-next-interior"></button>'
        });

        // ������� ���������� ����

        $('.js-interior-wall').slick({
            appendArrows: $('.js-walltale-arrow'),
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="slick-prev-wallinterior"></button>',
            nextArrow: '<button type="button" class="slick-next-wallinterior"></button>'
        });

        // ������� �������

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

        // lazy load �� ����

        $('.js-tab-link').click(function() {

            var $parents = $(this).parents('.tabs'),
                attr = $(this).attr('data-tab'),
                $images = $parents.find('img.js-lazy-tab'),
                $tabblocks = $parents.find('.js-tab-block');

                // ������ ��������� ����� �����, ����� ��� ����������� ������
                // �� ������������� �����������

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

                            var timer = setTimeout(function(){
                                $parent.toggleClass('close--field');
                            }, 300);


                            if($block_data.hasClass('no--visible')) {
                                $block_data.fadeOut('100');
                            } else {
                                $block_data.fadeIn('100');
                            }

                    }
                }

        }

        viewParams();

        // ���������� �����
        function openSearch() {
            var searchLink = document.getElementsByClassName('js-open-search')[0],
                searchBlock = document.getElementsByClassName('js-search-form')[0];

                searchLink.onclick = function() {
                    this.classList.toggle('open--search');
                    searchBlock.classList.toggle('visible--search');
                };

                // ���� �� �� �������� ������ ��� ������ ������ �������� ������ ������
                $(document).on('click', function(e) {

                    if($(e.target).closest(searchBlock).length) return;

                    if (!$(e.target).closest(".js-open-search").length) {
                        $('.js-search-form').removeClass('visible--search');
                    }

                    e.stopPropagation();

                });

        }

        openSearch();

        // ���� � ���������
        function collectionTab() {
            var links = document.getElementsByClassName('js-coll'),
                blocks = document.getElementsByClassName('js-content');

                var i, j, n, k;

                for (i = 0; i < links.length; i++) {

                    links[i].onclick = function(){

                        for (k = 0; k < links.length; k++) {
                            links[k].classList.remove('open--tab');
                        }

                        this.classList.add('open--tab');

                        var param = this.getAttribute('data-tab');

                        for (n = 0; n < blocks.length; n++) {
                            blocks[n].classList.remove('open--tab');
                        }

                        for (j = 0; j < blocks.length; j++) {

                            if( blocks[j].classList.contains(param) ) {
                                blocks[j].classList.add('open--tab');
                            }

                            if (param == 'tab-des' || param == 'tab-int') {

                                if(blocks[j].classList.contains(param)) {
                                    var images = blocks[j].querySelectorAll('img');

                                    if(!blocks[j].classList.contains('lazy-visible')) {
                                        $(images).lazyload({
                                            effect : "fadeIn"
                                        });
                                    }

                                    blocks[j].classList.add('lazy-visible');
                                }


                            }
                        }

                    }
                }
        }

        collectionTab();


        function heightBlocks(el) {
            var blocks = document.getElementsByClassName(el),
                anchor = document.getElementsByClassName('anchor'),
                max = 0,
                maxIndex = 0;

            var i, j, k;

            if(!!anchor) {
                for (i = 0; i < blocks.length; i++) {

                    if (max < blocks[i].offsetHeight ) {
                        maxIndex = i;
                        max = blocks[maxIndex].offsetHeight;
                    }

                }

                if(maxIndex)
                    blocks[maxIndex].classList.add('anchor');


                for (j = 0; j < blocks.length; j++) {
                    if(!blocks[j].classList.contains('anchor')) {
                        blocks[j].style.height = max + 'px';
                    }
                }
            }
        }

        heightBlocks('js-form');

        window.onresize = function(){
            heightBlocks('js-form');
            backTopMenu();
           // backBottomMenu();
        };

        backTopMenu();
     //   backBottomMenu();

        function backTopMenu() {
            var $back = $('.js-dark-menu-back'),
                $menu = $('.js-dark-menu'),
                clientWidth = document.documentElement.clientWidth,
                $menuHeight = $menu.outerHeight();

            (clientWidth <= 1199) ? $back.css({'height':$menuHeight + 'px'}) : $back.css({'height': ''});
        }

        var myburger = new Burgers();
            myburger.topBurger();
            myburger.bottomBurger();
            myburger.openBottomMenu();

        function Burgers() {
            var topB = $('.js-burger-top-menu'),
                topM = $('.js-dark-menu'),
                topD = $('.js-dark-menu-back');

            var bottomB = $('.js-burger-bottom-block'),
                bottomM = $('.js-main-menu'),
                bottomD = $('.js-dark-menu-back-two');

            var arrows = $('.js-arrow');

            return {

                topBurger: function(){

                    topB.on('click', function(){

                        topM.toggleClass('visible');
                        topD.toggleClass('visible');
                    });
                },

                bottomBurger: function(){

                    bottomB.on('click', function(){

                        bottomM.toggleClass('visible');
                        bottomD.toggleClass('visible');
                    });

                },

                openBottomMenu: function() {
                    arrows.on('click', function(){

                        var $parent  = $(this).context.parentNode.parentNode;
                            $($parent)
                                    .toggleClass('active')
                                    .find(' > ul')
                                    .toggle();

                    });
                }
            }
        }

        // �������������� textarea
        var commentArea = document.getElementsByTagName('textarea');

            function autosize() {
                var el = this;
                setTimeout(function(){
                    el.style.cssText = 'height:auto';
                    el.style.cssText = 'height:' + el.scrollHeight + 'px';

                }, 0);
            }

        for (var i = 0; i < commentArea.length; i++) {
            commentArea[i].addEventListener('keydown', autosize);
        }
    });


}());