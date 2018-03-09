<li>
        <div  class="titles dd">
          <h1>{dede:field.typename/}患儿故事</h1>
          <div></div>
          <span><a href="{dede:field.typeurl/}"> >>更多案例</a></span><i></i> </div>
        <div class="mark"></div>
        <div class="story">
          <ul>
            {dede:arclist row="3" addfields='name,sex,age,doctor,bqms,story' channelid='18' flag="h"}
            <li class="change_mouse"> <img src="[field:litpic/]">
              <div class="child">
                <p><b><a href="[field:arcurl/]">姓名</a>：</b> [field:name/]</p>
                <p><b>性别：</b> [field:sex/]</p>
                <p><b>年龄：</b> [field:age/]岁</p>
                <p><b>主治医生：</b> [field:doctor/]</p>
                <p><b>病情描述：</b> [field:bqms/]</p>
              </div>
            </li>
            {/dede:arclist}
          </ul>
        </div>
      </li>
      <div class="clear"></div>