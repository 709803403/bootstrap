function NavToggle() {
    $(".navbar-minimalize").trigger("click");
}

function SmoothlyMenu() {
    $("body").hasClass("mini-navbar") ? $("body").hasClass("fixed-sidebar") ? ($("#side-menu").hide(), setTimeout(function() {
        $("#side-menu").fadeIn(500)
    }, 300)) : $("#side-menu").removeAttr("style") : ($("#side-menu").hide(), setTimeout(function() {
        $("#side-menu").fadeIn(500)
    }, 100));
}

$(document).ready(function() {
    $("#side-menu").metisMenu(), $(".right-sidebar-toggle").click(function() {
        $("#right-sidebar").toggleClass("sidebar-open");
    }),
    $(function() {
        $(".sidebar-collapse").slimScroll({
            height: "100%",
            railOpacity: .9,
            alwaysVisible: !1
        })
    }),
    $(".navbar-minimalize").click(function() {
        $("body").toggleClass("mini-navbar"), SmoothlyMenu();
    }),
    $(window).bind("load resize click scroll", function() {
        $("body").hasClass("body-small");
    }),
    $(window).scroll(function() {
        $(window).scrollTop() > 0 && !$("body").hasClass("fixed-nav") ? $("#right-sidebar").addClass("sidebar-top") : $("#right-sidebar").removeClass("sidebar-top")
    }),
    $(".full-height-scroll").slimScroll({
        height: "100%"
    }),
    $("#side-menu>li").click(function() {
        $("body").hasClass("mini-navbar") && NavToggle();
    }),
    $("#side-menu>li li a").click(function() {
        $(window).width() < 769 && NavToggle();
    }),
    $(".nav-close").click(NavToggle), /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && $("#content-main").css("overflow-y", "auto");

    $(".single").on("click",function () {
        $(this).parent().find("li").siblings().removeClass("active").children("ul.in").collapse("hide");
        $(this).toggleClass("active");
    });
})

$(window).bind("load resize", function() {
    $(this).width() < 769 && ($("body").addClass("mini-navbar"), $(".navbar-static-side").fadeIn())
})