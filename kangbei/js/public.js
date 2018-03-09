/**
 * 
 * @authors 康贝儿童医院
 * @date    2017-08-12 11:13:22
 * 
 */
function detectZoom (){
	  var ratio = 0,
	    screen = window.screen,
	    ua = navigator.userAgent.toLowerCase();
	  
	   if (window.devicePixelRatio !== undefined) {
	      ratio = window.devicePixelRatio;
	  }
	  else if (~ua.indexOf('msie')) { 
	    if (screen.deviceXDPI && screen.logicalXDPI) {
	      ratio = screen.deviceXDPI / screen.logicalXDPI;
	    }
	}
	  	else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
	    ratio = window.outerWidth / window.innerWidth;
	}
	    
	   if (ratio){
	    ratio = Math.round(ratio * 100);
	  }
	    
	   return ratio;
};
$(window).resize(function(){
	var ratio = detectZoom();
	if(ratio !=100){
		window.location.reload(); 
	}
})

function setNavshow(id,n){ 
	if(n==1){
        document.getElementById(id).style.display='block';
	}else{
		document.getElementById(id).style.display='none';
	}
}

/*视频播放接口*/
function Jvideo(obj){
	var videoSourceUrl = $('#'+obj).attr('video_url');
	var videoTitle = $('#'+obj).attr('video_title');
	$(this).JVideo({
        playProgressColor:'#db4646',
        background:'#111',
        width:900,
        source:videoSourceUrl,
        title:videoTitle
    });
}





