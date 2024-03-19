$(document).ready(function () {
    var rullet_popup = $(".spin-result-wrapper, .pop-up-window");
    var spinned = false;
    
    for (i = 0; i < 4; i++) {
        $(".rulet_list li").clone().appendTo(".rulet_list");
    }
    $(".rulet_list li.win").eq(9).addClass("spin_to_win");
    var x = $(".spin_to_win").index();
    function selfRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var add_width = selfRandom(20,80)
    function new_right(){
        var width_ruller = $(".rulet_wrapper").width();
        var item_width = $(".rulet_list li").width();
        width_ruller = $(".rulet_wrapper").width();
        return (x*item_width)+(x*8)-(Math.ceil(width_ruller/2))+add_width;
    }


    $('.rulet_button').click(function () {
        $(this).prop('disabled', true);
        spinned = true;
        $('.rulet_window').css({
            right: "0"
        })
        $('.rulet_window').animate({
            right: new_right()
        }, 10000, function() {
            console.log("spinned");
            $('.rulet_list li:eq('+x+')').css({
                border:'4px solid red'
            });
            setTimeout(function () {
                rullet_popup.css({ display: "block" });
                $(".rulet_block").slideUp(); 
                $(".order_block").slideDown();
                var e = new Date().getTime() + 6e5;
                $("#clock").countdown(e, { elapse: !0 }).on("update.countdown", function (e) {
                   var n = $(this);
                   e.elapsed ? n.html("00 : 00") : n.html(e.strftime("<span>%M</span> : <span>%S</span>"));
                });
            }, 1000);
        });
    });
    $(".close-popup, .spin-result-wrapper").click(function () {
        rullet_popup.fadeOut();
    });

    
    window.addEventListener('resize', function() {
        if (!spinned){return};
        $(".rulet_window").css("right", new_right());
    });


});