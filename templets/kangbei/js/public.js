/*@authors 康贝儿童医院*/
function setNavshow(id,n){ 
	if(n==1){
    document.getElementById(id).style.display='block';
	}else{
		document.getElementById(id).style.display='none';
	}
}
$(function(){
  $("img").error(function(){
    $(this).attr("src", "/images/defaultpic.gif");
  })
})

/*消息提示框，用来代替alert*/
/*data参数为提示内容，必需*/
/*time参数为显示时间，到时间后自动消失，可选*/
function showMsg(data, time){
  var msg = data ? data : "";
  var msg_style = '<style class="msg_style msg_remove">.msg{display:none; background:#fff; position:fixed; top:35%; left:50%; width:280px; margin-left:-140px; text-align:center; border-radius:5px; color:#555; box-shadow:0 0 10px 2px rgba(0,0,0,0.5); z-index:1100;} .msg .close{position:absolute; top:0; right:0; width:30px; height:30px; line-height:30px; font-size:26px; font-weight:bold; background:rgba(0,0,0,0.1); cursor:pointer;} .msg h3{border-bottom:1px solid #ccc; margin:0 10px; padding:10px 0;} .msg p{margin:15px;}</style>';
  var msg_html = '<div class="msg msg_remove"><div class="close">×</div><h3>温馨提示</h3><p>'+msg+'</p></div>';
  var msg_script = '<script class="msg_script msg_remove">$(".msg .close").click(function(){$(".msg").fadeOut(300);setTimeout(function(){$(".msg_remove").remove()},1000)})<\/script>';
  $("body").append(msg_style+msg_html+msg_script);
  $(".msg").fadeIn(300);
  var htime_script = time ? '<script class="htime_script msg_remove">setTimeout(function(){$(".msg").fadeOut(300)},'+time+');setTimeout(function(){$(".msg_remove").remove()},1000)<\/script>' : '';
  $("body").append(htime_script);
}