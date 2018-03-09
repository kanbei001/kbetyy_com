document.writeln("<style type=\"text/css\">");
document.writeln(".theme-desc{padding: 30px;}");
document.writeln(".theme-version {padding: 30px;}");
document.writeln(".theme-popover-mask {z-index: 2147483641;position:fixed;top:0;left:0;width:100%;height:100%;background:#000;opacity:0.4;filter:alpha(opacity=40);display:none}");
document.writeln(".theme-popover {");
document.writeln("  z-index:2147483642;");
document.writeln("  position:fixed;");
document.writeln("  top:40%;");
document.writeln("  left:50%;");
document.writeln("  width:570px;");
document.writeln("  height:460px;");
document.writeln("  margin:-180px 0 0 -330px;");
document.writeln("  border-radius:5px;");
document.writeln("  border:solid 2px #666;");
document.writeln("  background-color:#fff;");
document.writeln("  display:none;");
document.writeln("  box-shadow: 0 0 10px #666;");
document.writeln("}");
document.writeln(".theme-poptit {");
document.writeln("  border-bottom:1px solid #ddd;");
document.writeln("  padding:12px;");
document.writeln("  position: relative;");
document.writeln("}");
document.writeln(".theme-popbod {");
document.writeln("  padding:60px 15px;");
document.writeln("  color:#444;");
document.writeln("}");
document.writeln(".theme-popbom {");
document.writeln("  padding:15px;");
document.writeln("  background-color:#f6f6f6;");
document.writeln("  border-top:1px solid #ddd;");
document.writeln("  border-radius:0 0 5px 5px;");
document.writeln("  color:#666");
document.writeln("}");
document.writeln(".theme-popbom a {");
document.writeln("  margin-left:8px");
document.writeln("}");
document.writeln(".theme-poptit .close {");
document.writeln("  float:right;");
document.writeln("  color:#999;");
document.writeln("  padding:5px;");
document.writeln("  margin:-2px -5px -5px;");
document.writeln("  font:bold 14px/14px simsun;");
document.writeln("  text-shadow:0 1px 0 #ddd");
document.writeln("}");
document.writeln(".theme-poptit .close:hover {");
document.writeln("  color:#444;");
document.writeln("}");
document.writeln(".btn.theme-reg {");
document.writeln("  position: absolute;");
document.writeln("  top: 8px;");
document.writeln("  left: 43%;");
document.writeln("  display: none");
document.writeln("}");
document.writeln(".inp-gray, .feed-mail-inp {");
document.writeln("  border:1px solid #ccc;");
document.writeln("  background-color:#fdfdfd;");
document.writeln("  width:220px;");
document.writeln("  height:16px;");
document.writeln("  padding:4px;");
document.writeln("  color:#444;");
document.writeln("  margin-right:6px");
document.writeln("}");
document.writeln(".dform {");
document.writeln("  padding:5px 10px 0px;");
document.writeln("  text-align: center;");
document.writeln("}");
document.writeln(".dform .ipt_error {");
document.writeln("  background-color:#FFFFCC;");
document.writeln("  border-color:#FFCC66");
document.writeln("}");
document.writeln(".dform-tip {");
document.writeln("  display:none;");
document.writeln("  background-color:#080;");
document.writeln("  color:#fff;");
document.writeln("  line-height:42px;");
document.writeln("  margin-top:10px;");
document.writeln("display:;");
document.writeln("  font-size: 14px;");
document.writeln("}");
document.writeln(".dform-tip-errer {");
document.writeln("  background-color: #CF301A;");
document.writeln("}");
document.writeln(".dform-tip a {");
document.writeln("  display: inline-block;");
document.writeln("  padding: 0 20px;");
document.writeln("  margin-left:10px;");
document.writeln("  background-color: #FFE924;");
document.writeln("  color: #CF301A;");
document.writeln("}");
document.writeln(".dform-login {");
document.writeln("  padding:0;");
document.writeln("  height: 270px;");
document.writeln("  overflow: hidden;");
document.writeln("}");
document.writeln(".dform-login iframe {");
document.writeln("  height: 470px;");
document.writeln("  margin-top: -180px;");
document.writeln("}");
document.writeln(".theme-signin {");
document.writeln("  margin: -50px -20px -50px 90px;");
document.writeln("  text-align:left;");
document.writeln("  font-size: 14px;");
document.writeln("}");
document.writeln(".theme-signin h4 {");
document.writeln("  color:#999;");
document.writeln("  font-weight:100;");
document.writeln("  margin-bottom: 20px;");
document.writeln("  font-size: 12px;");
document.writeln("}");
document.writeln(".theme-signin li {");
document.writeln("  padding-left: 80px;");
document.writeln("  margin-bottom: 15px;");
document.writeln("}");
document.writeln(".theme-signin li strong {float: left;margin-left: -80px;width: 80px;text-align: right;line-height: 32px;}");
document.writeln(".theme-signin .btn {margin-bottom: 10px;}");
document.writeln(".theme-signin p {font-size: 12px;color: #999;}");
document.writeln(".theme-desc, .theme-version {padding-top: 0}");
document.writeln("#shipintc{height: 380px;overflow: hidden;}");
document.writeln("</style>");
document.writeln("<script src='//player.polyv.net/script/polyvplayer.min.js'></script>");
document.writeln("<script type=\"text/javascript\" src=\"/ckplayer/ckplayer.js\" charset=\"utf-8\"></script>");

