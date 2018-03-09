<?php
$z[0]=Array("field","",114,136);
$z[0][4]['name']="typename";
$z[1]=Array("field","",176,198);
$z[1][4]['name']="keywords";
$z[2]=Array("field","",237,262);
$z[2][4]['name']="description";
$z[3]=Array("global","",312,344);
$z[3][4]['name']="cfg_templets_skin";
$z[4]=Array("global","",405,437);
$z[4][4]['name']="cfg_templets_skin";
$z[5]=Array("include","",474,509);
$z[5][4]['filename']="head.htm";
$z[6]=Array("channel"," <span class=\"option\" id=\"a[field:global name=autoindex runphp=\"yes\"]@me=@me+1;[/field:global]\">[field:typename/]</span> ",1543,1723);
$z[6][4]['type']="son";
$z[6][4]['row']="5";
$z[6][4]['typeid']="5";
$z[7]=Array("channelartlist","\n      <ul class=\"{dede:global name=itemindex runphp='yes'}if(@me==1){@me='block';}else{@me='none';}{/dede:global} a{dede:global.itemindex/}-1\">\n        {dede:arclist row=\"6\" titlelen='50' addfields='zjxm,zjcz,cysj,zjdt,zysc,zjjj,zjxq' channelid='19'}\n        <li>\n          <div class=\"img\"> <img src=\"[field:zjdt function='GetOneImgUrl(@me,1)'/]\"> </div>\n          <div class=\"inform\">\n            <p class=\"zj_name\"><span>专家</span>[field:zjxm function='html2text(@me)'/]</p>\n            <p class=\"zj_cv\"><span>简介</span>[field:zjjj function='cn_substr(Html2text(\"@me\"),35)'/]……</p>\n            <p class=\"zj_des\"><span>擅长</span>[field:zysc function='cn_substr(Html2text(\"@me\"),80)'/]……</p>\n            <div class=\"btn\"><a href=\"/swt/\" class=\"phone\">电话咨询</a> <a href=\"/swt/\" class=\"yel\">预约挂号</a></div>\n          </div>\n         </li>\n        {/dede:arclist}\n      </ul>\n      ",1762,2748);
$z[7][4]['row']="5";
$z[7][4]['typeid']="83,84,85,86,87";
$z[8]=Array("include","",2767,2809);
$z[8][4]['filename']="common_yyhj.htm";
$z[9]=Array("include","",3440,3475);
$z[9][4]['filename']="foot.htm";

?>