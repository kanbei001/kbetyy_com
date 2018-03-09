<tr height="33">
                        <td class="bg_zjmz">[field:zjxm function='html2text(@me)'/]</td>
						[field:zztime runphp=yes]
$a=explode(",",@me);
@me = "";
foreach($a as $k)
{
@me.="<td><a class='bg_zjmz4' href='/swt/' rel='nofollow' target='_blank'>$k预约</a></td>";
}
[/field:zztime]
                        
                    </tr>