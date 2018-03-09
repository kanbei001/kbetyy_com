document.writeln("<style>");

document.writeln(".order-screen{width:100%;height:100%;background:rgba(255,255,255,0.6);position:fixed;top:0px;left:0px;display:none;z-index:9999}");
document.writeln(".order{width:800px;height:auto;border-radius: 5px;overflow: hidden;  -webkit-box-shadow: 3px 3px 3px;  -moz-box-shadow: 3px 3px 3px;  box-shadow: 3px 3px 3px; position:absolute;top:200px;left:100px;}");
document.writeln(".order-header{width:800px;height:40px;line-height:40px;padding:30px 0px;color:#fff;font-size:30px;font-weight:bold;text-align:center;background: url(/style/images/order.png) no-repeat center center}");
document.writeln(".order-close-btn{display: inline-block;width:30px;height:30px;border-radius: 100%;cursor:pointer;background: #fff url(/style/images/order_close_btn.png) no-repeat center center;position:absolute;top:20px;right:20px;}");
document.writeln(".order-content{width:740px;height:300px;padding:30px;background:#fff;}");
document.writeln(".order-from{width:340px;height:auto;float: left;}");
document.writeln(".order-from .input-group{width:100%;margin:15px 0px;}");
document.writeln(".order-from .input-group label{display:inline-block;width:70px;height:40px;line-height:40px;padding-right: 10px;color:#333;}");
document.writeln(".order-from .input-group select{width:250px;border:1px solid #ccc;background:#fff;height:40px;line-height:40px;border-radius: 5px;outline: none;}");
document.writeln(".order-from .input-group select:focus{border:1px solid #0899e0;}");
document.writeln(".order-from .input-group input[type=\'text\']{padding-left:10px;width:240px;border:1px solid #ccc;background:#fff;height:40px;line-height:40px;border-radius: 5px;outline: none;}");
document.writeln(".order-from .input-group input[type=\'date\']{padding-left:10px;width:240px;border:1px solid #ccc;background:#fff;height:40px;line-height:40px;border-radius: 5px;outline: none;}");

