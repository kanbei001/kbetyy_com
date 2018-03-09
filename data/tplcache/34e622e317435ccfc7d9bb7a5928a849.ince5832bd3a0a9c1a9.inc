<?php
$z[0]=Array("zjxm","",62,101);
$z[0][4]['function']="html2text(@me)";
$z[1]=Array("zztime","\r\n\$ysarr=array(\"周一\",\"周二\",\"周三\",\"周四\",\"周五\",\"周六\",\"周日\",);\r\n\$arr=explode(\",\",@me);\r\n@me = \"\";\r\nfor(\$index=0;\$index<count(\$ysarr);\$index++){\r\n\$k=0;\r\nforeach(\$arr as \$k)\r\n{\r\nif(\$k==\$ysarr[\$index])\r\n{\r\n\$k=1;\r\n}\r\n}\r\n@me.=\"<td>&nbsp;\$k</td>\";\r\n}\r\n",123,427);
$z[1][4]['runphp']="yes";

?>