$(document).ready(function () {

    var windowWidth = $(window).width()
    var mouseX = 0;

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        if (mouseX < windowWidth / 2) {
            $(".box1").css("background-color", "red");
        }
        if (mouseX > windowWidth / 2) {
            $(".box1").css("background-color", "blue");
        }
    })

    var windowWidth = $(window).width()
    var mouseX = 0;
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        if (mouseX < windowWidth / 2) {
            $(".box2").css("background-color", "blue");
        }
        if (mouseX > windowWidth / 2) {
            $(".box2").css("background-color", "red");
        }
    })
    var windowWidth = $(window).width()
    var mouseX = 0;
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        if (mouseX < windowWidth / 2) {
            $(".tenet").css("change-text-color", "black");
        }
        if (mouseX > windowWidth / 2) {
            $(".tanet").css("change-text-color ", "white");
        }
    })
    var windowWidth = $(window).width()
    var mouseX = 0;
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        if (mouseX < windowWidth / 2) {
            $(".tenet1").css("change-text-color", "black");
        }
        if (mouseX > windowWidth / 2) {
            $(".tanet1").css("change-text-color", "white");
        }
    })

    $('.target').click(function () {
        $(this).attr('src', 'img/img5.png');
    })


    $(".play-a").on("click", function () {
        $(".music")[0].play();
    })

    $(".play-b").on("click", function () {
        $(".music")[0].pause();
    })

})