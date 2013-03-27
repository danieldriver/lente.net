// position footnotes in margin 
$(document).ready(function() {
  var fnbottom = $('aside[role=contentinfo]').height() + parseInt($('aside[role=contentinfo]').css('margin-bottom'),10) + parseInt($('aside[role=contentinfo]').css('padding-bottom'),10);
	$('.footnoteRef').each(function(i) {
		var fnid = $(this).attr('href');
		var pos = Math.max($(this).position().top,fnbottom);
		$('.footnotes').css("top", "0px");
		$(fnid).css({
			position: "absolute",
			top: pos + "px",
			left: "0px"
		});
		$(fnid).find("a:last-child").remove();
		fnbottom = $(fnid).position().top + $(fnid).height() + parseInt($(fnid).css('margin-bottom'),10) + parseInt($(fnid).css('padding-bottom'),10);
	});
	$('.footnotes').hide().fadeIn();
});
// tk need to do some error handling in case margin notes overlap
