jQuery(function(){
	
	jQuery("#addAndput").click(function(){
		
		var dataStr=
				"<a href='/CRM/userController/put'>导出</a>" +
				"<form action='/CRM/userController/add' method='post' enctype='multipart/form-data'>title:<input type='text' name='title' style='width: 100px;'/><input type='file' id='add' name='aaa'><input type='submit' style='height: 100px;width: 50px'></form>" 
				jQuery("#published").html(dataStr);
	});
});
