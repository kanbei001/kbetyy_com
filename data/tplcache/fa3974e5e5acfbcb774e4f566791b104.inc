<li class="teaching-item">
					<div class="item-block">
						<h4 class="title">{dede:field.typename/}<a href="{dede:field.typeurl/}">+MORE</a></h4>
						{dede:arclist limit="0,1" flag="p"}
						<p class="item-pic"><a href="[field:arcurl/]"><img src="[field:litpic/]"/></a></p>
						{/dede:arclist}
						<div class="item-info">
							{dede:arclist limit="0,2" titlelen="100"}
							<p><a href="[field:arcurl/]">[field:title/]</a></p>
							{/dede:arclist}
						</div>
						
					</div>
				</li>