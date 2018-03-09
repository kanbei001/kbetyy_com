<tr height="33">
                        <td class="bg_zjmz">[field:zjxm function='html2text(@me)'/]</td>
						[field:zztime runphp=yes]
$a=explode(",",@me);
@me = "";
foreach($a as $k)
{

if($k=="周一")
{
@me.="<td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>预约</a></td>";
}
else
{
@me.="<td>&nbsp;</td>";
}
if($k=="周二")
{
@me.="<td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>预约</a></td>";
}
else
{
@me.="<td>&nbsp;</td>";
}
if($k=="周三")
{
@me.="<td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>预约</a></td>";
}
else
{
@me.="<td>&nbsp;</td>";
}
if($k=="周四")
{
@me.="<td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>预约</a></td>";
}
else
{
@me.="<td>&nbsp;</td>";
}
if($k=="周五")
{
@me.="<td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>预约</a></td>";
}
else
{
@me.="<td>&nbsp;</td>";
}
if($k=="周六")
{
@me.="<td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>预约</a></td>";
}
else
{
@me.="<td>&nbsp;</td>";
}
if($k=="周日")
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