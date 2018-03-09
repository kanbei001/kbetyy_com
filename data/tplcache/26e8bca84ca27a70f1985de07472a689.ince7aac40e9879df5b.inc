<?php
$z[0]=Array("zjxm","",61,100);
$z[0][4]['function']="html2text(@me)";
$z[1]=Array("zztime","\n\$ysarr=array(\"周一\",\"周二\",\"周三\",\"周四\",\"周五\",\"周六\",\"周日\");\n\$arr=explode(\",\",@me);\n@me = \"\";\nfor(\$index=0;\$index<count(\$ysarr);\$index++){\n\$ks=0;\nforeach(\$arr as \$k)\n{\nif(\$k==\$ysarr[\$index])\n{\n\$ks=1;\n}\n}\nif(\$ks==1)\n{\n@me.=\"<td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>预约</a></td>\";\n}\nelse\n{\n@me.=\"<td>&nbsp;</td>\";\n}\n\n}\n",121,526);
$z[1][4]['runphp']="yes";

?>