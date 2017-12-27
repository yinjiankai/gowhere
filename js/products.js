$(function() {
	//获取url中的参数
	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg); //匹配目标参数
		if(r != null) return unescape(r[2]);
		return null; //返回参数值
	}

	//接收URL中的参数booksId
	var id = getUrlParam('byId');
	//console.log('id:' + id);

	var str = '';
	var strs = '';
	$.getJSON('../json/tab4.json', function(res) {
		var data = res.hashMap.data.list.secondary
		//			console.log(res.hashMap.data.list.secondary)
		for(var i = 0; i < data.length; i++) {
			//				var datas=data[i]
			if(id == data[i].productId) {
				str = $('<ul><li style="dispaly:block"><a href="javascript:"><img src="' + data[i].url + '">' +
					'</a></li>' +
					'<li style="dispaly:block"><a href="javascript:"><img src="' + data[i].sightId + '">' +
					'</a></li>' +
					'<li style="dispaly:block"><a href="javascript:"><img src="' + data[i].num4 + '">' +
					'</a></li>' +
					'<li style="dispaly:block"><a href="javascript:"><img src="' + data[i].ticketTypeId + '">' +
					'</a></li></ul>');
				$('.banner_left_timg').append(str);

				strs = $('<ul><li class="smallimg-imgg"><img src="' + data[i].url + '"></li>' +
					'<li class="smallimg-imgg"><img src="' + data[i].sightId + '"></li>' +
					'<li class="smallimg-imgg"><img src="' + data[i].num4 + '"></li>' +
					'<li class="smallimg-imgg"><img src="' + data[i].ticketTypeId + '"></li></ul>');
				var pric = '￥' + data[i].nowPrice;
				
				var picebom = '￥' + data[i].nowPrice;
				var pri=data[i].nowPrice
				var tit = data[i].title;
				$('#content_wrap #content #banner_wrap .banner .banner_left .smallimg .head-3').append(strs);
				$('#content_wrap #content #banner_wrap .banner .banner_right #price_xq .pri span #js-min-price').html(pric);
				$('#content_wrap #content #days .rightday .pricess em').html(picebom);
				$('#content_wrap #content #banner_wrap .banner .banner_right h1').html(tit);
				$(document).attr("title",data[i].words);//修改title值  
			}
		}
				$('#content_wrap #content #days .rightday .jiajian .pepo #jia').bind('click',function(){
				var numb=$('#content_wrap #content #days .rightday .jiajian .pepo #nums').text();
//					console.log(typeof Number(numb));
//					console.log(typeof pri)
					var zh='￥' + numb*pri
//					console.log(zh)
					$('#content_wrap #content #days .rightday .pricess em').html(zh);
				})
				$('#content_wrap #content #days .rightday .jiajian .pepo #jian').bind('click',function(){
				var numb=$('#content_wrap #content #days .rightday .jiajian .pepo #nums').text();
					var zh='￥' + numb*pri
					$('#content_wrap #content #days .rightday .pricess em').html(zh);
				})
		var timer;
		var b = 0;
		$(".smallimg ul li").eq(b).addClass("smallimg-imgg").siblings().removeClass("smallimg-imgg");

		$(".banner_left_timg ul li").eq(0).show().siblings().hide(); //第一张图片显示其余的图片隐藏
		LTimer();

		$(".banner_left_timg").hover(function() {
			clearInterval(timer); //清除定时器
		}, function() {
			LTimer()

		});

		$(".smallimg ul li").hover(function() {

			b = $(this).index(); //获取到当前下标的索引，并赋值给b
			clearInterval(timer); //清除定时器
			show();

		}, function() {
			LTimer()
		});

		function LTimer() {
			timer = setInterval(function() { //间隔5s图片轮播一次 
				b++; //i间隔4s，自增1
				if(b == 4) {
					b = 0;
				}
				show();
			}, 2000);
		}

		function show() {
			$(".banner_left_timg ul li").eq(b).stop(true, true).fadeIn(400).siblings().stop(true, true).fadeOut(400); //当前图片显示，其余的图片隐藏

			$(".smallimg ul li").eq(b).addClass("smallimg-imgg").siblings().removeClass("smallimg-imgg");

		}
	})
});

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
	//	//团购
	$('#groupby').mouseenter(function() {
		$(this).css({
			'background': 'url(//source.qunarzz.com/common/hf/header_new_v7.png) 0 -59px no-repeat'
		});

		$('#groupby_b').css({
			"display": "block"
		});

	});
	$('#groupby').mouseleave(function() {
		$(this).css({
			'background': 'none'
		});
		$('#groupby_b').css({
			"display": "none"
		});

	});

	//旅游
	$('#holiday').hover(function() {
		$('#holiday_b').css({
			"display": "block"
		})

		$(this).css({
			'background': 'url(//source.qunarzz.com/common/hf/header_new_v7.png) 0 -59px no-repeat'
		});
	})
	$('#holiday').mouseleave(function() {
		$(this).css({
			'background': 'none'
		});
		$('#holiday_b').css({
			"display": "none"
		})

	})

	//门票
	$('#tickets').hover(function() {
		$('#tickets_b').css({
			"display": "block"
		})

		$(this).css({
			'background': 'url(//source.qunarzz.com/common/hf/header_new_v7.png) 0 -59px no-repeat'
		});
	})
	$('#tickets').mouseleave(function() {
		$(this).css({
			'background': 'none'
		});
		$('#tickets_b').css({
			"display": "none"
		})

	})
	//本地人
	$('#indigene').hover(function() {
		$('#indigene_b').css({
			"display": "block"
		})

		$(this).css({
			'background': 'url(//source.qunarzz.com/common/hf/header_new_v7.png)-70px -59px no-repeat'
		});
	})
	$('#indigene').mouseleave(function() {
		$('#indigene_b').css({
			"display": "none"
		})

		$(this).css({
			'background': 'none'
		});
	})
	//金融
	$('#financial').hover(function() {
		$('#financial_b').css({
			"display": "block"
		})

		$(this).css({
			'background': 'url(//source.qunarzz.com/common/hf/header_new_v7.png) 0 -59px no-repeat'
		});
	})
	$('#financial').mouseleave(function() {
		$('#financial_b').css({
			"display": "none"
		})

		$(this).css({
			'background': 'none'
		});
	})
	//攻略
	$('#strategy').hover(function() {
		$('#strategy_b').css({
			"display": "block"
		})

		$(this).css({
			'background': 'url(//source.qunarzz.com/common/hf/header_new_v7.png) 0 -59px no-repeat'
		});
	})
	$('#strategy').mouseleave(function() {
		$('#strategy_b').css({
			"display": "none"
		})

		$(this).css({
			'background': 'none'
		});
	})

})

