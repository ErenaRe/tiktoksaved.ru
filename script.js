$(document).ready(function () {
  $(".btn-next--js").on("click", function(t) {
    var s;
    t.preventDefault();
    (s = $(this)).closest(".step").hide().next().fadeIn();

    $('.step.active').removeClass('active').next().addClass('active');

    if($('.step-final').hasClass('active')) {
      setTimeout(function () {
        $('canvas').fadeIn(200);
      }, 100);
    }
  }
                        );
  $(".go-to-age").on("click", function (t) {
    var s;
    t.preventDefault();
    (s = $(this)).closest(".step").hide().nextAll('.step--age').fadeIn();
  });


  // Like ++
  $(".chat__item-icons").click(function() {
    var $count = $(this).find(".count");
    var currentCount = parseInt($count.text());

    if ($(this).hasClass("active")) {
        currentCount--;
        $(this).removeClass("active");
    } else {
        currentCount++;
        $(this).addClass("active");
    }
    $count.text(currentCount);
  });

  // Conffeti
    var colors = ["#0098ff", "#a0ff00", "#ff00e3"];

    function frame() {
    confetti({
        particleCount: 3,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: colors,
    });
    confetti({
        particleCount: 3,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: colors,
    });

    if (Date.now() < Date.now() + 19000) {
        requestAnimationFrame(frame);
    }
    }

    window.onload = frame();

});

function redirectToUrl() {

    var encodedUrl = 'aHR0cHM6Ly9nb29nbGUuY29t';
    var decodedUrl = atob(encodedUrl);
    window.location.href = decodedUrl;
}
