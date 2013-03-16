// position footnotes in margin 
$(document).ready(function() {
	$('.footnoteRef').each(function() {
		var fnid = $(this).attr('href');
		var pos = $(this).position();
		$(fnid).css({
			position: "absolute",
			top: pos.top + "px",
			left: "0px"
		});
		$(fnid).find("a:last-child").remove();
	});
});

// using Dr Drang's mods: http://www.leancrew.com/all-this/2011/08/footnote-popup-interference/
$(document).ready(function() {
    Footnotes.setup();
});

var Footnotes = {
    footnotetimeout: false,
    setup: function() {
        var footnotelinks = $("a.footnoteRef")
        
        footnotelinks.unbind('mouseover',Footnotes.footnoteover);
        footnotelinks.unbind('mouseout',Footnotes.footnoteoout);
        
        footnotelinks.bind('mouseover',Footnotes.footnoteover);
        footnotelinks.bind('mouseout',Footnotes.footnoteoout);
    },
    footnoteover: function() {
        clearTimeout(Footnotes.footnotetimeout);
        $('#footnotediv').stop();
        $('#footnotediv').remove();
        
        var id = $(this).attr('href').substr(1);
        var position = $(this).offset();
    
        var div = $(document.createElement('div'));
        div.attr('id','footnotediv');
        div.bind('mouseover',Footnotes.divover);
        div.bind('mouseout',Footnotes.footnoteoout);

        var el = document.getElementById(id);
        div.html($(el).html());
        div.find("a:last-child").remove();
        
        div.css({
            position:'absolute',
            width:'20em',
            background:'#F3FEF3',
            padding:'0em 1em 0em 1em',
            border:'solid 1px',
            'font-size':'90%',
            'font-family': 'Helvetica, Sans-serif',
            'line-height':1.4,
            '-moz-border-radius':'.5em',
            '-webkit-border-radius':'.5em',
            'border-radius':'.5em',
            opacity:0.95
        });
        $(document.body).append(div);

        var left = position.left;
        if(left + 420  > $(window).width() + $(window).scrollLeft())
            left = $(window).width() - 420 + $(window).scrollLeft();
        var top = position.top+20;
        if(top + div.height() > $(window).height() + $(window).scrollTop())
            top = position.top - div.height() - 15;
        div.css({
            left:left,
            top:top
        });
    },
    footnoteoout: function() {
        Footnotes.footnotetimeout = setTimeout(function() {
            $('#footnotediv').animate({
                opacity: 0
            }, 600, function() {
                $('#footnotediv').remove();
            });
        },100);
    },
    divover: function() {
        clearTimeout(Footnotes.footnotetimeout);
        $('#footnotediv').stop();
        $('#footnotediv').css({
                opacity: 0.9
        });
    }
}