///city

$(function() {
	$('#hotel_foot .one').mouseenter(function() {
		$('#hotel_foot .one a').css({
			"color": "red"
		})
	});
	$('#hotel_foot .one').mouseleave(function() {
		$('#hotel_foot .one a').css({
			"color": "#4197c4"
		})
	});

})
//点击每个header里面的li进行下边框改变111

$(function() {

	$('#header_nav1 li').bind('click', function() {

		$('#header_nav1 li').removeClass('active');
		$(this).addClass('active');

		$('#contents1 .header_content').removeClass('active2').eq($(this).index()).
		addClass('active2');

	})
})
//////22222
$(function() {

	$('#header_nav2 li').bind('click', function() {

		$('#header_nav2 li').removeClass('active');
		$(this).addClass('active');

		$('#contents .header_content').removeClass('active2').eq($(this).index()).
		addClass('active2');

	})
})

/////33333
$(function() {

	$('#header_nav3 li').bind('click', function() {

		$('#header_nav3 li').removeClass('active');
		$(this).addClass('active');

		$('#contents3 .header_content').removeClass('active2').eq($(this).index()).
		addClass('active2');

	})
})

////44444
$(function() {

	$('#header_nav4 li').bind('click', function() {

		$('#header_nav4 li').removeClass('active');
		$(this).addClass('active');

		$('#contents4 .header_content').removeClass('active2').eq($(this).index()).
		addClass('active2');

	})
})

////5

$(function() {

	$('#header_nav5 li').bind('click', function() {

		$('#header_nav5 li').removeClass('active');
		$(this).addClass('active');

		$('#contents5 .header_content').removeClass('active2').eq($(this).index()).
		addClass('active2');

	})
})

////6

$(function() {

	$('#header_nav6 li').bind('click', function() {

		$('#header_nav6 li').removeClass('active');
		$(this).addClass('active');

		$('#contents6 .header_content').removeClass('active2').eq($(this).index()).
		addClass('active2');

	})
})

