$(document).ready(function() {


        $('#sec-5-left').click(function(e){
            e.preventDefault();
            //if($("#section-5-mobile-wrapper").left() < 1) {
                $("#section-5-mobile-wrapper").animate({"left": "-=" + ($("#section-5-mobile-wrapper").width() / 2 )}, "slow");
            //}
        });

        $('#sec-5-right').click(function(e){
            e.preventDefault();
            //if($("#section-5-mobile-wrapper").left > 0) {
                $("#section-5-mobile-wrapper").animate({"left": "+=" + $("#section-5-mobile-wrapper").width() / 2}, "slow");
            //}
        });

});