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
$z[5]=Array("include","",468,503);
$z[5][4]['filename']="head.htm";
$z[6]=Array("field","",551,573);
$z[6][4]['name']="position";
$z[7]=Array("global","",782,814);
$z[7][4]['name']="cfg_templets_skin";
$z[8]=Array("global","",923,955);
$z[8][4]['name']="cfg_templets_skin";
$z[9]=Array("list","\n        <li>\n          <div class=\"lbslt\"> <a href=\"[field:arcurl/]\" target=\"_blank\"><img src=\"[field:picname/]\"  alt=\"\"></a> </div>\n          <div class=\"lbbiaoti\">\n            <p><a href=\"[field:arcurl/]\" class=\"fl\" target=\"_blank\">[field:title/]</a></p>\n          </div>\n          <div class=\"lbneirong ml10 mr10\">\n            <p>[field:description function=\"cn_substr(@me,100)\"/]...【<a href=\"[field:arcurl/]\" target=\"_blank\">详细</a>】</p>\n          </div>\n        </li>\n        ",1319,1846);
$z[9][4]['pagesize']="12";
$z[10]=Array("pagelist","",1915,1992);
$z[10][4]['listitem']="info,index,end,pre,next,pageno,option";
$z[10][4]['listsize']="2";
$z[11]=Array("global","",2285,2317);
$z[11][4]['name']="cfg_templets_skin";
$z[12]=Array("global","",2506,2538);
$z[12][4]['name']="cfg_templets_skin";
$z[13]=Array("arclist","\n                <li> <a href=\"[field:arcurl/]\" target=\"_blank\">\n                  <div class=\"wz_doc1\"><img src=\"[field:zjdt/]\">\n                    <div class=\"wz_doctext\"> <span> <b>[field:zjxm function='html2text(@me)'/]</b></span> <i>[field:zjcz/]</i>\n                      <div class=\"wz_doclink\"> <b>专业擅长：</b>[field:cysj/]</div>\n                    </div>\n                  </div>\n                  </a> </li>\n                ",2835,3402);
$z[13][4]['row']="4";
$z[13][4]['titlelen']="50";
$z[13][4]['typeid']="5";
$z[13][4]['addfields']="zjxm,zjcz,cysj,zjdt,zysc,zjjj,zjxq";
$z[13][4]['channelid']="19";
$z[14]=Array("global","",5996,6028);
$z[14][4]['name']="cfg_templets_skin";
$z[15]=Array("global","",6171,6203);
$z[15][4]['name']="cfg_templets_skin";
$z[16]=Array("global","",6368,6400);
$z[16][4]['name']="cfg_templets_skin";
$z[17]=Array("arclist","\n                             <li>\n                                <div class=\"picd\">\n                                    <a href=\"[field:arcurl/]\" target=\"_blank\"><img src=\"[field:zlqpic/]\"></a>\n                                </div>\n                                <div class=\"title\"><a href=\"[field:arcurl/]\" target=\"_blank\">[field:title/]</a></div>\n                            </li>\n                                ",6893,7425);
$z[17][4]['row']="10";
$z[17][4]['titlelen']="50";
$z[17][4]['typeid']="6";
$z[17][4]['addfields']="zlqh,zlh,zlqpic,zlhpic";
$z[17][4]['channelid']="18";
$z[18]=Array("sql","\n                  <li>\n                    <div class=\"picd\"> \n                      <!--<a href=\"[field:arcurl/]\" target=\"_blank\"><img src=\"[field:zlqpic/]\"></a>--> \n                    </div>\n                    <div class=\"title\"><!--<a href=\"[field:arcurl/]\" target=\"_blank\">--> \n                      恭喜:[field:name/] &nbsp 电话:[field:tel_hiden/] &nbsp 科室: [field:ks/] &nbsp预约成功 </div>\n                  </li>\n                  ",7536,8071);
$z[18][4]['sql']="select * From registration ORDER BY `id` DESC limit 20";
$z[19]=Array("global","",8715,8747);
$z[19][4]['name']="cfg_templets_skin";
$z[20]=Array("arclist","\n        <tr height=\"33\">\n          <td class=\"bg_zjmz\">[field:zjxm function='html2text(@me)'/]</td>\n          [field:zztime runphp=yes]\n          \$ysarr=array(\"周一\",\"周二\",\"周三\",\"周四\",\"周五\",\"周六\",\"周日\");\n          \$arr=explode(\",\",@me);\n          @me = \"\";\n          for(\$index=0;\$index\n            <count(\$ysarr);\$index++){\n\$ks=0;\nforeach(\$arr as \$k)\n{\nif(\$k==\$ysarr[\$index])\n{\n\$ks=1;\n}\n}\nif(\$ks==1)\n{\n@me.=\"\n          \n          <td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>预约</a></td>\n          \";\n          }\n          else\n          {\n          @me.=\"\n          <td>&nbsp;</td>\n          \";\n          }\n          \n          }\n          [/field:zztime] </tr>\n        ",9379,10199);
$z[20][4]['row']="4";
$z[20][4]['titlelen']="50";
$z[20][4]['typeid']="5";
$z[20][4]['addfields']="zztime,zjxm";
$z[20][4]['channelid']="19";
$z[21]=Array("global","",11270,11302);
$z[21][4]['name']="cfg_templets_skin";
$z[22]=Array("include","",14834,14869);
$z[22][4]['filename']="foot.htm";

?>