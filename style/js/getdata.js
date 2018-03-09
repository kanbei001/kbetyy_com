var getData = {
	//病种文章信息
	bzatcInfo:function(curpage){
		var typeid = $('#typeid').attr('data');
		var data = {
			typeid:typeid,
			curpage:curpage
		}
		$.post("/getdata/bzatcInfo.php",data,function(result){
			if(result !=0){
				var str = '';
				$.each(result.arc,function(n,value){
					str += '<li class="item">';
					str += '<div class="attr">';
					str += '<div class="title"><img src="/style/images/j7.jpg"><strong><a href="'+value.url+'">'+value.title+'</a></strong></div>';
					str += '<div class="time"><img src="/style/images/j5.jpg"><span>'+value.time+'</span></div>';
					str += '</div>';
					str += '<div class="description">'+value.description+'...<a href="'+value.url+'">[详情]</a></div>';
					str += '</li>';
				})
				var pagestr = '';
				var pages = result.pages
				for(var n=1;n<=pages;n++){
					if(curpage ==n){
						pagestr += '<span onclick="getData.bzatcInfo('+n+')" class="curobj">'+n+'</span>';
					}else{
						pagestr += '<span onclick="getData.bzatcInfo('+n+')">'+n+'</span>';
					}
				}
				$('.pagelist').empty();
				$('.J-elselists ul').empty();
				$('.pagelist').append(pagestr);
				$('.J-elselists ul').append(str);
			}else{
				var str = '<p class="errorInfo">暂时没有相关文章</p>';
				$('.J-elselists ul').empty();
				$('.J-elselists ul').append(str);
			}
		},'json');
	},
	//口腔基本信息
	kqatcInfo:function(curpage){
		var typeid = $('#typeid').attr('data');
		var data = {
			typeid:typeid,
			curpage:curpage
		}
		$.post("/getdata/kqatcInfo.php",data,function(result){
			var str = '';
			$.each(result.arc,function(n,value){
				str += '<li>';
				str += '<div class="J-lf4-title">';
				str += '<div class="J-lf4-title1"><img src="/style/images/j7.jpg"><strong><a href="'+value.url+'">'+value.title+'</a></strong></div>';
				str += '<div class="J-lf4-title2"><img src="/style/images/j5.jpg"><span>'+value.time+'</span></div>';
				str += '</div>';
				str += '<div class="J-lf4-p">'+value.description+'...<a href="'+value.url+'">[详情]</a></div>';
				str += '</li>';
			})
			var pagestr = '';
			var pages = result.pages
			for(var n=1;n<=pages;n++){
				if(curpage ==n){
					pagestr += '<span onclick="getData.kqatcInfo('+n+')" class="curobj">'+n+'</span>';
				}else{
					pagestr += '<span onclick="getData.kqatcInfo('+n+')">'+n+'</span>';
				}
			}
			$('#listpages').empty();
			$('.J-lf4 ul').empty();
			$('#listpages').append(pagestr);
			$('.J-lf4 ul').append(str);
		},'json');
	},
	//护理文章信息
	hlatcInfo:function(typeid,curpage){
		var data = {
			typeid:typeid,
			curpage:curpage
		}
		var thisname = $('#expert_'+typeid).find('h3').text();
		var typelink = $('#expert_'+typeid).find('h3').attr('url');
		$("#hlheadinfo").text(thisname);
		$('#hltdson').text(thisname);
		$('#hltdson').attr('href',typelink);
		$.post("/getdata/hlatcInfo.php",data,function(result){
			var str = '';
			if(result !=0){
				$.each(result.arc,function(n,value){
					str += '<li>';
					str += '<img src="'+value.litpic+'">';
					str += '<div class="H-DIV-li">';
					str += '<strong><a href="'+value.url+'">'+value.title+'</a></strong>';
					str += '<p>'+value.description+'...<a href="'+value.url+'">[详细]</a></p>';
					str += '</div>';
					str += '</li>';
				})
				var pagestr = '';
				var pages = result.pages;
				var hlid = result.hlid;
				var typename = result.hltypename;
				for(var n=1;n<=pages;n++){
					if(curpage ==n){
						pagestr += '<span onclick="getData.hlatcInfo('+hlid+','+n+')" class="curobj">'+n+'</span>';
					}else{
						pagestr += '<span onclick="getData.hlatcInfo('+hlid+','+n+')">'+n+'</span>';
					}
				}
				$('#listpages').empty();
				$('#atcInfo').empty();
				$('#listpages').append(pagestr);
				$('#atcInfo').append(str);
			}else{
				var str = '<p class="errorInfo">暂时没有医生的相关信息</p>';
				$('#listpages').empty();
				$('#atcInfo').empty();
				$('#atcInfo').append(str);
			}
			
		},'json');
		
	},
	//专家列表
	allExpertInfo:function(typeid,curpage){
		var data = {
			typeid:typeid,
			curpage:curpage
		};
		var thisname = $('#expert_'+typeid).find('h3').text();
		$("#expertheadinfo").text(thisname);
		$.post("/getdata/allExpertInfo.php",data,function(result){
			if(result !=0){
				var str = '';
				$.each(result.expert,function(n,value){
					var zjsc = getData.cutstr(value.zjsc,25);
					str += '<li>';
					str += '<a href="'+value.url+'"><img src="'+value.litpic+'"></a>';
					str += '<div class="D-div-li">';
					str += '<div class="D-div-li1"><h5>'+value.title+'</h5>'+value.zjzc+'</div>';
					str += '<div class="D-div-li2">';
					str += '<h6>诊疗擅长</h6>';
					str += '<p>'+zjsc+'</p>';
					str += '</div>';
					str += '<div class="D-div-li2">';
					str += '<h6>坐诊时间</h6>';
					str += '<p>'+value.zzsj+'</p>';
					str += '</div>';
					str += '<div class="D-div-li2">';
					str += '<a class="D-div-li-a" href="'+value.url+'">专家详情</a>';
					str += '<a href="/swt/">预约挂号</a>';
					str += '</div>';
					str += '</div>';
					str += '</li>';
				})
				var pagestr = '';
				var pages = result.pages
				var eid = result.typeid;
				for(var n=1;n<=pages;n++){
					if(curpage == n){
						pagestr += '<span onclick="getData.allExpertInfo('+eid+','+n+')" class="curobj">'+n+'</span>';
					}else{
						pagestr += '<span onclick="getData.allExpertInfo('+eid+','+n+')">'+n+'</span>';
					}
				}
				$('#listpages').empty();
				$('#expertList ul').empty();
				$('#listpages').append(pagestr);
				$('#expertList ul').append(str);
			}else{
				var str = '<p class="errorInfo">暂时没有医生的相关信息</p>';
				$('#listpages').empty();
				$('#expertList ul').empty();
				$('#expertList ul').append(str);
			}
			
		},'json');
	},
	//科室医生信息
	departExpertInfo:function(typeid){
		var data = {
			typeid:typeid
		};
		$.post("/getdata/getExpertInfo.php",data,function(result){
			var str = '';
			$.each(result,function(n,value){

				var description = getData.cutstr(value.description,120);
				str += '<li>';
				str += '<img src="'+value.litpic+'">';
				str += '<div class="M-k3bd1">';
				str += '<div class="M-k3bd1-title">';
				str += '<strong>'+value.title+'</strong><span>'+value.zjzc+'</span>';
				str += '</div>';
				str += '<div class="M-k3bd1-k">';
				str += '<div class="M-k3bd1-k1">';
				str += value.shzw1+'<br />'+value.shzw2+'<br />'+value.shzw3;
				str += '</div>';
				str += '<div class="M-k3bd1-k2">';
				str += '<a class="abg" href="/swt">在线咨询</a>';
				str += '<a href="/swt">预约挂号</a>';
				str += '</div>';
				str += '</div>';
				str += '<div class="M-k3bd1-k3">';
				str += '<h4>专家简介</h4>';
				str += '<p>'+description+' . . . <a href="'+value.url+'">[详细]</a></p>';
				str += '<h5>'+value.zjsc+'</h5>';
				str += '</div>';
				str += '<div class="M-k3bd1-k4">';
				str += '坐诊时间：'+value.zzsj;
				str += '</div>';
				str += '</div>';
				str += '</li>';
			})
			$('#expertInfos').append(str);
			$('#expertInfos').ajaxComplete(function(){
				jQuery(".doctor-list").slide({mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true});
			})
		},'json');
	},
	//公共右边医生信息
	publicExpertInfos:function(typeid){
		var data = {
			typeid:typeid
		};
		$.post("/getdata/getExpertInfo.php",data,function(result){
			var str = '';
			$.each(result,function(n,value){
				var description = getData.cutstr(value.description,90);
				str += '<li>';
				str += '<img src="'+value.litpic+'" title="'+value.title+'">';
				str += '<div class="J-ri1-Mz">';
				str += '<div class="J-ri1-M1">';
				str += '<strong>'+value.title+' <span>'+value.zjzc+'</span></strong>';
				str += '</div>';
				str += '<div class="J-ri1-M2">';
				str += '<div class="J-ri1-sc">诊疗擅长</div>';
				str += '<span>'+value.zjsc+'</span>';
				str += '</div>';
				str += '<div class="J-ri1-M3">'+description+'<a href="'+value.url+'">[详细]</a></div>';
				str += '<div class="J-ri1-M-btn"><a href="/swt/">预约挂号</a></div>';
				str += '</div>';
				str += '</li>';
			})
			$('#expertInfos').append(str);
			$('#expertInfos').ajaxComplete(function(){
				jQuery(".J-ri1-M").slide({mainCell:".bd ul",autoPlay:true,delayTime:50});
			})
		},'json');
	},
	//科室导航
	ksnavExpertInfo:function(typeid){
		var data = {
			typeid:typeid
		};

		$.post("/getdata/getExpertInfo.php",data,function(result){
			console.log(result)
			var str = '';
			$.each(result,function(n,value){
				var description = getData.cutstr(value.description,50);
				var zjsc = getData.cutstr(value.zjsc,50)
				str += '<li>';
				str += '<a href="'+value.url+'" class="picname"><img src="'+value.litpic+'" title="'+value.title+'"/></a>';
				str += '<div class="expert-info">';
		       	str += '<div class="expert-name"><h5>'+value.title+'</h5>'+value.zjzc+'</div>';
		        str += '<div class="expert-sc">';
		        str += '<h6>诊疗擅长</h6>';
		        str += '<p>'+zjsc+'</p>';
		        str += '</div>';
		        str += '<div class="expert-intro">';
		        str += '<h6>个人简介</h6>';
		        str += '<p>'+description+'...<a href="'+value.url+'">[详细]</a></p>';
		        str += '</div>';
		        str += '<div class="expert-guahao">';
	        	str += '<a href="/swt">预约挂号</a>';
		        str += '</div>';
			    str += '</div>';
				str += '</li>';
			})
			$('.list-info').append(str);
			$('.list-info').ajaxComplete(function(){
				jQuery(".expert-slide").slide({titCell:".slide-btn ul",mainCell:".expert-lists ul",autoPage:true,effect:"left",autoPlay:true,vis:2});
			})
		},'json');
	},
	getBanners:function(typeid){
		var data = {
			typeid:typeid
		};
		var banners = [
			['http://www.cdkid.cn/style/images/banner01.jpg','http://www.cdkid.cn/swt'],
			['http://www.cdkid.cn/style/images/banner02.jpg','http://www.cdkid.cn/swt'],
			['http://www.cdkid.cn/style/images/banner03.jpg','http://www.cdkid.cn/swt']
		]
		if(typeid == undefined || typeid == ''){
			var str = '';
				str += '<div class="hd">';
				str += '<ul>';
				$.each(banners,function(n,value){
				str += '<li> </li>';
				})
				str += '</ul>';
				str += '</div>';
				str += '<div class="bd">';
				str += '<ul>';
				$.each(banners,function(n,value){
				str += '<li><a href="'+value[1]+'" target="_blank"><img src="'+value[0]+'" alt=""/></a></li>';
				})
				str += '</ul>';
				str += '</div>';
				$('#sy_banner_qhcode').append(str);
				jQuery(".sy_banner_qhcode").slide({mainCell:".bd ul",effect:"left",autoPlay:true,easing:"easeInQuint",delayTime:1000});
		}else{
			$.post("/getdata/getBanners.php",data,function(result){
				if(result == 0){
					var str = '';
					str += '<div class="hd">';
					str += '<ul>';
					$.each(banners,function(n,value){
					str += '<li> </li>';
					})
					str += '</ul>';
					str += '</div>';
					str += '<div class="bd">';
					str += '<ul>';
					$.each(banners,function(n,value){
					str += '<li><a href="'+value[1]+'" target="_blank"><img src="'+value[0]+'" alt=""/></a></li>';
					})
					str += '</ul>';
					str += '</div>';
					$('#sy_banner_qhcode').append(str);
					$('#sy_banner_qhcode').ajaxComplete(function(){
						jQuery(".sy_banner_qhcode").slide({mainCell:".bd ul",effect:"left",autoPlay:true,easing:"easeInQuint",delayTime:1000});
					})
				}else{
					var str = '';
					str += '<div class="hd">';
					str += '<ul>';
					$.each(result,function(n,value){
					str += '<li> </li>';
					})
					str += '</ul>';
					str += '</div>';
					str += '<div class="bd">';
					str += '<ul>';
					$.each(result,function(n,value){
					str += '<li><a href="'+value[1]+'" target="_blank"><img src="'+value[0]+'" alt=""/></a></li>';
					})
					str += '</ul>';
					str += '</div>';
					$('#sy_banner_qhcode').append(str);
					$('#sy_banner_qhcode').ajaxComplete(function(){
						jQuery(".sy_banner_qhcode").slide({mainCell:".bd ul",effect:"left",autoPlay:true,easing:"easeInQuint",delayTime:1000});
					})
				}
			},'json');
		}
	},
	hxxhGetExpert:function(typeid){
		var data = {
			typeid:typeid
		};
		$.post("/getdata/hxxhGetExpert.php",data,function(result){
			var str = '';
			$.each(result,function(n,value){
				
			var description = getData.cutstr(value.description,80);
			var zjsc = getData.cutstr(value.zjsc,80);
			str += '<div class="expert-slide">';
		    str += '<div class="expert-info">';
		    str += '<span class="picname"><img src="'+value.litpic+'" alt="'+value.title+'"></span>';
		    str += '<div class="intro">';
		    str += '<div class="title">';
			str += '<span class="name">'+value.title+'</span>';
			str += '<span class="zw">'+value.zjzc+'</span>';
			str += '</div>';
			str += '<span class="tip">专家简介</span>';
			str += '<p class="content">'+description+'. . .<a href="'+value.url+'">[详细介绍]</a></p>';
			str += '<span class="tip">擅长治疗</span>';
			str += '<p class="content">'+zjsc+'</p>';
			str += '<div class="zxyy">';
			str += '<a href="/swt" class="zx">在线咨询</a>';
			str += '<a href="/swt" class="yy">预约专家</a>';
			str += '</div>';
			str += '</div>';
			str += '</div>';
			str += '<div class="rela-video">';
			str += '<span class="title">相关视频</span>';
			str += '<div class="video-info clear">';
			$.each(value.relavideo,function(n,val){
			str += '<span class="info mysp_k" id="Jvideo" onclick="Jvideo(\'Jvideo\')" video_title="'+val.title+'" video_url="'+val.videourl+'" video_img="'+val.videoimg+'">';
			str += '<img src="'+val.videoimg+'" />';
			str += '</span>';
			})
			str += '</div>';
			str += '</div>';
    		str += '</div>';
    		})
			$('.slide-box').empty(str);
			$('.slide-box').append(str);
			$('.slide-box').ajaxComplete(function(){
				jQuery(".re-expert").slide({titCell:".hd ul",mainCell:".bd ul",effect:"left",trigger:"mouseover",autoPlay:true});
			})

		},'json')
	},
	//字符串截取
	cutstr:function(str, len) {
        var str_length = 0;
        var str_len = 0;
        str_cut = new String();
        str_len = str.length;
        for (var i = 0; i < str_len; i++) {
            a = str.charAt(i);
            str_length++;
            if (escape(a).length > 4) {
                //中文字符的长度经编码之后大于4  
                str_length++;
            }
            str_cut = str_cut.concat(a);
            if (str_length >= len) {
                str_cut = str_cut.concat("");
                return str_cut;
            }
        }
        //如果给定字符串小于指定长度，则返回源字符串；  
        if (str_length < len) {
            return str;
        }
    },
    mobile_device_detect:function(url){
	    var thisOS=navigator.platform;
	    var os=new Array("iPhone","iPod","iPad","android","Nokia","SymbianOS","Symbian","Windows Phone","Phone","Linux armv71","MAUI","UNTRUSTED/1.0","Windows CE","BlackBerry","IEMobile");
	    for(var i=0;i<os.length;i++){
			if(thisOS.match(os[i])){   
				window.location=url;
			}
	    }
		//因为相当部分的手机系统不知道信息,这里是做临时性特殊辨认
	    if(navigator.platform.indexOf('iPad') != -1){
			window.location=url;
	    }
		//做这一部分是因为Android手机的内核也是Linux
		//但是navigator.platform显示信息不尽相同情况繁多,因此从浏览器下手，即用navigator.appVersion信息做判断
		var check = navigator.appVersion;
		if( check.match(/linux/i) ){
			//X11是UC浏览器的平台 ，如果有其他特殊浏览器也可以附加上条件
			if(check.match(/mobile/i) || check.match(/X11/i)){
			window.location=url;
			}  
		}
		//类in_array函数
		Array.prototype.in_array = function(e){
			for(i=0;i<this.length;i++){
				if(this[i] == e)
				return true;
			}
			return false;
		}
	} 
}
/**
 * 获取指定时间
 * @param {Object} day
 */
