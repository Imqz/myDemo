jQuery(document).ready(function() {
	jQuery(".department").click(function(){
		var text=jQuery(this).text();
		jQuery.getJSON('/CRM/queryCount?s_staffin='+text,function(r) {
			
			if(r.length > 0){
				var dataStr ="<table style='height: 25px;width:500px'>" +
				"<tr><th style='width: 141px; text-align: center;'>已上门客户</th>" +
				"<th style='width: 141px; text-align: center;'>死单客户数</th>" +
				"<th style='width: 141px; text-align: center;'>紧跟客户数</th><" +
				"th style='width: 141px; text-align: center;'>总分配客户数</th>" +
				"</tr>";
				jQuery(r).each(function(i,user){
					dataStr += "<tr>" +
					"<td style='width: 141px; text-align: center;'>"+user.s_visit+"</td>" +
					"<td style='width: 141px; text-align: center;'>"+ user.s_diebill + "</td>" +
					"<td style='width: 141px; text-align: center;'>"+ user.s_follow + "</td>" +
					"<td style='width: 141px; text-align: center;'>"+user.s_combination+ "</td>" +
					"</tr>";
					dataStr +="</table>"
				});
				jQuery("#published").html(dataStr);
			}else {
				var dataStr ="" +
				"<table id='userlist' style='width: 200px;border: solid;'>" +
				"<tr><th style='width: 141px; text-align: center;'>已上门客户</th>" +
				"<th style='width: 141px; text-align: center;'>死单客户数</th>" +
				"<th style='width: 141px; text-align: center;'>紧跟客户数</th><" +
				"th style='width: 141px; text-align: center;'>总分配客户数</th>" +
				"</tr>";
				dataStr+="<tr><td>无数据</td></tr>";
				dataStr += "</table>";
				jQuery("#published").html(dataStr);
			}
		});

	});
});