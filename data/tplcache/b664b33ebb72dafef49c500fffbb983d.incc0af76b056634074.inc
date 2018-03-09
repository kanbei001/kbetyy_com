<?php
$z[0]=Array("zjxm","",62,101);
$z[0][4]['function']="html2text(@me)";
$z[1]=Array("zztime","\r\n\$arr=explode(\",\",@me);\r\n@me = \"\";\r\nfor(\$index=0;\$index<7;\$index++){\r\nforeach(\$arr as \$k)\r\n{\r\nif(\$k==\"周一\" || \$k==\"周二\" || \$k==\"周三\" || \$k==\"周四\" || \$k==\"周五\" || \$k==\"周六\" || \$k==\"周日\")\r\n{\r\n@me.=\"<td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>预约</a></td>\";\r\n}\r\nelse\r\n{\r\n@me.=\"<td>&nbsp;</td>\";\r\n}\r\n\r\n}\r\n\r\n}\r\n",123,518);
$z[1][4]['runphp']="yes";

?>