/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-14 14:26:06
 * @templte $Id$
 */

window.setInterval(function(){ShowCountDown(2017,9,1,'Countdown');}, 1000); 
function ShowCountDown(year,month,day,divname) { 
	var now = new Date(); 
	var endDate = new Date(year, month-1, day); 
	var timeDifference = endDate.getTime()-now.getTime();
	if(timeDifference<=0){
		var day1 = 0;
		var hour = 0;
		var minute = 0;
		var second = 0;
	}else{
		var leftTime=endDate.getTime()-now.getTime(); 
		var leftsecond = parseInt(leftTime/1000); 
		var day1=Math.floor(leftsecond/(60*60*24)); 
		var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
		var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
		var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
	}
	
	var cc = document.getElementById(divname); 
	cc.innerHTML = "<p style='color:red;font-size:16px;'>活动结束</p>";
} 

function showlr(id,t){
   	if(t=='1'){
       $("#sh"+id).css('display','block');
    }else{
       $("#sh"+id).css('display','none');
    }
}

