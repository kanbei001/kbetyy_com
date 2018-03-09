<ul class="{dede:global name=itemindex runphp='yes'}if(@me==1){@me='block';}else{@me='none';}{/dede:global} a{dede:global.itemindex/}-1">
        {dede:arclist row="6" titlelen='50' addfields='zjxm,zjcz,cysj,zjdt,zysc,zjjj,zjxq' channelid='19'}
        <li>
          <div class="img"> <img src="[field:zjdt function='GetOneImgUrl(@me,1)'/]"> </div>
          <div class="inform">
            <p class="zj_name"><span>专家</span>[field:zjxm function='html2text(@me)'/]</p>
            <p class="zj_cv"><span>简介</span>[field:zjjj function='cn_substr(Html2text("@me"),100)'/]</p>
            <p class="zj_des"><span>擅长</span>[field:zysc function='cn_substr(Html2text("@me"),200)'/]</p>
            <a href="/swt/" class="phone">电话咨询</a> <a href="/swt/" class="yel">预约挂号</a> </li>
          </div>
        {/dede:arclist}
      </ul>