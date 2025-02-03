$(function () {
  $(".modal-btn").on("click", function () {
    $($(".modal-content")[$(this).index()]).addClass("-open");
  });
  $(".modal-close-btn,.modal-content .bg-box").on("click", function () {
    $(this).closest(".modal-content").removeClass("-open");
  });
  $(".slide-menu").on("click", function () {
    if (!$("body").hasClass("-open")) {
      $("body").addClass("-open");
    } else {
      $("body").removeClass("-open");
    }
  });
  $(".h-wrap .nav-list a").on("click", function () {
    $("body").removeClass("-open");
  });
  $(window).on("scroll", function () {
    var diff = [];
    var index = 0;
    $(".sec-box").each(function (i, t) {
      diff[i] = Math.abs($(t).offset().top - $(window).scrollTop());
      index = diff[index] < diff[i] ? index : i;
    });
    $(".h-wrap .nav-list li").removeClass("-current");
    $($(".h-wrap .nav-list li")[index]).addClass("-current");
  });
});
