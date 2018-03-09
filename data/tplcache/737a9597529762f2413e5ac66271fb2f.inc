<dl>
      <dt class="typetit">
        <h1><b>{dede:field.typename/}患儿故事</b><span><a href="{dede:field.typeurl/}"> >>更多案例</a></span></h1>
      </dt>
      {dede:arclist row="3" addfields='name,sex,age,doctor,bqms,story' channelid='18' flag="h"}
      <dd><a href="[field:arcurl/]"><img src="[field:litpic/]"></a>
        <div class="child">
          <p><b>姓名：</b> [field:name/]</p>
          <p><b>性别：</b> [field:sex/]</p>
          <p><b>年龄：</b> [field:age/]岁</p>
          <p><b>主治医生：</b> [field:doctor/]</p>
          <p><b>病情描述：</b> [field:bqms/]</p>
        </div>
      </dd>
      {/dede:arclist}
      <div class="clear"></div>
    </dl>