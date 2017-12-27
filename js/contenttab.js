///#lefttab

$(function() {
	$('#lefttab #tittab li').hover(function() {
		$('#lefttab #tittab li').removeClass('active');
		$(this).addClass('active');

		$("#left_tab_box .boxL").removeClass('active').eq($(this).index()).
		addClass('active');

	})
})
////tab选项卡
$(function() {
	$.getJSON("../json/tab.json", function(res) {
		var datas = res.hashMap.data.list.primary;
		var datasr = res.hashMap.data.list.secondary;

		//		console.log(res.hashMap.data.list.secondary);
		for(var i = 0; i < datas.length; i++) {
			var src = datas[i].img;
			//			console.log(src);
			var img = $('<img>');
			img.attr("src", src);
			var boxt = $('<div class="box_left_top">' + '<div class="left">' + '<img src="' + datas[i].img + '"/>' + '</div>' + '<div class="right">' + '<p>' + datas[i].title + '</p>' +
				'<div class="txt">' + datas[i].words + '</div>' + '<div class="price">' + '￥' + datas[i].nowPrice + '</div>')

			$('#left_tab_box .box_left').append(boxt);
		}
		for(var j = 0; j < datasr.length; j++) {
			var src = datasr[j].img;
			//			console.log(src);
			var img = $('<img>');
			img.attr("src", src);
			var boxr = $('<div class="boxcre">' + '<div class="imgs">' + '<img src="' + datasr[j].img + '">' + '</div>' + '<div class="txt">' + '<p class="tit">' + datasr[j].title + '</p>' +
				'<p class="con">' + datasr[j].words + '</p>' + '<p class="money">' + '￥' + datasr[j].nowPrice + '</p>' + '</div>' + '</div>'
			)

			$('#left_tab_box .box_right').append(boxr);
		}

	});

	$.getJSON("../json/tab1.json", function(res) {
		var datas = res.hashMap.data.list.primary;
		var datasr = res.hashMap.data.list.secondary;

		//		console.log(res.hashMap.data.list.secondary);
		for(var i = 0; i < datas.length; i++) {
			var src = datas[i].img;
			//			console.log(src);
			var img = $('<img>');
			img.attr("src", src);
			var boxt = $('<div class="box_left_top">' + '<div class="left">' + '<img src="' + datas[i].img + '"/>' + '</div>' + '<div class="right">' + '<p>' + datas[i].title + '</p>' +
				'<div class="txt">' + datas[i].words + '</div>' + '<div class="price">' + '￥' + datas[i].nowPrice + '</div>')

			$('#left_tab_box .box_left2').append(boxt);
		}
		for(var j = 0; j < datasr.length; j++) {
			var src = datasr[j].img;
			//			console.log(src);
			var img = $('<img>');
			img.attr("src", src);
			var boxr = $('<div class="boxcre">' + '<div class="imgs">' + '<img src="' + datasr[j].img + '">' + '</div>' + '<div class="txt">' + '<p class="tit">' + datasr[j].title + '</p>' +
				'<p class="con">' + datasr[j].words + '</p>' + '<p class="money">' + '￥' + datasr[j].nowPrice + '</p>' + '</div>' + '</div>'
			)

			$('#left_tab_box .box_right2').append(boxr);
		}

	})

	$.getJSON("../json/tab3.json", function(res) {
		var datas = res.hashMap.data.list.primary;
		var datasr = res.hashMap.data.list.secondary;

		//		console.log(res.hashMap.data.list.secondary);
		for(var i = 0; i < datas.length; i++) {
			var src = datas[i].img;
			//			console.log(src);
			var img = $('<img>');
			img.attr("src", src);
			var boxt = $('<div class="box_left_top">' + '<div class="left">' + '<img src="' + datas[i].img + '"/>' + '</div>' + '<div class="right">' + '<p>' + datas[i].title + '</p>' +
				'<div class="txt">' + datas[i].words + '</div>' + '<div class="price">' + '￥' + datas[i].nowPrice + '</div>')

			$('#left_tab_box .box_left3').append(boxt);
		}
		for(var j = 0; j < datasr.length; j++) {
			var src = datasr[j].img;
			//			console.log(src);
			var img = $('<img>');
			img.attr("src", src);
			var boxr = $('<div class="boxcre">' + '<div class="imgs">' + '<img src="' + datasr[j].img + '">' + '</div>' + '<div class="txt">' + '<p class="tit">' + datasr[j].title + '</p>' +
				'<p class="con">' + datasr[j].words + '</p>' + '<p class="money">' + '￥' + datasr[j].nowPrice + '</p>' + '</div>' + '</div>'
			)

			$('#left_tab_box .box_right3').append(boxr);
		}

	})

});

