<script>
		//修复ie7，8,9placeholder
		$(window).on('load resize',function(){
			JPlaceHolder.init();
			alert("111")
		});
		var JPlaceHolder = {
			//检测
			_check : function(){
				return 'placeholder' in document.createElement('input');
			},
			//初始化
			init : function(){
				if(!this._check()){
					this.fix();
				}
			},
			//修复
			fix : function(){
				$('[name="vplaceholder"]').remove();
				$(':input[placeholder]').each(function(index, element) {
					var self = $(this), txt = self.attr('placeholder');
					var pos = self.offset(),
						h = self.height(),
						w = self.width();

					if(pos.left==0||self.is(':hidden')){
						return;
					}

					var holder = $('<div name="vplaceholder"></div>').appendTo($('body')).css({
						position:'absolute',
						lineHeight:h+'px',
						width:(w-10)+'px',
						height:h+'px',
						left:pos.left+'px',
						top:(pos.top+5)+'px',
						overflow:'hidden',
						color:'#aaa',
						padding:'0 5px',
						fontSize:'12px',
						whiteSpace:'nowrap',
						zIndex:1
					}).text(txt);

					!!self.attr('id')&&holder.attr('id',self.attr('id')+'_pl');

					self.val()&&holder.hide();

					self.focusin(function(e) {
						holder.hide();
					}).focusout(function(e) {
						!self.val()&&holder.show();
					});
					holder.click(function(e) {
						holder.hide();
						self.focus();
					});
				});
			}
		};
	</script>