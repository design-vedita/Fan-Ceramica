(function () {
    "use strict";

    $(function(){
        $('.js-slider').slick({
            appendArrows: $('.js-arrows'),
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });

        function tabs() {

            var links = document.getElementsByClassName('js-tab-link'),
                blocks = document.getElementsByClassName('js-tab-block');

                for (var i = 0; i < links.length; i++) {

                    links[i].onclick = function() {

                        var attrLink = this.getAttribute('data-tab');

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

    });

}());