
//jquery 
$(function(){
	//先进模式
	jQuery(".m2_a").slide({titCell:".hd ul",mainCell:".bd ul", effect:"leftLoop",interTime:4000,autoPlay:true,autoPage:true});

	//合作
	jQuery(".main5").slide({titCell:".hd ul li",mainCell:".bd ul",effect:"fade",interTime:4000,autoPlay:true});
	
	//main3
	$('.m3con_p4 a').hover(function(){
			$(this).stop().animate({marginTop:-6})
	},function(){
			$(this).stop().animate({"marginTop":"0"},100).animate({"marginTop":-6},100).animate({"marginTop":0},100).animate({"marginTop":-3},100).animate({"marginTop":0},100);			
	})

	//锚链接 滑动
	$('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },1000);
                return false;
            }
        }
    });
});