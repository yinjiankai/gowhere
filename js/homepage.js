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
})

//#cnav的样式
$(function() {

	$('#cnav ul li').bind('click', function() {
		$('#cnav ul li').removeClass('active1');
		$(this).addClass('active1');

		$('#nonav .hotel').removeClass('active4').eq($(this).index()).
		addClass('active4');

	})

});

$(function() {
	$(".search1").kuCity();
	console.log($("#search1"))
})