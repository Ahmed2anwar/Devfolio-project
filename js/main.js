// start typing

var typed = new Typed('.typed', {
    strings: ['Designer|', 'Developer|' ,],
    startDelay:500,
    typeSpeed:100,
    loop:true,
    showCursor: false,
    shuffle: true,
    backSpeed:100
  });
// End typing

let aboutScroll = $(".landing span").offset().top;
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop >= aboutScroll ) {
    $(".navbar").css("background-color", "rgba(0, 0, 0, 0.9)");
    $("#iconTop").fadeIn(1000);
  } else {
    $(".navbar").css("background-color", "transparent");
    $("#iconTop").fadeOut(1000);
  }
});

// start fixed icon 
  $("#iconTop").click(function () {
    $("body,html").animate({ scrollTop: "0px" }, { queue: false, duration: 3000 });
  });
// End fixed icon 

$(".nav-link").click(function () {
    let href = $(this).attr("href");
    $(this).addClass("active");
    $(this).parent().siblings().find(".nav-link").removeClass("active");
    let aboutScroll = $(href).offset().top;
    $("body,html").animate(
      { scrollTop: aboutScroll  },
      { queue: false, duration: 3000 }
    );
  });

  $(document).ready(function () {
    $(".loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
    });
  });
  