<tr height="33">
                        <td class="bg_zjmz">[field:zjxm function='html2text(@me)'/]</td>               
[field:zztime runphp=yes]
$arr=explode(",",@me);
@me = "";
for($index=0;$index<7;$index++){
foreach($arr as $k)
{
@me.="<td>$k</td>";
}

}
[/field:zztime]
</tr>