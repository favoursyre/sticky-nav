//I want to learn how to create a sticky navigation

$(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 80) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
});