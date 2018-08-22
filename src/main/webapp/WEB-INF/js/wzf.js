jQuery(function(){
		jQuery(document).on({
			"click":function(){
		 obj = document.getElementsByName("subBox");
		   var userid=[];
		   for (var k in obj) {
			   if(obj[k].checked){
				   if(k==obj.length-1){
					   userid +=obj[k].value;
				   }else{
					   userid +=obj[k].value+",";
				   }
		        	
			   }
		    }
		    jQuery.getJSON('/CRM/userController/STSR?userid='+userid,function(r) {
		    	if(r.length > 0){
					var dataStr = "<table class='table table-condensed table-hover' style='margin-left:300px;;width:800px;'>"
					+"<tr><th><input id='subm' type='button' value='分配'/></th></tr>" +
							"<tr>" +
							"<th></th>" +
							"<th>ID</th>" +
							"<th>用户名</th>" +
							"<th>教育水平</th>" +
							"<th>手机号</th>" +
							"<th>QQ</th>" +
							"<th>邮箱地址</th>" +
							"<th>状态</th>" +
							"<th>创建日期</th>" +
							"<th>服务员工</th>" +
							"</tr>";
					jQuery(r).each(function(i,user){
						dataStr += "<tr><td><input name='subBox' type='checkbox' value='"+user.id+"'/></td>"+
						"<td  class='txlrow' id='c_id' >"+user.id+"</td>"+
						"<td  class='txlrow' id='c_name'>"+user.c_name+"</td>"+
						"<td  class='txlrow' id='c_education'>"+user.c_education+"</td>"+
						"<td  class='txlrow' id='c_phone'>"+user.c_phone+"</td>"+
						"<td  class='txlrow' id='c_qq'>"+user.c_qq+"</td>"+
						"<td  class='txlrow' id='c_email'>"+user.c_email+"</td>"+
						"<td  class='txlrow' id='c_status'>"+user.c_status+"</td>"+
						"<td  class='txlrow' id='c_date'>"+user.c_date+"</td>"+
						"<td  class='txlrow' id='c_staffId'>"+user.c_staffId+"</td></tr>"
					});
					dataStr += "</table>";
					jQuery("#statistics").html(dataStr);
				}else {
					var dataStr = "<table id='userlist' class='table table-condensed table-hover' style='margin-left: 200px;width:800px;'><tr><th>ID</th><th>用户名</th><th>教育水平</th><th>手机号</th><th>QQ</th><th>邮箱地址</th><th>状态</th><th>创建日期</th><th>服务员工ID</th></tr>";
					dataStr+="<tr><td colspan='9' style='text-align:center;'>无人员数据</td></tr>";
					dataStr += "</table>";
					jQuery("#statistics").html(dataStr);
				}
		    });
			}
		},"#subm");
});


