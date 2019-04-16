$(document).ready(function () {
    $('#myCarousel').carousel({interval:2000});
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
            $('#carouselButton').removeClass('btn-danger');
            $('#carouselButton').addClass('btn-success');
        }
        else{
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
            $('#carouselButton').removeClass('btn-success');
            $('#carouselButton').addClass('btn-danger');
        }
    });
    $('#carousel-play').click(function () {
        $('#myCarousel').carousel('cycle')
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });

    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    });
    //$('[data-toggle="tooltip"]').tooltip();
});