//、、5日游
$(function() {
	$.getJSON("../json/tab4.json", function(res) {
		//			console.log(res)

		var datasr = res.hashMap.data.list.secondary;

		//		console.log(datasr)
		for(var i = 0; i < datasr.length; i++) {
			var src = datasr[i].img;
			//			console.log(src);
			var img = $('<img>');
			img.attr("src", src);
			var boxt = $('<div id="bao">'+'<a href=xiangqing.html?byId='+datasr[i].productId+'>' + '<div id="img">' + '<img src="' + datasr[i].img + '"/>' + '<div id="bx">' +
				'<span>' + datasr[i].words + '</span>' + '<p>' + datasr[i].desc + '</p>' + '</div>' + '</div>' +
				'<div id="tit">' + '<span>' + datasr[i].title + '</span>' + '<p>' + '￥' + datasr[i].nowPrice +
				'</p>' + '</div>' + '</a>'+'</div>');
				$('#lefrig #box').append(boxt);
		}
	})

})

$(function() {
	$.getJSON("../json/tab4.json", function(res) {
		//			console.log(res)

		var datasr = res.hashMap.data.list.lin;

		//		console.log(datasr)

		var datak = res.hashMap.data.list.primary;
		//		console.log(datak)

		for(var i = 0; i < datasr.length; i++) {
			var src = datasr[i].img;
			//			console.log(src);
			var img = $('<img>');
			img.attr("src", src);
			var boxt = $('<div id="bao">' + '<div id="img">' + '<img src="' + datasr[i].img + '"/>' +
				'</div>' +
				'<div id="tit">' + '<span>' + datasr[i].title + '</span>' + '<i>' + datasr[i].desc + '</i>' + '<p>' + '￥' + datasr[i].nowPrice +
				'</p>' + '</div>' + '</div>');
			$('#hots #right #box1').append(boxt);
		}
	})

})

//超值团购推荐

$(function() {
	$('#pic .tab a').hover(function() {
		$('#pic .tab a').removeClass('active');
		$(this).addClass('active');
	});

	$('#pic .tab li').hover(function() {

		$("#pic #liss .right").removeClass('activeS').eq($(this).index()).
		addClass('activeS');
	});

});
//超值团购推荐

$(function() {
	$.getJSON("../json/tab4.json", function(res) {
		//			console.log(res)

		var datasr = res.hashMap.data.list.dachuang;
		var data = res.hashMap.data.list.tabs;
		//		console.log(data)
		//		console.log(datasr[0].img);
		var img = $('<img src="' + datasr[0].img + '"/>');
		//		console.log(img);
		$('#pic .right .pics').append(img);

		for(var i = 0; i < data.length; i++) {
			var hotel = $('<div class="list">' + '<img src="' + data[i].img + '"/>' + '<div class="wrap">' +
				'<div class="title">' + data[i].title + '</div>' + '<p>' + '<span>' + data[i].words + '</span>' +
				'<em class="one">' + '</em>' + '<em class="to">' + '</em>' + '<em class="sir">' + '</em>' +
				'</p>' + '<p>' + '<em class="asd">' + '</em>' + data[i].desc + '</p>' + '<div class="sp">' +
				'<span class="sps1">' + '￥' + data[i].nowPrice + '</span>' + '<em>' + '起' + '</em>' + '<span class="sps">' +
				'<em>' + data[i].sightId + '</em>' + '人以购买' + '</span>' + '</div>' + '</div>' + '</div>');
			$('#pic #liss .right #one').append(hotel)
		}

	})

})
////2
$(function() {
	$.getJSON("../json/tab4.json", function(res) {
		var data = res.hashMap.data.list.tabs2;
		for(var i = 0; i < data.length; i++) {
			var hotel = $('<div class="list">' + '<img src="' + data[i].img + '"/>' + '<div class="wrap">' +
				'<div class="title">' + data[i].title + '</div>' + '<p>' + '<span>' + data[i].words + '</span>' +
				'<em class="one">' + '</em>' + '<em class="to">' + '</em>' + '<em class="sir">' + '</em>' +
				'</p>' + '<p>' + '<em class="asd">' + '</em>' + data[i].desc + '</p>' + '<div class="sp">' +
				'<span class="sps1">' + '￥' + data[i].nowPrice + '</span>' + '<em>' + '起' + '</em>' + '<span class="sps">' +
				'<em>' + data[i].sightId + '</em>' + '人以购买' + '</span>' + '</div>' + '</div>' + '</div>');
			$('#pic #liss .right #too').append(hotel)
		}
	})

})

