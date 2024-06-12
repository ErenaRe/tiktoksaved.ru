$(document).ready(function() {
    var affId = [3398, 34228];
    if (affId.indexOf($('#affnetwork').data('id')) == -1) {
      var hasOnFirstElement = $(".step").first().hasClass('step--age') || $(".step").first().hasClass('step--gender');
      $(".step--age").remove();
      $(".step--gender").remove();
      if (hasOnFirstElement) {
        setTimeout(function() {
          $(".step").first().show();
        }
                    , 200);
      }
    }
  }
);