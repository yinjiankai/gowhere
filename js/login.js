
$(function(){
			var verifyCode = new GVerify("v_container");
			var flge = false
			$("#code_input").blur(function(){
				var sssr= $("#code_input").val();
				if(!verifyCode.validate(sssr)){
					alert("验证码错误,请重新输入验证码")
				}else{
					flge =true;
				}
			})
			
			//取出cookie值
					function getCookie(name) {
						var strCookie = document.cookie;
						var arrCookie = strCookie.split("; ");
						for(var i = 0; i < arrCookie.length; i++) {
							var arr = arrCookie[i].split("=");
							if(arr[0] == name) {
								return arr[1];
							}
						}
					}
	
	
			$("#sub").click(function() {
				var ssk = $('#register_wrap #register_cont .right .top #forms .ipt .name input').val()
				var ssb = $('#register_wrap #register_cont .right .top #forms .ipt .pas input').val();
				if(getCookie("use")) {
					var objCookie = JSON.parse(getCookie("use"));
				};
				if(flge){
					
					if(objCookie[ssk]) {
						if(objCookie[ssk] == ssb) {
							//window.open("index.html")
							location.href="homepage.html"
						} else {
							alert("请确认密码是否正确");
						}
					} else {
						alert("请确认用户名是否正确");
					}
				}
				
				
				
				
			});
	
	

})
	
	

