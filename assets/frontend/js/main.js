(function ($) {
    "use strict";
    jQuery(document).on("ready", function () {
        jQuery(".mean-menu").meanmenu({ meanScreenWidth: "991" });
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 120) {
                $(".navbar-area").addClass("is-sticky");
            } else {
                $(".navbar-area").removeClass("is-sticky");
            }
        });
        $(".main-banner-content h1, .hero-content h1").html(function () {
            var text = $(this).text().trim().split(" ");
            var last = text.pop();
            return (
                text.join(" ") +
                (text.length > 0 ? " <span>" + last + "</span>" : last)
            );
        });
        $(".offer-content h2, .offer-time h2").html(function () {
            var text = $(this).text().trim().split(" ");
            var first = text.shift();
            return (
                (text.length > 0 ? "<span>" + first + "</span> " : first) +
                text.join(" ")
            );
        });

        $(function () {
            $(".accordion")
                .find(".accordion-title")
                .on("click", function () {
                    $(this).toggleClass("active");
                    $(this).next().slideToggle("fast");
                    $(".accordion-content").not($(this).next()).slideUp("fast");
                    $(".accordion-title").not($(this)).removeClass("active");
                });
        });
        $(".popup-youtube").magnificPopup({
            disableOn: 320,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
        $(".home-slides").owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 750,
            items: 1,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>",
            ],
        });
        $(".home-slides").on("translate.owl.carousel", function () {
            $(".hero-content .sub-title")
                .removeClass("animated fadeInUp")
                .css("opacity", "0");
            $(".hero-content h1")
                .removeClass("animated fadeInUp")
                .css("opacity", "0");
            $(".hero-content p")
                .removeClass("animated fadeInUp")
                .css("opacity", "0");
            $(".hero-content .btn")
                .removeClass("animated fadeInUp")
                .css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function () {
            $(".hero-content .sub-title")
                .addClass("animated fadeInUp")
                .css("opacity", "1");
            $(".hero-content h1")
                .addClass("animated fadeInUp")
                .css("opacity", "1");
            $(".hero-content p")
                .addClass("animated fadeInUp")
                .css("opacity", "1");
            $(".hero-content .btn")
                .addClass("animated fadeInUp")
                .css("opacity", "1");
        });
        $(".tv-show-slides").owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            mouseDrag: false,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>",
            ],
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                768: { items: 2 },
                1200: { items: 3 },
            },
        });
        $(".blog-slides").owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>",
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1200: { items: 3 },
            },
        });
        $(".feedback-slides").owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>",
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1200: { items: 3 },
            },
        });
        $("select").niceSelect();
        function makeTimer() {
            var endTime = new Date("September 30, 2020 17:00:00 PDT");
            var endTime = Date.parse(endTime) / 1000;
            var now = new Date();
            var now = Date.parse(now) / 1000;
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400);
            var hours = Math.floor((timeLeft - days * 86400) / 3600);
            var minutes = Math.floor(
                (timeLeft - days * 86400 - hours * 3600) / 60
            );
            var seconds = Math.floor(
                timeLeft - days * 86400 - hours * 3600 - minutes * 60
            );
            if (hours < "10") {
                hours = "0" + hours;
            }
            if (minutes < "10") {
                minutes = "0" + minutes;
            }
            if (seconds < "10") {
                seconds = "0" + seconds;
            }
            $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours + "<span>Hours</span>");
            $("#minutes").html(minutes + "<span>Minutes</span>");
            $("#seconds").html(seconds + "<span>Seconds</span>");
        }
        setInterval(function () {
            makeTimer();
        }, 1000);
        $(".input-counter").each(function () {
            var spinner = jQuery(this),
                input = spinner.find('input[type="text"]'),
                btnUp = spinner.find(".plus-btn"),
                btnDown = spinner.find(".minus-btn"),
                min = input.attr("min"),
                max = input.attr("max");
            btnUp.on("click", function () {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on("click", function () {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });
        (function ($) {
            $(".tab ul.tabs")
                .addClass("active")
                .find("> li:eq(0)")
                .addClass("current");
            $(".tab ul.tabs li a").on("click", function (g) {
                var tab = $(this).closest(".tab"),
                    index = $(this).closest("li").index();
                tab.find("ul.tabs > li").removeClass("current");
                $(this).closest("li").addClass("current");
                tab.find(".tab_content")
                    .find("div.tabs_item")
                    .not("div.tabs_item:eq(" + index + ")")
                    .slideUp();
                tab.find(".tab_content")
                    .find("div.tabs_item:eq(" + index + ")")
                    .slideDown();
                g.preventDefault();
            });
        })(jQuery);
        $(".newsletter-form")
            .validator()
            .on("submit", function (event) {
                if (event.isDefaultPrevented()) {
                    formErrorSub();
                    submitMSGSub(false, "Please enter your email correctly.");
                } else {
                    event.preventDefault();
                }
            });
        function callbackFunction(resp) {
            if (resp.result === "success") {
                formSuccessSub();
            } else {
                formErrorSub();
            }
        }
        function formSuccessSub() {
            $(".newsletter-form")[0].reset();
            submitMSGSub(true, "Thank you for subscribing!");
            setTimeout(function () {
                $("#validator-newsletter").addClass("hide");
            }, 4000);
        }
        function formErrorSub() {
            $(".newsletter-form").addClass("animated shake");
            setTimeout(function () {
                $(".newsletter-form").removeClass("animated shake");
            }, 1000);
        }
        function submitMSGSub(valid, msg) {
            if (valid) {
                var msgClasses = "validation-success";
            } else {
                var msgClasses = "validation-danger";
            }
            $("#validator-newsletter")
                .removeClass()
                .addClass(msgClasses)
                .text(msg);
        }
        $(".newsletter-form").ajaxChimp({
            url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
            callback: callbackFunction,
        });
        $(function () {
            $(window).on("scroll", function () {
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $(".go-top").addClass("active");
                if (scrolled < 600) $(".go-top").removeClass("active");
            });
            $(".go-top").on("click", function () {
                $("html, body").animate({ scrollTop: "0" }, 500);
            });
        });
    });
    $(window).on("load", function () {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 20,
                mobile: true,
                live: true,
            });
            wow.init();
        }
    });
    $(window).on("load", function () {
        $(".preloader").fadeOut();
    });
})(jQuery);