////7

$(function() {

	$('#header_nav7 li').bind('click', function() {

		$('#header_nav7 li').removeClass('active');
		$(this).addClass('active');

		$('#contents7 .header_content').removeClass('active2').eq($(this).index()).
		addClass('active2');

	})
})

////8

$(function() {

	$('#header_nav8 li').bind('click', function() {

		$('#header_nav8 li').removeClass('active');
		$(this).addClass('active');

		$('#contents8 .header_content').removeClass('active2').eq($(this).index()).
		addClass('active2');

	})
});
//日历
$(function() {
	$('.datepicker').datepicker({
		language: 'zh-CN'
	});
})
//加减
$(function() {
	var num = 1;

	var nums = $('#content_wrap #content #days .rightday .jiajian .pepo #nums').html();

	//console.log(nums)

	$('#content_wrap #content #days .rightday .jiajian .pepo #jian').bind('click', function() {
		if(num > 1) {

			num--;
			$('#content_wrap #content #days .rightday .jiajian .pepo #nums').html(num);

		} else {
			num = 1;
			$('#content_wrap #content #days .rightday .jiajian .pepo #nums').html(num);

		}
	})
	$('#content_wrap #content #days .rightday .jiajian .pepo #jia').bind('click', function() {
		if(num == 6) {

			num = 6;
			$('#content_wrap #content #days .rightday .jiajian .pepo #nums').html(num)
		} else {
			num++;
			$('#content_wrap #content #days .rightday .jiajian .pepo #nums').html(num);

		}
	})
})

$(function() {
	var num = 1;

	var nums = $('#content_wrap #content #days .rightday .jiajian .room #roms').html();
	//console.log(nums)

	$('#content_wrap #content #days .rightday .jiajian .room #jians').bind('click', function() {
		if(num > 1) {

			num--;
			$('#content_wrap #content #days .rightday .jiajian .room #roms').html(num)
		} else {
			num = 1;
			$('#content_wrap #content #days .rightday .jiajian .room #roms').html(num);

		}
	})
	$('#content_wrap #content #days .rightday .jiajian .room #jias').bind('click', function() {
		if(num == 6) {

			num = 6;
			$('#content_wrap #content #days .rightday .jiajian .room #roms').html(num)
		} else {
			num++;
			$('#content_wrap #content #days .rightday .jiajian .room #roms').html(num);

		}
	});

})
//延时
///购物车
$(function() {
	var oclc = $('#content_wrap #content #days #car #btn');
	//如果有cart，取出cart对应的值
	if(getCookie("cart")) {
		var objCookie = JSON.parse(getCookie("cart"));
	} else {
		//没有的话 定义一个对象去，未来点击按钮时保存数据
		var objCookie = {};
	}
	//接收URL中的参数byId
	oclc.bind('click', function() {
		$("#content_wrap #content #days #car .car_txt").css({
			"display": "block"
		})
		setTimeout(function() {
			$("#content_wrap #content #days #car .car_txt").css({
				"display": "none"
			})

		}, 2000)
		//取出当前商品ID
		var proId = getUrlParam('byId');
		//同种商品增加数量
//		if(!objCookie[proId]) {
//			objCookie[proId] = 1;
//		} else {
//			//不同商品增加一个新的属性，并赋值为1
//			objCookie[proId] += 1;
//		}
			var num=$('#content_wrap #content #days .rightday .jiajian .pepo #nums').text();

			objCookie[proId]=num;
		var strCookie = JSON.stringify(objCookie);
		setCookie("cart", strCookie, 7);
	})
	//获取id
	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg); //匹配目标参数
		if(r != null) return unescape(r[2]);
		return null; //返回参数值
	}

	function setCookie(name, value, day) {
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + day);
		document.cookie = name + "=" + value + ";expires=" + oDate;

	}

	function getCookie(name) {
		var strCookie = document.cookie;
		//需要对字符串进行分割（;）
		var arrCookie = strCookie.split("; ");
		//console.log(arrCookie);
		for(var i = 0; i < arrCookie.length; i++) {
			//把数组中的每一项以=分割，判断形参和分割后的数组中的第一元素是否相等，相等则返回第二个元素
			var arr = arrCookie[i].split("=");
			if(arr[0] == name) {
				return arr[1];
			}
		}
	}

	function removeCookie(name) {
		setCookie(name, 1, -1);

	}

	//延时消失

})