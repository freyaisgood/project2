jQuery(document).ready(function() {
    //탭메뉴
    var tab_list = $('.tab_menu');
    tab_list.find('li:first').addClass('on');
    var btn = tab_list.find('>ul>li');
    btn.click(function() {
            var tg = $(this);
            btn.removeClass('on');
            tg.addClass('on');
            return false;
            3
        })
        //팝업
    var layer = $('.layer');
    layer.click(function() {
        $('.layer_popup').show();
        $('i').click(function() {
            $('.layer_popup').hide();
        });
        return false;
    });
    var modal = $('.window');
    modal.click(function() {
        $('.modal_popup').show();
        $('.modal_popup').click(function() {
            $('.modal_popup').hide();
        });
        return false;
    })
    $('.lightbox').lightGallery({
        thumbnail: true,
        autoplay: true,
        pause: 3000,
        progressBar: true
    })




});