

/*====================
 bannerList======>jsList-function
 =====================*/

function bannerListFn(a,b,c,d,e,f){
    var $bannerMaxWapDom=a;
    var windowWidth=$(window).width();
    var timeShow=0;
    var array=0;
    var timeOff=0;

    var imgPos=$bannerMaxWapDom.find("ul").find("li");

    var cloneOne=imgPos.first().clone();
    $bannerMaxWapDom.find("ul").append(cloneOne);
    $bannerMaxWapDom.find("li").width(windowWidth);
    var liWidth=imgPos.width();
    var liLength=$bannerMaxWapDom.find("li").length;
    $bannerMaxWapDom.find("ul").width(liWidth*(liLength+1));

    var $imgBtnList=b;

    setTimeout(function(i){
        timeShow++;
        (timeShow == 1) ? $bannerMaxWapDom.find("ul").fadeIn() : $bannerMaxWapDom.find("ul").hide();
    },20);

    (e === undefined) ? e=2000 : e=e;

    function imgListBtn (){

        for (var i=0; i < liLength-1; i++ ){
            $imgBtnList.append("<span></span>");
        }

        $imgBtnList.children().eq(0).addClass("current");

        $imgBtnList.children().click(function(){
            var index=$(this).index();
            array=index;
            bannerImgList(index);
            $imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");

        });

    }

    imgListBtn();

    function bannerImgList(a){
        $bannerMaxWapDom.find("ul").animate({left: -a*windowWidth},400)
    }

    function setTime(){
        timeOff=setInterval(function(){
            array++;
            move();
        },e)
    }

    (f) ? setTime() : setTime;

    c.stop(true).click(function(){
        array--;
        move();
    });

    d.stop(true).click(function(){
        array++;
        move();
    });

    function move(){

        if (array == liLength){
            $bannerMaxWapDom.find("ul").css({left:0});
            array=1;
        }

        if (array == -1){
            $bannerMaxWapDom.find("ul").css({left:-liWidth*(liLength-1)});
            array=liLength-2
        }

        $bannerMaxWapDom.find("ul").stop(true).animate({
            left:-array*liWidth
        });

        (array == liLength-1) ? $imgBtnList.children().eq(0).addClass("current").siblings().removeClass("current") : $imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");


    }

    $bannerMaxWapDom.hover(function(){
        clearInterval(timeOff);
    },function(){(f) ? setTime() : setTime;});
}






/*nav*/

    jQuery(".nav").slide({ type: "menu", titCell: ".nLi", targetCell: ".sub", effect: "slideDown", delayTime: 300, triggerTime: 0, returnDefault: true });




$(function(){
	$(".tabbox .tab a").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		$('.tabbox .content_tab li').hide();
		$('.tabbox .content_tab li:eq('+index+')').show();
	});
	
	
});


function SlideShow(c) {
    var a = document.getElementById("slideContainer"), f = document.getElementById("slidesImgs").getElementsByTagName("li"), h = document.getElementById("slideBar"), n = h.getElementsByTagName("li"), d = f.length, c = c || 3000, e = lastI = 0, j, m;
    function b() {
        m = setInterval(function () {
            e = e + 1 >= d ? e + 1 - d : e + 1;
            g()
        }, c)
    }
    function k() {
        clearInterval(m)
    }
    function g() {
        f[lastI].style.display = "none";
        n[lastI].className = "";
        f[e].style.display = "block";
        n[e].className = "on";
        lastI = e
    }
    f[e].style.display = "block";
    a.onmouseover = k;
    a.onmouseout = b;
    h.onmouseover = function (i) {
        j = i ? i.target : window.event.srcElement;
        if (j.nodeName === "LI") {
            e = parseInt(j.innerHTML, 10) - 1;
            g()
        }
    };
    b()
}
/*banner轮播*/
bannerListFn(
    $(".banner"),
    $(".img-btn-list"),
    $(".left-btn"),
    $(".right-btn"),
    2000,
    true
);


















