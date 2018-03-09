<ul>
      <div class="k-divbd-div">
        {dede:arclist limit="0,1" flag="p"}
        <a href="[field:arcurl/]"><img src="[field:litpic/]"/></a>
        <div class="head">[field:fulltitle/]</div>
        <p class='info'>[field:infos/]……<a href="[field:arcurl/]">[详细]</a></p>
        {/dede:arclist}
        <div class="k-divbd-div1">
          <div class="k-divbd-div2 k-divbd-div3">
            {dede:arclist limit="1,3"}
            <p> <a href="[field:arcurl/]">[field:fulltitle/]</a> <span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span> </p>
            {/dede:arclist}
          </div>
          <div class="k-divbd-div3">
            {dede:arclist limit="3,3"}
            <p> <a href="[field:arcurl/]">[field:fulltitle/]</a> <span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span> </p>
            {/dede:arclist}
          </div>
        </div>
      </div>
    </ul>