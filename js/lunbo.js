
	$(function() {
		$.getJSON('../json/lunbo.json', function(res) {
//			console.log(res);
			var resr = res.data;
			for(var i = 0; i < resr.length; i++) {

				var src = resr[i].img;

				var lis = $('<li>' + '<a href="javascript:;">' + '<img src="' + src + '">' + '</a>' + '</li>');
//				console.log(lis);
				$('#scrollImg').append(lis);

			}
			var oBanner = document.getElementById("banner");

			var oScrollImg = document.getElementById("scrollImg");
			var oFocusList = document.getElementById("focusList");
			var aLi = oScrollImg.children;
			var aFlist = oFocusList.children;

			var cloneLi = aLi[0].cloneNode(true);

			oScrollImg.appendChild(cloneLi);
			var perWidth = aLi[0].offsetWidth;
			oScrollImg.style.width = perWidth * aLi.length + "px";
			var i = 0;
			 timer = setInterval(function() {
				move();
			},2500)

			oBanner.onmouseenter = function() {
				clearInterval(timer)
			}

			for(let j = 0; j < aFlist.length; j++) {
				aFlist[j].onclick = function() {
					clearInterval(timer);
					i = j - 1;
					move();
					console.log(aFlist.length)
				}

			}
			oBanner.onmouseleave = function() {
				clearInterval(timer);
				timer = setInterval(function() {
					move();
				}, 2500)
			}

			function move() {
					i++;
					if(i == aLi.length) {
						i = 1;
						oScrollImg.style.left = 0;
					}
//					console.log(i)
					if(i==-1){
						oScrollImg.style.left = -perWidth * (aLi.length-1) + "px";
						i = aLi.length - 2;
					}
					//控制焦点显示，和i有关
					for(var j = 0; j < aFlist.length; j++) {
						aFlist[j].className = "";
					}
					
					if(i == aFlist.length) {
						aFlist[0].className = "cur";
					} else {
						aFlist[i].className = "cur";
					}

					startMove (oScrollImg, {
						"left": -perWidth * i
					});
			}

			

		})
	})
