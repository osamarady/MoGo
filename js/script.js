/* eslint-env browser */
/* eslint-disable no-console, no-unused-vars */
/*global $, console, alert*/

/* Start Header */
/* Responsive Height for Header */
if ($(window).height() === 500) {
    $(".header, .header-overlay").height($(window).height() + 200);
} else {
    $(".header, .header-overlay").height($(window).height());
}
/* Header Content Height */
var windowLingth = $("nav").innerHeight() + $(".slider").innerHeight();
$(".content").height($(".header").height() - windowLingth);
/* Background Changeable */
var i = 1;
setInterval(function () {
    "use strict";
    if (i < 5) {
        $(".header").css("background-image", "url(images/" + i + ".png)");
        var id = $("#slide-" + i);
        $(id).addClass("slide-active");
        i = i + 1;
    } else {
        i = 1;
        $(".slide-item").removeClass("slide-active");
    }
}, 10000);
/* nav bar toggle */
$(".navbar-toggler").on("click", function () {
    "use strict";
    $(".header, .header-overlay").css("height", "auto");
});
/* nav-item Change on Click */
$(".nav-item").click(function () {
    "use strict";
    $(this).addClass("active").siblings().removeClass("active");
});
/* search Fade Toggle */
$(".search-bar .fa-times").on("click", function () {
    "use strict";
    $(".search-bar").fadeOut();
});
$(".nav-link .fa-search").on("click", function () {
    "use strict";
    $(".search-bar").fadeIn();
    $(".search-bar input").focus();
});
/* search Fade Toggle */
/* ./End Header */

/* Start Initialize Jq Count To */
$('.number').countTo();
/* ./End Numbers */

/* Accordion List */
$(".tap .tap-toggle").on("click", function () {
    "use strict";
    var x = 180;
    $(this).next().slideToggle();
});
/* /ccordion List */

/* Quote slider */
$(document).ready(function () {
    "use strict";
    $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: [ '<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>' ]
    });
});
/* Quote slider */

// niceScroll Style
$(function () {
    "use strict";
    $("html, body").niceScroll({
        cursorcolor: "#f38181",
        horizrailenabled: false
    });
    $(".tap-data").niceScroll({
        cursorcolor: "#95e1d3",
        horizrailenabled: false,
        autohidemode: false,
        cursorwidth: "7px"
    });
});
// ScrollUp Button
$(document).on("scroll", function (e) {
    "use strict";
    var x = $(document).scrollTop();
	if (x > 700) {
		$(".scrollUp").fadeIn(1000);
	} else {
		$(".scrollUp").fadeOut(1000);
	}
});
$(".scrollUp").on("click", function () {
    "use strict";
    $("html, body").animate({
        scrollTop: 0
    }, 3000);
});