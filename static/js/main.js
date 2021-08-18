$(document).ready(function(){

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    var headerItems = $('.header-nav ul li a'); 

    function changeActiveSection(sectionName){
        headerItems.removeClass('active');
        $('a[href="#' + sectionName + '"').addClass('active');
    }

    console.log($('#main').offset().top)

    $(window).on('scroll', function(){

        if ($(window).scrollTop() > $('#main').offset().top - $(window).height() ) {
            changeActiveSection('main');
        }

        if ($(window).scrollTop() > $('#how_it_works').offset().top - $(window).height() ) {
            changeActiveSection('how_it_works');
        }

        if ($(window).scrollTop() > $('#integrations').offset().top - $(window).height() ) {
            changeActiveSection('integrations');
        }

        if ($(window).scrollTop() > $('#pricing').offset().top - $(window).height() ) {
            changeActiveSection('pricing');
        }
    });

    headerItems.on('click', function(){
        headerItems.removeClass('active')
        $(this).addClass('active');
    });

    $('.integrations-circle').height( $('.integrations-circle').width() );
    $('.circle_2').height( $('.circle_2').width() );
    $('.circle_3').height( $('.circle_3').width() );

    $(window).on('resize', function(){
        $('.integrations-circle').height( $('.integrations-circle').width() );
        $('.circle_2').height( $('.circle_2').width() );
        $('.circle_3').height( $('.circle_3').width() );
    });

});