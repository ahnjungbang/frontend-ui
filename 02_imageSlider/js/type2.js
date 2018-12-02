$(document).ready(function() {
    $("#slider ul li.item:gt(0)").hide();

    setInterval(function(){
        $("#slider ul li.item:first").fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo("#slider ul");

    }, 1000);
});