function getDay(day){  
	     var sst = "日一二三四五六";
       var today = new Date();  
       var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;          
       today.setTime(targetday_milliseconds); //注意，这行是关键代码    
       var tMonth = today.getMonth();  
       var tDate = today.getDate(); 
       var tDay = today.getDay();
       var zhou = sst.substr(tDay,1); 
       tMonth = doHandleMonth(tMonth + 1);  
       tDate = doHandleMonth(tDate);  
       return tMonth+"/"+tDate+"  周"+zhou;  
}  
function doHandleMonth(month){  
       var m = month;  
       if(month.toString().length == 1){  
          m = "0" + month;  
       }  
       return m;  
} 
function getSchedul(id){
	  var thead ='<span>专家</span>';
	  for(var j=0;j<7;j++){
	   	   thead += '<span>'+getDay(j)+'</span>';
	  }
	  thead += '';
		$.post("http://www.cdkid.cn/getdata/getSchedul.php", { "id": id},function(result){   
			 $('.menu-head').html(thead);
			 var str = '';
			 var num = 0;
			 if(result !=0){
					$.each(result,function(n,value){ 
						num++;
					str += '<li><span>'+n+'</span>';
					for(var i=0;i<7;i++){
						 var yy = value[i]==0? '':'预约';
						 str += '<span><a onclick="show_order()">'+yy+'</a></span>';
					}
					str += '</li>';
					})
			 }
			 if(num<4){
			 	  for(var a=0;a<=4-num;a++){
			 	  	  str += '<li><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></li>';
			 	  }
			 }
			 $('.scheduling-table').html(str);
    }, "json");
}