//333333333
$(function() {
	$.getJSON("../json/tab4.json", function(res) {
		var data = res.hashMap.data.list.tabs3;
		for(var i = 0; i < data.length; i++) {
			var hotel = $('<div class="list">' + '<img src="' + data[i].img + '"/>' + '<div class="wrap">' +
				'<div class="title">' + data[i].title + '</div>' + '<p>' + '<span>' + data[i].words + '</span>' +
				'<em class="one">' + '</em>' + '<em class="to">' + '</em>' + '<em class="sir">' + '</em>' +
				'</p>' + '<p>' + '<em class="asd">' + '</em>' + data[i].desc + '</p>' + '<div class="sp">' +
				'<span class="sps1">' + '￥' + data[i].nowPrice + '</span>' + '<em>' + '起' + '</em>' + '<span class="sps">' +
				'<em>' + data[i].sightId + '</em>' + '人以购买' + '</span>' + '</div>' + '</div>' + '</div>');
			$('#pic #liss .right #sir').append(hotel)
		}
	})

});

//旅游攻略
$(function() {
	$.getJSON("../json/tab1.json", function(res) {
		//		console.log(res.hashMap.data.travel);
		//		console.log(res.hashMap.data.travelright);
		var data = res.hashMap.data.travel;
		var datas = res.hashMap.data.travelright;

		var img = $('<img src="' + data[0].img + '"/>');
		$('#fatbottom #one .dapic a').append(img);
		for(var i = 0; i < datas.length; i++) {
			//			console.log(datas)
			var imgs = $('<div class="pics">' + '<a href="javascript:;">' + '<img src="' + datas[i].img + '"/>' +
				'</a>' + '</div>');
			$('#fatbottom #one .sipic').append(imgs);
			var lis = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].title + '</label>' +
				'<span>' + datas[i].words + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #one .bottoms .left ul').append(lis);

			var lis2 = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].desc + '</label>' +
				'<span>' + datas[i].nowPrice + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #one .bottoms .right ul').append(lis2);
		}
	});
	//	2
	$.getJSON("../json/tab1.json", function(res) {
		//		console.log(res.hashMap.data.travel);
		//		console.log(res.hashMap.data.travelright);
		var data = res.hashMap.data.travel2;
		var datas = res.hashMap.data.travelright2;

		var img = $('<img src="' + data[0].img + '"/>');
		$('#fatbottom #too .dapic a').append(img);
		for(var i = 0; i < datas.length; i++) {
			//			console.log(datas)
			var imgs = $('<div class="pics">' + '<a href="javascript:;">' + '<img src="' + datas[i].img + '"/>' +
				'</a>' + '</div>');
			$('#fatbottom #too .sipic').append(imgs);
			var lis = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].title + '</label>' +
				'<span>' + datas[i].words + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #too .bottoms .left ul').append(lis);

			var lis2 = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].desc + '</label>' +
				'<span>' + datas[i].nowPrice + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #too .bottoms .right ul').append(lis2);
		}
	});
	//	3

	$.getJSON("../json/tab1.json", function(res) {
		//		console.log(res.hashMap.data.travel);
		//		console.log(res.hashMap.data.travelright);
		var data = res.hashMap.data.travel3;
		var datas = res.hashMap.data.travelright3;

		var img = $('<img src="' + data[0].img + '"/>');
		$('#fatbottom #sir .dapic a').append(img);
		for(var i = 0; i < datas.length; i++) {
			//			console.log(datas)
			var imgs = $('<div class="pics">' + '<a href="javascript:;">' + '<img src="' + datas[i].img + '"/>' +
				'</a>' + '</div>');
			$('#fatbottom #sir .sipic').append(imgs);
			var lis = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].title + '</label>' +
				'<span>' + datas[i].words + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #sir .bottoms .left ul').append(lis);

			var lis2 = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].desc + '</label>' +
				'<span>' + datas[i].nowPrice + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #sir .bottoms .right ul').append(lis2);
		}
	});
	//	4
	$.getJSON("../json/tab1.json", function(res) {
		//		console.log(res.hashMap.data.travel);
		//		console.log(res.hashMap.data.travelright);
		var data = res.hashMap.data.travel4;
		var datas = res.hashMap.data.travelright4;

		var img = $('<img src="' + data[0].img + '"/>');
		$('#fatbottom #fur .dapic a').append(img);
		for(var i = 0; i < datas.length; i++) {
			//			console.log(datas)
			var imgs = $('<div class="pics">' + '<a href="javascript:;">' + '<img src="' + datas[i].img + '"/>' +
				'</a>' + '</div>');
			$('#fatbottom #fur .sipic').append(imgs);
			var lis = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].title + '</label>' +
				'<span>' + datas[i].words + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #fur .bottoms .left ul').append(lis);

			var lis2 = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].desc + '</label>' +
				'<span>' + datas[i].nowPrice + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #fur .bottoms .right ul').append(lis2);
		}
	});

	//	5
	$.getJSON("../json/tab1.json", function(res) {
		//		console.log(res.hashMap.data.travel);
		//		console.log(res.hashMap.data.travelright);
		var data = res.hashMap.data.travel5;
		var datas = res.hashMap.data.travelright5;

		var img = $('<img src="' + data[0].img + '"/>');
		$('#fatbottom #fiv .dapic a').append(img);
		for(var i = 0; i < datas.length; i++) {
			//			console.log(datas)
			var imgs = $('<div class="pics">' + '<a href="javascript:;">' + '<img src="' + datas[i].img + '"/>' +
				'</a>' + '</div>');
			$('#fatbottom #fiv .sipic').append(imgs);
			var lis = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].title + '</label>' +
				'<span>' + datas[i].words + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #fiv .bottoms .left ul').append(lis);

			var lis2 = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].desc + '</label>' +
				'<span>' + datas[i].nowPrice + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #fiv .bottoms .right ul').append(lis2);
		}
	});
	//	6
	$.getJSON("../json/tab1.json", function(res) {
		//		console.log(res.hashMap.data.travel);
		//		console.log(res.hashMap.data.travelright);
		var data = res.hashMap.data.travel6;
		var datas = res.hashMap.data.travelright6;

		var img = $('<img src="' + data[0].img + '"/>');
		$('#fatbottom #six .dapic a').append(img);
		for(var i = 0; i < datas.length; i++) {
			//			console.log(datas)
			var imgs = $('<div class="pics">' + '<a href="javascript:;">' + '<img src="' + datas[i].img + '"/>' +
				'</a>' + '</div>');
			$('#fatbottom #six .sipic').append(imgs);
			var lis = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].title + '</label>' +
				'<span>' + datas[i].words + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #six .bottoms .left ul').append(lis);

			var lis2 = $('<li>' + '<span>' + '<a href="javascript:;">' + '<label>' + datas[i].desc + '</label>' +
				'<span>' + datas[i].nowPrice + '</span>' + '</a>' + '</span>' + '</li>');
			$('#fatbottom #six .bottoms .right ul').append(lis2);
		}
	});

});

$(function() {
	$('#fat .fattop .lis ul li').hover(function() {

		$("#fat #fatbottom .wrap").removeClass('actives').eq($(this).index()).
		addClass('actives');
	});

});