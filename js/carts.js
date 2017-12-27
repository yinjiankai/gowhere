//顶部的tit
$(function() {
	$('#four').mouseenter(function() {
		$('#four dl dt #ob').css({
			'background': 'url(//source.qunarzz.com/common/hf/header_new_v7.png) -153px -28px no-repeat'
		});
		$('#four dl dt a').css({
			'color': '#0084bb'
		});
		$('#four dd').css({
			'display': 'block'
		})
		$('#four dd div').hover(function() {
			$('#four dl dt a').css({
				'color': '#0084bb'
			});
			$('#four dd div a').css({
				'color': '#666'
			}).eq($(this).index()).css({
				'color': '#fff'
			})

			$('#four dd div').css({
				'background': '#fff'
			}).eq($(this).index()).css({
				"background": "#0084bb"
			})
		})
	})
	$('#four').mouseleave(function() {
		$('#four dl dt #ob').css({
			'background': 'url(//source.qunarzz.com/common/hf/header_new_v7.png) -153px -21px no-repeat'
		});

		$('#four dl dt a').css({
			'color': '#666'
		});
		$('#four dd').css({
			'display': 'none'
		})
	})
});

$(function() {

	//根据cookie中保存的数据生成DOM结构

	$.getJSON('../json/tab4.json', function(res) {

		var data = res.hashMap.data.list.secondary;
		//cookie
		if(getCookie("cart")) {
			var objCookie = JSON.parse(getCookie("cart"));
		} else {
			var objCookie = {};
		}
		//cookie
		var str = "";
		for(var i in objCookie) {
			var id = i
			var spas=objCookie[i];
			//console.log(objCookie[i])
			for(var i = 0; i < data.length; i++) {

				//			console.log(data[i].productId);

				if(id == data[i].productId) {
					str = $('<div data-id="' + data[i].productId + '" class="shop_news"><div class="newsMasage_cart"><img src="' + data[i].url + '"/><a href="javascript:;">' + data[i].title + '</a>' +
						'</div><div class="price_cart"><span>' + '￥' + data[i].nowPrice + '</span>' + "/人" + '</div><div class="travelMasage_cart">' +
						'<div class="pepo"><span>' + "人数" + '</span><div id="jian">' + "-" + '</div><div id="nums">' +spas+ '</div><div id="jia">' + "+" + '</div></div>' +
						'</div><div class="money_cart">' + "￥" + '<span>' + data[i].nowPrice*spas + '</span></div><div class="handl_cart"><div class="affirm">' + "立即支付" + '</div>' +
						'<div class="remove">' + "删除" + '</div></div></div>');
					//					console.log(str);

					$('#top .shop').append(str)
				}
			}
		}
		var rem = $('#top .shop_news .handl_cart .remove');
		//				console.log(rem.length);
		for(var i = 0; i < rem.length; i++) {
			rem[i].onclick = function() {

				$(this).closest('.shop_news').remove();

				var removds = $(this).closest('.shop_news').attr("data-id");

				delete objCookie[id];

				var strCookie = JSON.stringify(objCookie);
				setCookie("cart", strCookie, 7);

			}
		}

		var jians = $('#top .shop_news .travelMasage_cart .pepo #jian');
		var jias = $('#top .shop_news .travelMasage_cart .pepo #jia');
		//					console.log($('.money_cart'))

		for(var j = 0; j < jians.length; j++) {
			var daty = jians[j];

			daty.onclick = function() {
				var pid = $(this).closest('.shop_news').attr("data-id");
				//console.log(pid);
				for(var i = 0; i < data.length; i++) {
					if(pid == data[i].productId) {
						var only = data[i].nowPrice;
						//console.log(only)
					}
				}

				var thid = Number($(this).next().html());

				thid--;

				$(this).next().html(thid);
				if(thid < 1) {
					thid = 1;
					$(this).next().html(thid);

				} else {
					$(this).parent().parent().next().children().html(only * thid)
				}
			}
		}

		for(var j = 0; j < jias.length; j++) {
			var daty = jias[j];
			daty.onclick = function() {
				var pid = $(this).closest('.shop_news').attr("data-id");
				//console.log(pid);
				for(var i = 0; i < data.length; i++) {
					if(pid == data[i].productId) {
						var only = data[i].nowPrice;
						//console.log(only)
					}
				}
				var thid = Number($(this).prev().html());
				thid++;
				$(this).prev().html(thid);
				$(this).parent().parent().next().children().html(only * thid)
				if(thid > 8) {
					thid = 8;
					$(this).prev().html(thid);
				}
			}
		}

	})

})