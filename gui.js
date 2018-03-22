
$(document).ready(function() {
    var mk3 = $("<button id='mk3' class='tank selected'>Mark III</button>");
    mk3.css({
        "left" : 0
    });
    mk3.appendTo($(document.body));


    var t34 = $("<button id='t34' class='tank'>T-34</button>");
    t34.css({
        "left" : mk3.width()
    });

    t34.appendTo($(document.body));

    $(".tank").click(function() {
        if(!$(this).hasClass("selected"))
            $(".tank").toggleClass("selected");
    });
});
