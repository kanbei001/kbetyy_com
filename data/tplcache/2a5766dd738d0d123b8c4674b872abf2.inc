<tr height="33">
          <td class="bg_zjmz">[field:zjxm function='html2text(@me)'/]</td>
          [field:zztime runphp=yes]
          $ysarr=array("周一","周二","周三","周四","周五","周六","周日");
          $arr=explode(",",@me);
          @me = "";
          for($index=0;$index
            <count($ysarr);$index++){
$ks=0;
foreach($arr as $k)
{
if($k==$ysarr[$index])
{
$ks=1;
}
}
if($ks==1)
{
@me.="
          <td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>预约</a></td>
          ";
          }
          else
          {
          @me.="
          <td>&nbsp;</td>
          ";
          }
          
          }
          [/field:zztime] </tr>