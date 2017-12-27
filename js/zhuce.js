	
///yanzhengma
		$(function(){
			//$("#content #page_con form .yanzheng input").val();
			var flge = false;
			var verifyCode = new GVerify("v_container1");
			$('#content #page_con form .yanzheng input').blur(function(){
			var nice = $("#content #page_con form .yanzheng input").val();
			//var res = verifyCode.validate(nice);
				if(!verifyCode.validate(nice)){
					alert("验证码错误请重新输入")
				}else{
					flge = true;
				}
				
			})
			

		
//shoujihao


			var flaa = false;
			$('#content #page_con form .pass input').blur(function(){
			var psd=$('#content #page_con form .pass input').val().length;
			//console.log(psd)
				
			if(psd<8){
				$("#content #page_con form .pass .trues").css({
					"display":"block"
				})
				$("#content #page_con form .pass .trues").html("长度不能小于8位")
				
			}else{
				$("#content #page_con form .pass .trues").css({
					"display":"none"
				})	
				flaa = true;
			}if(psd==''){
				$("#content #page_con form .pass .trues").html("不能为空")
			}
			
			
			})		


		///手机号码验证
		
					var flgg = false;
					$("#content #page_con form .numbers input").blur(function(){
					   var  username =$("#content #page_con form .numbers input").val();
						var reg=/^1[34578]\d{9}$/;
					   var noi=$("#content #page_con form .numbers .trues");
					   var nois=$("#content #page_con form .numbers .beizhu");
					   var bei=$('#content #page_con form .numbers .bei');
					   if(reg.test(username)==false){
					   			nois.css({"display":"none"})
					 			noi.css({"display":"block"});
					 			$("#content #page_con form .numbers .bei").css({"display":"none"});
					   }else{
					 			noi.css({"display":"none"});
					 			bei.css({"display":"block"})
					 			flgg = true;
					   }
					   if(username==''){
					 			noi.css({"display":"none"});
					   	
					   	nois.css({"display":"block"})
					   }
					   
				})
	

	
		$("#content #page_con form .yess .btns").click(function(){
			if(flge&&flaa&&flgg){
				var sss={};
				sss[$("#content #page_con form .numbers input").val()]=$('#content #page_con form .pass input').val();
				var sss1=JSON.stringify(sss);
				console.log(sss1);
				setCookie("use",sss1,7)
				window.open("denglu.html")
			}
		})
	})




