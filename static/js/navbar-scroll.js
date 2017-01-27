$(document).ready(function() {

    /*For Mobile Devices*/
    if ($(window).width() < 768) {
        $('#main-navbar .navbar-brand img').attr({src: "/static/img/3.png"});
        $('#main-navbar').addClass("navbar-fixed-top");
        $('#main-navbar .navbar-nav').css('background-color', '#091727');

        if ($(window).scrollTop() < 580) {
            $('#main-navbar .navbar-brand img').addClass("hidden");
            $('#main-navbar.navbar').css('background-color', 'transparent');
        }
        else {
            $('#main-navbar').addClass("navbar-fixed-top");
            $('#main-navbar .navbar-brand img').removeClass("hidden");
            $('#main-navbar.navbar').css('background-color', '#091727');
        }
    }
    /*For Desktop Devices*/
    else {
        if ($(window).scrollTop() < 580) {
                $('#main-navbar .navbar-brand img').addClass("hidden");
                $('#main-navbar').removeClass("navbar-fixed-top");
                $('#main-navbar').addClass("main-navbar-scroll");
                $('#main-navbar .navbar-nav').removeClass("navbar-right");
                $('#main-navbar.navbar').css('background-color', 'transparent');
            }
            else {
                $('#main-navbar .navbar-brand img').removeClass("hidden");
                $('#main-navbar').addClass("navbar-fixed-top");
                $('#main-navbar').removeClass("main-navbar-scroll");
                $('#main-navbar .navbar-nav').addClass("navbar-right");
                $('#main-navbar.navbar').css('background-color', '#091727');
            }

    }

    document.onscroll = function() {

        /*For Mobile Devices*/
        if ($(window).width() < 768) {
            if ($(window).scrollTop() < 580) {
                $('#main-navbar .navbar-brand img').addClass("hidden");
                $('#main-navbar.navbar').css('background-color', 'transparent');
            }
            else {
                $('#main-navbar').addClass("navbar-fixed-top");
                $('#main-navbar .navbar-brand img').removeClass("hidden");
                $('#main-navbar.navbar').css('background-color', '#091727');
            }
        }
        /*For Desktop Devices*/
        else {
            if ($(window).scrollTop() < 580) {
                $('#main-navbar .navbar-brand img').addClass("hidden");
                $('#main-navbar').removeClass("navbar-fixed-top");
                $('#main-navbar').addClass("main-navbar-scroll");
                $('#main-navbar .navbar-nav').removeClass("navbar-right");
                $('#main-navbar.navbar').css('background-color', 'transparent');
            }
            else {
                $('#main-navbar .navbar-brand img').removeClass("hidden");
                $('#main-navbar').addClass("navbar-fixed-top");
                $('#main-navbar').removeClass("main-navbar-scroll");
                $('#main-navbar .navbar-nav').addClass("navbar-right");
                $('#main-navbar.navbar').css('background-color', '#091727');
            }
        }

    }

});