<li>
		        	<a href="[field:arcurl/]">
		        		<img src="[field:litpic/]">
		        	</a><div class="pagedoc-li">
		        		<div class="pagedoc-li1">
		        			<h5>[field:title/]</h5>[field:zjcz/]
		        		</div>
		        		<div class="pagedoc-li2" [field:typeid runphp="yes"]if(@me==147||@me==752){@me="style='height:85px;'";}[/field:typeid]>
		        			<h6>诊疗擅长</h6>
		        			<p [field:typeid runphp="yes"]if(@me==147||@me==752){@me="style='display:none'";}else{@me="style='display:block'";}[/field:typeid]>
		        			    [field:zysc runphp="yes"]@me=str_replace('擅长：','',@me);@me=mb_substr(@me,0,12,"utf-8");[/field:zysc]
		        			</p>
		        			<p [field:typeid runphp="yes"]if(@me==147||@me==752){@me="style='display:block'";}else{@me="style='display:none'";}[/field:typeid]>
		        			    [field:zysc runphp="yes"]@me=str_replace('擅长：','',@me);@me=mb_substr(@me,0,42,"utf-8");[/field:zysc]
		        			</p>
		        		</div>
		        		<div class="pagedoc-li2" [field:typeid runphp="yes"]if(@me==147||@me==752){@me="style='display:none'";}[/field:typeid]>
		        			<h6>医生简介</h6>
		        			<p>[field:zjjj/]</p>
		        		</div>
		        		<div class="pagedoc-li2">
		        			<a class="pagedoc-li-a" href="[field:arcurl/]">专家详情</a>
		        			<a href="javascript:onKST();">预约挂号</a>
		        		</div>
		        	</div>
		        </li>