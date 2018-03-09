<?php
$z[0]=Array("global","if(@me==1){@me='block';}else{@me='none';}",11,107);
$z[0][4]['name']="itemindex";
$z[0][4]['runphp']="yes";
$z[1]=Array("global","",109,133);
$z[1][4]['name']="itemindex";
$z[2]=Array("arclist","\r\n			   <li>\r\n                    <div class=\"img\">\r\n                        <img src=\"[field:zjdt function='GetOneImgUrl(@me,1)'/]\" style=\"width:180px;\">\r\n                    </div>\r\n                    <div class=\"inform\">\r\n                        <p>专家:[field:zjxm function='html2text(@me)'/]</p>\r\n                        <P>简介:[field:zjjj function='cn_substr(Html2text(\"@me\"),35)'/]</P>\r\n                        <p>擅长:[field:zysc function='cn_substr(Html2text(\"@me\"),35)'/]</p>\r\n                    </div>\r\n                    <a href=\"/swt/\" class=\"phone\">电话咨询</a>\r\n                    <a href=\"/swt/\" class=\"yel\">预约挂号</a>\r\n                </li>\r\n				",154,951);
$z[2][4]['row']="6";
$z[2][4]['titlelen']="50";
$z[2][4]['addfields']="zjxm,zjcz,cysj,zjdt,zysc,zjjj,zjxq";
$z[2][4]['channelid']="19";

?>