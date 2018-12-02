$(document).ready(function() {
$items = $("#slider ul li.item");

var CurrentIndex = 1;
var imgCount = $items.length;

setInterval(function() {
    if (CurrentIndex >= imgCount) {
        CurrentIndex = 0;
       }
    // 1. 모든 이미지에 active 클래스를 제어한다.
    $items.removeClass('active');
    $items.eq(CurrentIndex++).addClass('active');
    }, 1000);
});