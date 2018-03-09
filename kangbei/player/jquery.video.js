;(function(){
	$.fn.JVideo = function(obj){
		obj = $.extend({
			source 				:'http://v.cdkid.cn/video/0801_3.mp4',//视频资源路径
			width 				:800,//视频默认宽度
			title 				:'视频名称',//视频名称
			titleFontSize		:'18px',//标题字号
			logoUrl 			:'/templets/tianshi/style/player/tianshi_logo.png',//视频logo
			playProgressColor 	:'#db4646',//播放进度条颜色
			progressWrapColor 	:'#eee',//进度条底色
			btnColor 			:'#fff',//按钮颜色
			timeColor 			:'#fff',//播放时间颜色
			titleColor 			:'#fff',//标题颜色
			background 			:'#111',//背景颜色
		},obj || {})
		return this.each(function(){
            

			var videoWidth					= obj.width;
			var videoHeight 				= obj.width*(9/16);
			var videoTitle 					= obj.title;
			var videoLogoUrl 				= obj.logoUrl;
			var videoSource 				= obj.source;
			var videoProgressWrapColor 		= obj.progressWrapColor;
			var videoPlayProgressColor 		= obj.playProgressColor;
			var videoBtnColor 				= obj.btnColor;
			var videoTimeColor 				= obj.timeColor;
			var videoTitleColor 			= obj.titleColor;
			var videoBackground 			= obj.background;
			var videoTitleFontSize 			= obj.titleFontSize

			var video_str = '<div id="video-screen">';
        		video_str += '<div id="videoPlayer">';
                video_str += '<div class="loader">';
                video_str += '<div class="loader-inner ball-pulse">';
                video_str += '<div></div>';
                video_str += '<div></div>';
                video_str += '<div></div>';
                video_str += '</div>';
                video_str += '</div>';
                video_str += '<span id="logo"><img src="'+videoLogoUrl+'"/></span>';
                video_str += '<span id="closeVideo"><i class="fa fa-close" aria-hidden="true"></i></span>';
        		video_str += '<h1 id="video-title"> '+videoTitle+'</h1>';
	            video_str += '<video id="video" width="'+videoWidth+'" height="'+videoHeight+'" preload src="'+videoSource+'">';
	            video_str += '</video>';
	            video_str += '<div id="videoControls"> ';
                video_str += '<span id="playBtn" title="Play"> <i class="fa fa-play" aria-hidden="true"></i> </span> ';
                video_str += '<div id="progressWrap">  ';
                video_str += '<div id="playProgress">  ';
                video_str += '</div>';
                video_str += '</div>';
                video_str += '<span id="durationTime">  </span>';
                video_str += '<span id="fullScreenBtn" title="全屏">  <i class="fa fa-expand" aria-hidden="true"></i> </span>';
            	video_str += '</div> ';
        		video_str += '</div>';
    			video_str += '</div>';
    			$('body').append(video_str);
    		//vedio样式
    		var documentWidth   = $(window).width();//设备宽度
    		var documentHeight 	= $(window).height();//设备高度
    		var videoTitlePadding = 10;
    		var videoTitleHeight = videoTitleFontSize+videoTitlePadding*2;
    		var videoOffsetLeft = (documentWidth-videoWidth)/2;
    		var videoOffsetTop 	= (documentHeight-videoHeight-60)/2;
    		var videoControlsPaddingLeft = 20;//控制器左右内边距
    		var videoControlsPaddingTop = 10;//控制器上下内边距
    		var videoControlsWidth = videoWidth-(videoControlsPaddingLeft*2);//控制器宽度
    		var videoControlsHeight = 20;//控制器高度
    		var playBtnWidth = 20;//播放和全屏按钮尺寸
    		var fullScreenWidth = 30;//全屏按钮宽度
    		var durationTimeWidth = 60;//时间宽度
    		var progressWrapWidth = videoWidth-(videoControlsPaddingLeft*2)-durationTimeWidth-playBtnWidth-fullScreenWidth
    		$('#video-screen').css({
                'width':'100%',
                'height':'100%',
                'background':'rgba(1,1,1,0.5)',
                'position': 'fixed',
                'top':'0px',
                'left': '0px',
                'z-index':999
            })
            $('#videoPlayer').css({
                'width':videoWidth,
                'background-color':videoBackground,
                'position':'absolute',
                'top':videoOffsetTop,
                'left':videoOffsetLeft
            })
            $('#video-title').css({
                'padding':'10px 0px',
                'padding-left':'50px',
                'margin':'0px',
                'text-align':'left',
                'color':videoTitleColor,
                'font-size':'16px',
                'font-weight':'100',
                'background-color':videoBackground
            })
            $('#closeVideo').css({
                'width':'20px',
                'height':'20px',
                'color':'#fff',
                'position':'absolute',
                'top':'9px',
                'right':'15px',
                'cursor': 'pointer'
            })
            $('#logo').css({
                'width':'20px',
                'height':'auto',
                'position':'absolute',
                'top':'5px',
                'left':'20px',
            })
            $('#logo img').css({
                'width':'20px',
                'height':'auto',
            })
            $('#videoControls').css({
                'width': videoControlsWidth,
                'padding-left':videoControlsPaddingLeft,
                'padding-right':videoControlsPaddingLeft,
                'background-color':videoBackground,
                'height':videoControlsHeight,
                'padding-top':'10px',
                'padding-bottom':'10px'
            })
            $('#playBtn').css({
                'color':videoBtnColor,
                'width':playBtnWidth,
                'height':videoControlsHeight,
                'float': 'left',
                'cursor': 'pointer'
            })
            $('#fullScreenBtn').css({
                'color':videoBtnColor,
                'width':fullScreenWidth,
                'height':videoControlsHeight,
                'text-align':'right',
                'float': 'right',
                'cursor': 'pointer'
            })
            $('#durationTime').css({
                'color':videoTimeColor,
                'width':durationTimeWidth,
                'height':videoControlsHeight,
                'line-height':videoControlsHeight+'px',
                'float':'left',
                'font-size':'12px',
                'text-align':'center'
            })
            $('#progressWrap').css({
                'width':progressWrapWidth,
                'background-color': videoProgressWrapColor,
                'margin':'8px 0px',
                'height': '4px',
                'cursor': 'pointer',
                'float': 'left'
            })
            $('#playProgress').css({
                'background-color':videoPlayProgressColor ,
                'width': '0px',
                'height': '4px'
            })
			 // 获取要操作的元素
            var video = document.getElementById("video");
            var videoControls = document.getElementById("videoControls");
            var controls = document.getElementById("video_controls");
            var playBtn = document.getElementById("playBtn");
            var fullScreenBtn = document.getElementById("fullScreenBtn");
            var progressWrap = document.getElementById("progressWrap");
            var playProgress = document.getElementById("playProgress");
            var fullScreenFlag = false;
            var progressFlag;
            video.oncanplay = function(){ 
            	var totalTime = getFormatTime(Math.ceil(video.duration)); 
            	$('#durationTime').text(totalTime);
                $('.loader').fadeOut();
            };
            // 创建操作对象。
            var videoPlayer = {
                init: function(){
                    var that = this;
                    video.removeAttribute("controls");
                    bindEvent(video, "loadeddata", videoPlayer.initControls);
                    videoPlayer.operateControls();
                },
                operateControls: function(){
                    bindEvent(playBtn, "click", play);
                    bindEvent(video, "click", play);
                    bindEvent(fullScreenBtn, "click", fullScreen);
                    bindEvent(progressWrap, "mousedown", videoSeek);
                }
            }

            videoPlayer.init();
            //关闭播放器
            $('#closeVideo').click(function(){
                $('#video-screen').remove();
            })
            // 原生的JavaScript事件绑定函数
            function bindEvent(ele, eventName, func){
                if(window.addEventListener){
                    ele.addEventListener(eventName, func);
                }
                else{
                    ele.attachEvent('on' + eventName, func);
                }
            }
            // 控制video的播放
            function play(){
                if ( video.paused || video.ended ){              
                    if ( video.ended ){ 
                        video.currentTime = 0;
                        } 
                    video.play();
                    playBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'; 
                    progressFlag = setInterval(getProgress, 60);
                    timer();
                }else{ 
                    video.pause(); 
                    playBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
                    clearInterval(progressFlag);
                } 
            }
            function timer(){
            	var totalTime = Math.ceil(video.duration); 
                var timer = setInterval(function(){
            		if(totalTime == 0){
            			clearInterval(timer);
            		}else{
            			totalTime -= 1;
            		}
            		$('#durationTime').text(getFormatTime(totalTime));
            	},1000)
            }
            function getFormatTime(time) { 
            	var time = time; 
            	var h = parseInt(time/3600);
            	m = parseInt(time%3600/60);
            	s = parseInt(time%60); 
            	h = h < 10 ? "0"+h : h; 
            	m = m < 10 ? "0"+m : m; 
            	s = s < 10 ? "0"+s : s; 
            	return h+":"+m+":"+s; 
            }
            // 控制video是否全屏
            function fullScreen(){
                if(fullScreenFlag){
                    video.webkitCancelFullScreen();
                }
                else{
                    video.webkitRequestFullscreen();
                }
            }
            // video的播放条
            function getProgress(){
                var percent = video.currentTime / video.duration;
                playProgress.style.width = percent * (progressWrap.offsetWidth) + "px";
            }
            // 鼠标在播放条上点击时进行捕获并进行处理
            function videoSeek(e){
                if(video.paused || video.ended){
                    play();
                    enhanceVideoSeek(e);
                }
                else{
                    enhanceVideoSeek(e);
                }

            }
            function enhanceVideoSeek(e){
                var length = e.pageX - videoOffsetLeft-41;
                var percent = length / progressWrap.offsetWidth;
                playProgress.style.width = percent * (progressWrap.offsetWidth) - + "px";
                video.currentTime = percent * video.duration;
                progressFlag = setInterval(getProgress, 60);
            }
		})
	}
})(jQuery);