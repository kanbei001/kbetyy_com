<?php
$z[0]=Array("global","if(@me==1){@me='block';}else{@me='none';}",11,107);
$z[0][4]['name']="itemindex";
$z[0][4]['runphp']="yes";
$z[1]=Array("global","",109,133);
$z[1][4]['name']="itemindex";
$z[2]=Array("arclist","<!--channelid=\"18\"-->\r\n          <h2>在这里，了解患者康复之路</h2>\r\n          <h3 style=\"margin-left: 0px\">\r\n            <div class=\"case_before\"><img src=\"[field:global.cfg_templets_skin/]/images/case_before.png\"></div>\r\n            <img src=\"[field:zlqpic function='GetOneImgUrl(@me,1)'/]\"></h3>\r\n          <h3>\r\n            <div class=\"case_after\"><img src=\"[field:global.cfg_templets_skin/]/images/case_after.png\"></div>\r\n            <img src=\"[field:zlhpic function='GetOneImgUrl(@me,1)'/]\"></h3>\r\n          <h4><img src=\"/style/images/kf.jpg\"></h4>\r\n          <ul>\r\n            <li style=\"margin-left: 0px\">\r\n              <p><span class=\"s1\">治疗前</span>[field:zlqh function='cn_substr(Html2text(\"@me\"),280)'/]</p>\r\n            </li>\r\n            <li>\r\n              <p><span>治疗后</span>[field:zlh function='cn_substr(Html2text(\"@me\"),270)'/]<a href=\"[field:arcurl/]\">【详细】</a></p>\r\n            </li>\r\n          </ul>\r\n          ",136,1210);
$z[2][4]['row']="1";
$z[2][4]['titlelen']="50";
$z[2][4]['addfields']="zlqh,zlh,zlqpic,zlhpic";
$z[2][4]['channelid']="18";
$z[2][4]['flag']="h";

?>