document.writeln(".order-from .submit{width:100%;margin-top:30px;text-align: center;}");
document.writeln(".order-from .submit input[type=\'submit\']{display: inline-block;padding:10px 30px;background:#0899e0;border-radius: 5px;color:#fff;border:0px;outline: none;cursor: pointer;}");
document.writeln(".order-Explain{width:360px;float: right;border-left:1px solid #ddd;padding-left: 20px;}");
document.writeln(".order-Explain b{height: 30px;line-height: 30px;color:#ff5400;}");
document.writeln(".order-Explain p{line-height: 30px;color:#333333;}");
document.writeln("<div class=\'order\'>");
document.writeln("</style>");
document.writeln("<div class='order-screen'>");
document.writeln("<div class='order'>");
document.writeln("		<div class=\'order-header\'>在线快速挂号平台</div>");
document.writeln("		<span class=\'order-close-btn\' onclick=\'hide_order()\'></span>");
document.writeln("		<div class=\'order-content\'>");
document.writeln("			<div class=\'order-from\'>");
document.writeln("				<div class=\'input-group\'>");
document.writeln("					<label for=\'\'>挂号科室：</label>");
document.writeln("					<select name=\'gh_offices\'>");
document.writeln("						<option value=\'0\'>预约科室</option>");
document.writeln("						<option value=\'1\'>呼吸科</option>");
document.writeln("						<option value=\'2\'>消化科</option>");
document.writeln("						<option value=\'3\'>神经康复科</option>");
document.writeln("						<option value=\'4\'>内分泌科</option>");
document.writeln("						<option value=\'5\'>口腔科</option>");
document.writeln("						<option value=\'6\'>耳鼻喉科</option>");
document.writeln("						<option value=\'7\'>小儿眼科</option>");
document.writeln("						<option value=\'8\'>儿童皮肤科</option>");
document.writeln("						<option value=\'9\'>小儿外科</option>");
document.writeln("						<option value=\'10\'>新生儿科</option>");
document.writeln("						<option value=\'11\'>小儿中医科</option>");
document.writeln("						<option value=\'12\'>儿童保健科</option>");
document.writeln("						<option value=\'13\'>哮喘门诊</option>");
document.writeln("						<option value=\'14\'儿童体检</option>");
document.writeln("					</select>");
document.writeln("				</div>");
document.writeln("				<div class=\'input-group\'>");
document.writeln("					<label for=\'\'>联系电话：</label>");
document.writeln("					<input type=\'text\' name=\'gh_tel\' id=\'\'>");
document.writeln("				</div>");
document.writeln("				<div class=\'input-group\'>");
document.writeln("					<label for=\'\'>挂号姓名：</label>");
document.writeln("					<input type=\'text\' name=\'gh_name\' id=\'\'>");
document.writeln("				</div>");
document.writeln("				<div class=\'input-group\'>");
document.writeln("					<label for=\'\'>预约时间：</label>");
document.writeln("					<input type=\'date\' name=\'gh_date\' id=\'\'>");
document.writeln("				</div>");
document.writeln("				<div class=\'submit\'><input type=\'submit\' onclick=\'post_order()\' id=\'gh_submit\' value=\'提交挂号\'/></div>");
document.writeln("			</div>");
document.writeln("			<div class=\'order-Explain\'>");
document.writeln("				<b>预约须知：</b>");
document.writeln("				<p>1、网上预约，优先就诊；</p>");
document.writeln("				<p>2、提交预约，5-10分钟左右医院客服将会给您电话回访确认预约详细内容；请留意回访电话；</p>");
document.writeln("				<p>3、此挂号适用于深圳康贝儿童医院所有科室，不转诊。</p>");
document.writeln("				<b>来院路线：</b>");
document.writeln("				<p>地址：深圳市武侯区人民南路4段46号</p>");
document.writeln("				<p>公交：桐梓林公交站下车，沿人民南路四段步行20米</p>");
document.writeln("				<p>地铁：地铁1号线-桐梓林站B出口步行50米</p>");
document.writeln("				<b>直接预约儿科专家</b>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("	</div>");
$(function(){
	var ww = $(window).width();
	var wh = $(window).height();
	$('.order').css({
		'top':(wh-460)/2,
		'left':(ww-800)/2,
	})
})
function show_order(){
	$('.order-screen').fadeIn();
}
function hide_order(){
	$('.order-screen').fadeOut();
}
function post_order(){
	var gh_name = $("input[name='gh_name']");//姓名
	var gh_sex = $("input[name='gh_sex']");//性别
	var gh_age = $("input[name='gh_age']");//年龄
	var gh_tel = $("input[name='gh_tel']");//电话
	var gh_qq = $("input[name='gh_qq']");//QQ
	var gh_date = $("input[name='gh_date']");//时间
	var gh_offices = $('select[name="gh_offices"] option:selected');//科室
	var gh_des = $("input[name='gh_des']");//描述
	var gh_code = $("input[name='gh_code']");
	var gh_fromurl = window.location.href;//来源
	tel_re = /^(1\d{10}|((010|02\d|0[3-9]\d{2})-?)?([1-9]\d{6,7}))$/;
	if(gh_name.length>0 &&gh_name.val() ==""){
		alert('姓名不能为空！');
		gh_name.focus();
		return false;
	}
	if(gh_tel.length>0 &&gh_tel.val() ==""){
		alert('联系电话不能为空！');
		gh_tel.focus();
		return false;
	}
	if(!tel_re.test(gh_tel.val())) {
        alert('联系电话格式不正确，请输入11位手机号码！');
        gh_tel.focus();
		return false;
    }
	if(gh_offices.length>0 &&gh_offices.val() =="0"){
		alert('请选择科室！');
        gh_offices.focus();
		return false;
	}
	if(gh_date.length>0 &&gh_date.val() ==""  ){
		alert('请输入你预约的时间！');
        gh_date.focus();
		return false;
	}
	var data = {
		gh_name:gh_name.val(),
    	gh_sex:gh_sex.val(),
    	gh_age:gh_age.val(),
    	gh_tel:gh_tel.val(),
    	gh_qq:gh_qq.val(),
    	gh_date:gh_date.val(),
    	gh_offices:gh_offices.val(),
    	gh_des:gh_des.val(),
    	gh_fromurl:gh_fromurl,
    	code_id:"1",
	}
	$.post("http://guahao.cdkid.cn/index.php?m=api&a=register",data,function(result){
		console.log(result);
		if(result == 'true'){
			alert('预约成功');
		}else if(result == 'false'){
			alert('预约失败');
		}else{
			alert(result)
		}
	},'json')
}