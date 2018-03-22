
var left = false;
var right = false;

var x = 0;
var xinit = 0;

window.onkeydown = function(event){
    if(event.keyCode === 32) {
        event.preventDefault();
    }
};

function shoot() {

}

$(document).ready(function() {
    var kv1 = $("<button id='kv1' class='tank selected'>KV-1</button>");
    kv1.css({
        "left" : 0
    });
    kv1.appendTo($(document.body));


    var t34 = $("<button id='t34' class='tank'>T-34</button>");
    t34.css({
        "left" : "13.333%"
    });

    t34.appendTo($(document.body));

    var mk3 = $("<button id='mk3' class='tank'>MK-III</button>");
    mk3.css({
        "left" : "26.666%"
    });

    mk3.appendTo($(document.body));

    $("#tankpanel").css("top", t34.height() + "px");

    $(".tank").click(function() {
        if(!$(this).hasClass("selected")) {
            $(".tank").removeClass("selected");
            $(this).addClass("selected");
        }
        $("#rotate").attr("src", this.id+"rotate.gif");
        $("#tank").attr("src", this.id+".png");
        $(".info").css("display", "none");
        $(".specs").css("display", "none");
        $("#" + this.id + "info").css("display", "inline");
        $("#" + this.id + "specs").css("display", "inline");
        $("#" + this.id + "specs").css("left", $("#rotate").width() + $("#rotate").position().left + 10 + "px");
        x = xinit;
    });

    x = $("#tank").position().left;
    xinit = x;

    $("#infoback").css("height", t34.height() + $("#tankpanel").height() + "px");

    $(document.body).keydown(function( event ) {
      if (event.which == 37) left = true;
      if (event.which == 39) right = true;
    });
    $(document.body).keyup(function( event ) {
      if (event.which == 37) left = false;
      if (event.which == 39) right = false;
    });
    $(document.body).keypress(function( event ) {
        if(event.which == 32) {
            shoot();
        }
    });

    setInterval(function() {
        speed = 2;
        if(left) x -= speed;
        if(right) x += speed;
        $("#tank").css("left", x+"px");
    }, 20);


    kv1.click();
});
