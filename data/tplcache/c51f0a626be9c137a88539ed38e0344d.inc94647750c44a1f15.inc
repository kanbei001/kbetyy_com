<?php
$z[0]=Array("global","if(@me==1){@me='block';}else{@me='none';}",11,107);
$z[0][4]['name']="itemindex";
$z[0][4]['runphp']="yes";
$z[1]=Array("global","",109,133);
$z[1][4]['name']="itemindex";
$z[2]=Array("arclist","\r\n				 <h2>在这里，了解患者康复之路</h2>\r\n                  <h3 style=\"margin-left: 0px\">\r\n				  <img src=\"[field:zlqpic function='GetOneImgUrl(@me,1)'/]\"></h3>\r\n                  <h3><img src=\"[field:zlhpic function='GetOneImgUrl(@me,1)'/]\"></h3>\r\n                  <h4><img src=\"/style/images/kf.jpg\"></h4>\r\n                  <ul>\r\n                  <li style=\"margin-left: 0px\"><p><span class=\"s1\">治疗前</span>[field:zlqh function='cn_substr(Html2text(\"@me\"),280)'/]</p></li>\r\n                  <li><p><span>治疗后</span>[field:zlh function='cn_substr(Html2text(\"@me\"),270)'/]<a href=\"[field:arcurl/]\">【详细】</a></p></li>\r\n                  </ul>\r\n				  ",141,924);
$z[2][4]['row']="1";
$z[2][4]['titlelen']="50";
$z[2][4]['addfields']="zlqh,zlh,zlqpic,zlhpic";
$z[2][4]['channelid']="18";

?>