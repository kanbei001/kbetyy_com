<dl>
      <dt class="typetit">
        <h2>
          <b>{dede:field.typename/}患儿故事</b><span><a href="{dede:field.typeurl/}">更多故事&gt;&gt;</a></span>
        </h2>
      </dt>
      {dede:arclist row="3" addfields='name,sex,age,doctor,bqms,story' channelid='18' flag="h"}
      <dd><a href="[field:arcurl/]"><img src="[field:litpic/]"></a>
        <div class="child">
          <p><b>姓名：</b> [field:name/]</p>
          <p><b>性别：</b> [field:sex/]</p>
          <p><b>年龄：</b> [field:age/]岁</p>
          <p><b>主治医生：</b> [field:doctor/]</p>
        </div>
        <div class="des"><b>病情描述：</b>[field:bqms/]<a href="[field:arcurl/]">[详情]</a></div>
      </dd>
      {/dede:arclist}
    </dl>