$(document).ready(function() {
    /*For Mobile Devices*/
    if ($(window).width() < 768) {
        $('#main-navbar .navbar-brand img').attr({src: "/static/img/3.png"});
        $('#main-navbar').addClass("navbar-fixed-top");

        if ($(window).scrollTop() < 480) {
            $('#main-navbar .navbar-brand img').addClass("hidden");
            $('#main-navbar.navbar').css('background-color', 'transparent');
        }
        else {
            $('#main-navbar').addClass("navbar-fixed-top");
            $('#main-navbar .navbar-brand img').removeClass("hidden");
            $('#main-navbar.navbar').css('background-color', '#091727');
        }
    }
    else {
        if ($(window).scrollTop() == 0) {
            $('#main-navbar .navbar-brand img').addClass("hidden");
            $('#main-navbar').removeClass("navbar-fixed-top");
            $('#main-navbar').addClass("navbar-fixed-bottom");
            $('#main-navbar .navbar-nav').removeClass("navbar-right");
            $('#main-navbar.navbar').css('background-color', 'transparent');
        }
        else {
            $('#main-navbar .navbar-brand img').removeClass("hidden");
            $('#main-navbar').removeClass("navbar-fixed-bottom");
            $('#main-navbar').addClass("navbar-fixed-top");
            $('#main-navbar .navbar-nav').addClass("navbar-right");
            $('#main-navbar.navbar').css('background-color', '#091727');
        }
    }

    document.onscroll = function() {
        if ($(window).width() < 768) {
            if ($(window).scrollTop() < 480) {
                $('#main-navbar .navbar-brand img').addClass("hidden");
                $('#main-navbar .navbar-brand img').attr({src: "/static/img/3.png"});
                $('#main-navbar.navbar').css('background-color', 'transparent');
            }
            else {
                $('#main-navbar .navbar-brand img').removeClass("hidden");
                $('#main-navbar .navbar-brand img').attr({src: "/static/img/3.png"});
                $('#main-navbar.navbar').css('background-color', '#091727');
            }
        }
        else {
            if ($(window).scrollTop() == 0) {
                $('#main-navbar .navbar-brand img').addClass("hidden");
                $('#main-navbar').removeClass("navbar-fixed-top");
                $('#main-navbar').addClass("navbar-fixed-bottom");
                $('#main-navbar .navbar-nav').removeClass("navbar-right");
                $('#main-navbar.navbar').css('background-color', 'transparent');
            }
            else {
                $('#main-navbar .navbar-brand img').removeClass("hidden");
                $('#main-navbar').removeClass("navbar-fixed-bottom");
                $('#main-navbar').addClass("navbar-fixed-top");
                $('#main-navbar .navbar-nav').addClass("navbar-right");
                $('#main-navbar.navbar').css('background-color', '#091727');
            }
        }
    }

});