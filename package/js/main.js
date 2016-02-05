$(document).ready(function(){
	// 滚动条发生滚动
	$(window).scroll(function() {
		// 完成一些操作
		var top = $(document).scrollTop();			//滑动的距离
		var menu = $('#menu');						//获取菜单
		var items = $('#content').find('.item');	//获取项目
		var currentId = '';

		items.each(function(){
			var m = $(this);
			var itemTop = m.offset().top;			//获取每一个项目到顶部距离
			if(top > itemTop - 160){
				currentId = '#' + m.attr('id');
			} else {
				return false;
			}
		});
		// 给相应楼层的a 设置 current, 取消其他链接的current
		var currentLink = menu.find('.current');
		if(currentId && currentLink.attr('href') != currentId) {
			currentLink.removeClass('current');
			menu.find("[href='"+ currentId +"']").addClass('current');
		}
	});
});