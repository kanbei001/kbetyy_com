<li class="{dede:global name=itemindex runphp='yes'}if(@me==1){@me='block';}else{@me='none';}{/dede:global} f{dede:global.itemindex/}">
				{dede:arclist row="1" titlelen='50' addfields='zlqh,zlh,zlqpic,zlhpic' channelid='18' flag='h'}<!--channelid="18"-->
				 <h2>在这里，了解患者康复之路</h2>
                  <h3 style="margin-left: 0px"><div class="case_before"><img src="[field:global.cfg_templets_skin/]/images/case_before.png"></div>
				  <img src="[field:zlqpic function='GetOneImgUrl(@me,1)'/]"></h3>
                  <h3><div class="case_after"><img src="[field:global.cfg_templets_skin/]/images/case_after.png"></div><img src="[field:zlhpic function='GetOneImgUrl(@me,1)'/]"></h3>
                  <h4><img src="/style/images/kf.jpg"></h4>
                  <ul>
                  <li style="margin-left: 0px"><p><span class="s1">治疗前</span>[field:zlqh function='cn_substr(Html2text("@me"),280)'/]</p></li>
                  <li><p><span>治疗后</span>[field:zlh function='cn_substr(Html2text("@me"),270)'/]<a href="[field:arcurl/]">【详细】</a></p></li>
                  </ul>
				  {/dede:arclist}
                </li>