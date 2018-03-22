
var left = false;
var right = false;

var x = 0;

$(document).ready(function() {
    var kv1 = $("<button id='kv1' class='tank selected'>KV-1</button>");
    kv1.css({
        "left" : 0
    });
    kv1.appendTo($(document.body));


    var t34 = $("<button id='t34' class='tank'>T-34</button>");
    t34.css({
        "left" : "20%"
    });

    t34.appendTo($(document.body));

    $("#tankpanel").css("top", t34.height() + "px");

    $(".tank").click(function() {
        if(!$(this).hasClass("selected"))
            $(".tank").toggleClass("selected");
        $("#rotate").attr("src", this.id+"rotate.gif");
        $("#tank").attr("src", this.id+".png");
    });

    x = $("#tank").position().left;

    $(document.body).keydown(function( event ) {
      if (event.which == 37) left = true;
      if (event.which == 39) right = true;
    });
    $(document.body).keyup(function( event ) {
      if (event.which == 37) left = false;
      if (event.which == 39) right = false;
    });

    setInterval(function() {
        speed = 2;
        if(left) x -= speed;
        if(right) x += speed;
        $("#tank").css("left", x+"px");
    }, 20);


    kv1.click();
});
