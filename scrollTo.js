// ScrollTo Navigation

  $(document).ready(function() {
    $(".article-rtf h2").each(function(i) {
      var heading = $(this);
      var headingtext = $(this).text();
      var anchornav = $('#scrollNav');
      var headingId = "topic" + (i + 1);
      heading.attr("id", headingId);
      anchornav.append("<a class='heading-link padding-top---xxs padding-bottom---xxs " + headingId + "' href='#" + headingId + "'><div id='anchor-text'><h5>" + headingtext + "</h5></div></a>");
    });
    if (!$('.article-rtf h2').length) {
    $('#scrollNav').hide();
    }
  });

$(document).ready(function() {
  $(window).scroll(function() {
    var y = $(this).scrollTop();
    $('.article-rtf h2').each(function(event) {
      if (y >= $($(this)).offset().top - 140) {
        dy = $(this).attr('id');
       
        $('.heading-link').removeClass('active');
        $('.' + dy).addClass('active');
      } else {
       
      }
    });
  });
});
