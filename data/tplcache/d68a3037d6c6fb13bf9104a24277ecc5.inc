<tr height="33">
                        <td class="bg_zjmz">[field:zjxm function='html2text(@me)'/]</td>               
[field:zztime runphp=yes]
$ysarr=array("周一","周二","周三","周四","周五","周六","周日",);
$arr=explode(",",@me);
@me = "";
for($index=0;$index<count($ysarr);$index++){
@me.="<td>&nbsp;$ysarr[$index]</td>";
}
[/field:zztime]
</tr>