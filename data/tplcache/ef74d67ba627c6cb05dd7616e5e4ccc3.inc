<li>
        <div class="l_tit">
          <h1><a href="{dede:field name='typeurl'/}"><em>{dede:field name='typename'/}</em></a></h1>
        </div>
        <dl>
          {dede:arclist  row='1'    orderby ='click'   titlelen='40' }
          <dt> <img src="[field:picname/]"> <a href="[field:arcurl/]"> <b>[field:title/]</b>
            <p>[field:description function="cn_substr(@me,100)"/]... <span>[详细]</span></p>
            </a> </dt>
          {/dede:arclist}
          <dd> {dede:arclist  row='5'   titlelen='40'} <a href="[field:arcurl/]"><em></em>[field:title/]<span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span></a> {/dede:arclist} </dd>
        </dl>
      </li>