// position footnotes in margin 
$(document).ready(function() {
	$('.footnoteRef').each(function(i) {
		var fnid = $(this).attr('href');
		var pos = $(this).position();
		$('.footnotes').css("top", "0px");
		$(fnid).css({
			position: "absolute",
			top: pos.top + "px",
			left: "0px"
		});
		$(fnid).find("a:last-child").remove();
	});
	$('.footnotes').hide().fadeIn();
});
// tk need to do some error handling in case margin notes overlap
