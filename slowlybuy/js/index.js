$(function(){
	//顶部菜单发送请求
	$.ajax({
		url:'http://mmb.ittun.com/api/getindexmenu',
		success:function(data){
			//console.log(data);
			var temHtml = template('temMeau',data);		
			//console.log(temHtml);	
			$('.meauList').html(temHtml);
		}
	})
	//商品列表请求
	$.ajax({
		url:'http://mmb.ittun.com/api/getmoneyctrl',
		success:function(data){
			console.log(data);
			var temPro=template('temList',data);
			$('.media').html(temPro);
		}
	})
})