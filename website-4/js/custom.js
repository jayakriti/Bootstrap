$(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
          $(this).toggleClass("active");
    });
});

$(document).ready(function(){
$("li").hover(function(){
$(this).toggleClass("bounce");
});
});