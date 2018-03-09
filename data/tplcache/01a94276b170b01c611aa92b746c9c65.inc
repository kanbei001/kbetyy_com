<ul class="{dede:global name=itemindex runphp='yes'}if(@me==1){@me='block';}else{@me='none';}{/dede:global} a{dede:global.itemindex/}-1">
               {dede:arclist row="1" titlelen='50' addfields='zjxm,zjcz,cysj,zjdt,zysc,zjjj,zjxq' channelid='19'}
			   <li>
                    <div class="img">
                        <img src="[field:zjdt function='GetOneImgUrl(@me,1)'/]" style="width:164px;">
                    </div>
                    <div class="inform">
                        <p>专家:[field:zjxm function='html2text(@me)'/]</p>
                        <P>简介:[field:zjjj/]</P>
                        <p>擅长:[field:zysc/]</p>
                    </div>
                    <a href="/swt/" class="phone">电话咨询</a>
                    <a href="/swt/" class="yel">预约挂号</a>
                </li>
				{/dede:arclist}
            </ul>