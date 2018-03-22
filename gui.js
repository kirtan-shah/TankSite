
var left = false;
var right = false;

var x = 0;
var xinit = 0;
var shot = false;
var bulletx = 0;
var counter = 0;

window.onkeydown = function(event){
    if(event.keyCode === 32) {
        if(!shot || bulletx > $("#tankpanel").width()) shoot();
        event.preventDefault();
    }
};

function shoot() {
    shot = true;
    bulletx = $("#tank").position().left;
    console.log("shot");
    $("#bullet").attr("src", $(".selected")[0].id + "bullet.png");
    $("#explode").attr("src", $(".selected")[0].id + "explode.png");
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
    bulletx = x;

    //$("#infoback").css("height", t34.height() + $("#tankpanel").height() + "px");
    $("#infoback").css("height", window.innerHeight + "px");

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
            console.log("ting");
        }
    });

    setInterval(function() {
        speed = 2;
        if(left) x -= speed;
        if(right) x += speed;
        $("#tank").css("left", x+"px");
        if(shot) {
            bulletx += 4;
            $("#bullet").css("left", bulletx + "px");
            $("#explode").css("left", bulletx + "px");
            $("#explode").css("width", 40 + 2*Math.sin(counter) + "%");
        }
        counter += 0.1;
    }, 20);


    kv1.click();
});
