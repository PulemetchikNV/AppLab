$(document).ready(function(){

    //fixed header
    let header = $('.header')
    let intro = $('.intro')
    let introH;
    let scrollPos = $(window).scrollTop()
    $(window).on('scroll load resize', function(){
        introH = intro.innerHeight() - 300;
        scrollPos = $(this).scrollTop()

        if(scrollPos > introH){
            header.addClass('fixed')
        } else{
            header.removeClass('fixed')
        }
    })

    //скролинг
    $('.header__menu a').click(function(){
        var idName =  $(this).attr('id')
        var className = '.' + idName
       
        var pos = $(className).position();
        $('html, body').animate({
            scrollTop : pos.top
        }, 700)
    })


    //гармонь
    $('.FAQ__item:first').addClass('active')
    $('.FAQ__plus').click(function(){
        $(this).prev('.FAQ__item_content').children('.FAQ__item_suptitle').slideToggle()
        $('.FAQ__item.active').children('.FAQ__item_content').children('.FAQ__item_suptitle').slideUp()
        $(this).parents('.FAQ__item').addClass('active')
        $(this).parents('.FAQ__item').siblings('.FAQ__item.active').removeClass('active')



    })

    //слидер
    $('.buttons__item:first').addClass('active')
    $('.buttons__item').on('click', function(){
        var idName =  '.' + $(this).attr('id')

        $(this).siblings('.buttons__item').removeClass('active')
        $(this).addClass('active')

        $(this).parents('.slider__buttons').siblings('.slider__block.active').removeClass('active')
        $(this).parents('.slider__buttons').siblings(idName).addClass('active')
        
    })

    // клиенты
    $('.clients__slider').slick({
        arrows : true
    })
    $('.slick-prev').css({
        'background-color': '#242f51',
        'position' : 'absolute',
        'bottom' : '0',
        'right' : '0'
    })
    $('.slick-next').css({
        'background-color': '#242f51'
    })
    // FOOTER scroll
    $('.footer__menu a').click(function(){
        var idName =  $(this).attr('id')
        var className = '.' + idName
       
        var pos = $(className).position();
        $('html, body').animate({
            scrollTop : pos.top
        }, 700)
    })
    //burger
    let burger =$('.burger')
    let header__content = $('.header__content')
    burger.click(function(){

        header__content.toggleClass('show')
    })

});