function ckplayer_status(str) {
    var _nn = 0;
    _nn += 1;
    if (_nn > 100) {
        _nn = 0;
        document.getElementById('statusvalue').value = '';
    }
    document.getElementById('statusvalue').value = str + '\n' + document.getElementById('statusvalue').value;
}

jQuery(document).ready(function($) {
    $('.theme-poptit .close').click(function() {
        $('.theme-popover-mask').fadeOut(100);
        $('.theme-popover').slideUp(200);
    })

})

function spgb() {
    document.getElementById("theme-popover").style.display = 'none';
}

function openNewDiv(sid, id) {
    if (id !== null || id !== undefined || id !== '') {
        if (id.length > 20) {
            $('.theme-popover-mask').fadeIn(100);
            $('.theme-popover').slideDown(200);
            x_shipin(id);
        } else {
            $('.theme-popover-mask').fadeIn(100);
            $('.theme-popover').slideDown(200);
            l_shipin(id);
        }
    }
}

function l_shipin(id) {
    document.getElementById("shipintc").innerHTML += "<div id=\"a" + id + "\"></div>";
    var flashvars = {
        f: 'http://shipin.xnekyy.com/swf/yyjj_' + id + '.mp4',
        c: 0,
        i: 'http://shipin.xnekyy.com/swf/yyjj_' + id + '.png',
    };
    var params = {
        bgcolor: '#FFF',
        allowFullScreen: true,
        allowScriptAccess: 'always',
        wmode: 'transparent'
    };
    CKobject.embedSWF('/ckplayer/ckplayer.swf', 'a' + id, 'ckplayer_a' + id, '550', '380', flashvars, params);

}

function x_shipin(id) {
    document.getElementById("shipintc").innerHTML += "<div class='shipina4' id='plv_" + id + "'></div>";
    var player = polyvObject('#plv_' + id).videoPlayer({
        'width': '550',
        'height': '380',
        'vid': id,
    });
}

document.writeln("<div class=\"theme-popover\" id=\"theme-popover\">");
document.writeln("<div class=\"theme-poptit\">");
document.writeln("<a href=\"javascript:;\" title=\"关闭\" onclick=\"spgb()\" class=\"close\">×</a>");
document.writeln("<h3>成都西南儿童医院视频</h3>");
document.writeln("</div>");
document.writeln("<div class=\"theme-popbod dform\" id=\"shipintc\">");
document.writeln("</div>");
document.writeln("</div>");
document.writeln("<div class=\"theme-popover-mask\"></div>");