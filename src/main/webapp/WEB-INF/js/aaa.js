jQuery(document).ready(function() {
	
	jQuery(".sect").click(function(){
		var text=jQuery(this).text();
		jQuery.getJSON('/CRM/userController/select?c_status='+text,function(r) {
			if(r.length > 0){
				var dataStr = "<table id='userlist' class='table table-condensed table-hover' style='margin-left: 200px;width:800px;'><tr><th>ID</th><th>用户名</th><th>教育水平</th><th>手机号</th><th>QQ</th><th>邮箱地址</th><th>状态</th><th>创建日期</th><th>服务员工ID</th></tr>";
				jQuery(r).each(function(i,user){
				
					dataStr += 
						"<tr><td align='center' class='txlrow' id='c_id' >" + user.id
						+"</td><td align='center' class='txlrow' id='c_name'>"+user.c_name
						+ "</td><td align='center' class='txlrow' id='c_education'>" + user.c_education 
						+ "</td><td align='center' class='txlrow' id='c_phone'>" + user.c_phone
						+"</td><td align='center' class='txlrow' id='c_qq'>"+user.c_qq
						+"</td><td align='center' class='txlrow' id='c_email'>"+user.c_email
						+"</td><td align='center' class='txlrow' id='c_status'>"+user.c_status
						+"</td><td align='center' class='txlrow' id='c_date'>"+user.c_date
						+"</td><td align='center' class='txlrow' id='c_staffId'>"+user.c_staffId
						+"</td><td align='center' ><input type='button' value='编辑' class='edit'>"
						+"</td></tr>";
				});
				dataStr +="</table>";
				jQuery("#published").html(dataStr);
			}else {
				var dataStr = "<table id='userlist' class='table table-condensed table-hover' style='margin-left: 200px;width:800px;'><tr><th>ID</th><th>用户名</th><th>教育水平</th><th>手机号</th><th>QQ</th><th>邮箱地址</th><th>状态</th><th>创建日期</th><th>服务员工ID</th></tr>";
				dataStr+="<tr><td colspan='9' style='text-align:center;'>无人员数据</td></tr>";
				dataStr += "</table>";
				jQuery("#published").html(dataStr);
			}
		});
	});
	
	jQuery(".types").click(function(){
		var dataStr = "<table><tr><td><select id='usertype' name='selecttype' class='selectpicker show-tick form-control'"+
	"data-live-search='false' size='1'><option value='0'  selected='selected'>姓名查询</option><option value='1'>手机号查询</option>" +
	"<option value='2'>编号查询</option><option value='3'>咨询师查询</option></select></td></tr><tr><td>请输入:</td>"+
	"<td><input type='text' id='conten' class='form-control'/></td><td><input type='button' class='but btn btn-success' value='提交'/></td></tr></table>";
		jQuery("#published").html(dataStr);
	});
	
	jQuery(document).on({
		"click":function(){
			if(jQuery(this).val()=="确定"){
				var customer=jQuery(this).parents().parents().children("#c_id").children('input').val()+","
				+jQuery(this).parents().parents().children("#c_name").children('input').val()+","
				+jQuery(this).parents().parents().children("#c_education").children('input').val()+","
				+jQuery(this).parents().parents().children("#c_phone").children('input').val()+","
				+jQuery(this).parents().parents().children("#c_qq").children('input').val()+","
				+jQuery(this).parents().parents().children("#c_email").children('input').val()+","
				+jQuery(this).parents().parents().children("#c_status").children('input').val()+","
				+jQuery(this).parents().parents().children("#c_date").children('input').val()+","
				+jQuery(this).parents().parents().children("#c_staffId").children('input').val()
				//利用JSON传送数据
				jQuery.getJSON('/CRM/userController/edit?customer='+customer,function(r) {
				})
			}
			str = jQuery(this).val()=="编辑"?"确定":"编辑";  
			jQuery(this).val(str);   // 按钮被点击后，在“编辑”和“确定”之间切换
			jQuery(this).parent().parent().find(".txlrow").each(function() {  // 获取当前行的其他单元格
				var obj_text = jQuery(this).find("input:text");    // 判断单元格下是否有文本框
				if(obj_text.length<=0){
					// 如果没有文本框，则添加文本框使之可以编辑
					jQuery(this).html("<input style='width:80px' type='text' value='"+jQuery(this).text()+"'>");
				}else{
					jQuery(this).html(obj_text.val()); 
				}   
			});
		}
	},".edit");
});
	jQuery(function(){
		jQuery(document).on({
			"click":function(){
				var types=jQuery("#usertype").val();
				var conten=jQuery("#conten").val();
				jQuery.getJSON('/CRM/userController/typeSelect?types='+types+'&conten='+conten,function(r) {
					if(r.length > 0){
						var dataStr = "<table id='userlist' class='table table-condensed table-hover' style='margin-left: 200px;width:800px;'><tr><th>ID</th><th>用户名</th><th>教育水平</th><th>手机号</th><th>QQ</th><th>邮箱地址</th><th>状态</th><th>创建日期</th><th>服务员工ID</th></tr>";
						jQuery(r).each(function(i,user){
							dataStr += 
								"<tr><td align='center' class='txlrow' id='c_id' >" + user.id
								+"</td><td align='center' class='txlrow' id='c_name'>"+user.c_name
								+ "</td><td align='center' class='txlrow' id='c_education'>" + user.c_education 
								+ "</td><td align='center' class='txlrow' id='c_phone'>" + user.c_phone
								+"</td><td align='center' class='txlrow' id='c_qq'>"+user.c_qq
								+"</td><td align='center' class='txlrow' id='c_email'>"+user.c_email
								+"</td><td align='center' class='txlrow' id='c_status'>"+user.c_status
								+"</td><td align='center' class='txlrow' id='c_date'>"+user.c_date
								+"</td><td align='center' class='txlrow' id='c_staffId'>"+user.c_staffId
								+"</td><td align='center' ><input type='button' value='编辑' class='edit'>"
								+"</td></tr>";
						});
						dataStr +="</table>";
						jQuery("#published").html(dataStr);
					}else {
						var dataStr = "<table id='userlist' class='table table-condensed table-hover' style='margin-left: 200px;width:800px;'><tr><th>ID</th><th>用户名</th><th>教育水平</th><th>手机号</th><th>QQ</th><th>邮箱地址</th><th>状态</th><th>创建日期</th><th>服务员工ID</th></tr>";
						dataStr+="<tr><td colspan='9' style='text-align:center;'>无人员数据</td></tr>";
						dataStr += "</table>";
						jQuery("#published").html(dataStr);
					}
				});
			}
		},".but");
	});

