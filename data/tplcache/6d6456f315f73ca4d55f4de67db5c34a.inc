<tr height="33">
                        <td class="bg_zjmz">[field:zjxm function='html2text(@me)'/]</td>
						[field:zztime runphp=yes]
$a=explode(",",@me);
@me = "";
foreach($a as $k)
{

if($k=="周一" || $k=="周二" || $k=="周三" || $k=="周四" || $k=="周五" || $k=="周六" || $k=="周日")
{
@me.="<td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>预约</a></td>";
}
else
{
@me.="<td>&nbsp;</td>";
}

}
[/field:zztime]
                        
                    </tr>