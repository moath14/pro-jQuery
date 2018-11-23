$(document).ready(function(){
        // adjust header height

        var myHeader = $(".header"),
            mySlider = $(".bxslider");

        myHeader.height($(window).height());

        $(window).resize(function(){
            myHeader.height($(window).height());

            mySlider.each(function(){
                $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2 );
            });
        });

        // links add active class

        $(".links li").click(function(){
            $(this).addClass("active").siblings().removeClass("active")
        });
        // adjust bxslider list items center

        mySlider.each(function(){
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2 );
        });


        // bxslider
        mySlider.bxSlider({
            pager: false
        });
});