<?php
$z[0]=Array("global","if(@me==1){@me='block';}else{@me='none';}",11,107);
$z[0][4]['name']="itemindex";
$z[0][4]['runphp']="yes";
$z[1]=Array("global","",109,133);
$z[1][4]['name']="itemindex";
$z[2]=Array("arclist","\n        <li>\n          <div class=\"img\"> <img src=\"[field:zjdt function='GetOneImgUrl(@me,1)'/]\"> </div>\n          <div class=\"inform\">\n            <p class=\"zj_name\"><span>专家</span>[field:zjxm function='html2text(@me)'/]</p>\n            <p class=\"zj_cv\"><span>简介</span>[field:zjjj function='cn_substr(Html2text(\"@me\"),100)'/]</p>\n            <p class=\"zj_des\"><span>擅长</span>[field:zysc function='cn_substr(Html2text(\"@me\"),200)'/]</p>\n            <a href=\"/swt/\" class=\"phone\">电话咨询</a> <a href=\"/swt/\" class=\"yel\">预约挂号</a> </li>\n          </div>\n        ",146,844);
$z[2][4]['row']="6";
$z[2][4]['titlelen']="50";
$z[2][4]['addfields']="zjxm,zjcz,cysj,zjdt,zysc,zjjj,zjxq";
$z[2][4]['channelid']="19";

?>