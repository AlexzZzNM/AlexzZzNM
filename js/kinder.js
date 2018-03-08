$(document).ready(function(){

	$('.header-user').click(function(){
		$('.header-user-xl').toggle();
	})
	$(document).click(function() {
		$('.header-user-xl').hide(); 
	});
	//阻止冒泡
	$('.header-user-xl,.header-user').click(function(e) {
		stopPropagation(e); 
	});

	var $menuheight=$('.index-menu ul').height();
	$('.index-menu ul').height($menuheight-100)


	//阻止冒泡函数
	function stopPropagation(e) { 
	if (e.stopPropagation) 
		e.stopPropagation(); 
	else 
		e.cancelBubble = true; 
	}



	$('.header-menu').click(function(){
		//var $body=$('body').height();
		$('.index-menu-bg').fadeIn();
		$('.index-menu').animate({left:'0'})
		$('.index-menu-close').show();
		//$('body').css({'overflow-y':'hidden','height':'100%'})
		//$('body').height($body);
		$('body').addClass('ovhidden')
	})
	$('.index-menu-close').click(function(){
		$('.index-menu-bg').fadeOut();
		$('.index-menu').animate({left:'-73%'})
		$('.index-menu-close').hide();
		//$('body').css({'overflow-y':'auto','height':'auto'})
		$('body').removeClass('ovhidden')
	})

	$('.pr-list-sx,.ls-dz').click(function () {
		$('.pro-sx-bg').fadeIn();
		$('.pro-sx-model').fadeIn();
		$('body,html').addClass('ovhidden')
	})

	$('.pro-sx-model').css({"max-height":$(window).height()-30,'overflow':'auto'});

	$('.pro-sx-model-list').click(function(){
		$(this).next('.pro-sx-model-list-ul').slideToggle().parent().siblings('.pro-sx-model-box').find('ul').slideUp();
		$(this).find('.pro-sx-model-list-sx').addClass('pro-sx-model-list-sx-down').parents('.pro-sx-model-box').siblings().find('.pro-sx-model-list-sx').removeClass('pro-sx-model-list-sx-down');
		
		/*var $qh=$(this).find('.pro-sx-model-list-sx')
		if($qh.hasClass('pro-sx-model-list-sx-down'))
		{
			$qh.removeClass('pro-sx-model-list-sx-down')
		}else{
			$qh.addClass('pro-sx-model-list-sx-down')
		}*/

	})

	$('.pro-sx-bg').click(function () {
	    $('.pro-sx-bg').fadeOut();
	    $('.pro-sx-model').fadeOut();
	    $('.gary-back').fadeOut();
	    $('body,html').removeClass('ovhidden')
	    $('html,body').css('overflow', 'auto');
	})

	/*$('.pro-sx-model-list-ul li').click(function(){
		var parent=$(this).parent()
		parent.find('.check').remove()
		$(this).append("<div class='check fr'></div>")
		var $text1=$(this).find('.pro-sx-model-list-ul-c').text();
		var $text2=$(this).find('.pro-sx-model-list-ul-e').text();
		parent.prev().find('.pro-sx-model-list-c').text($text1)
		parent.prev().find('.pro-sx-model-list-span').text($text2)
	})*/

	$('.pro-sx-model-list-ul01 li').click(function(){
	    $(this).find('.fr').toggleClass('check');            //.parent().siblings().find('.fr').removeClass('check')
	})

	$('.pro-sx-model-list-ul02 li').click(function () {
	    if ($(this).hasClass('all')) {
	        $(this).find('.fr').toggleClass('check');
	        if ($(this).find('.fr').hasClass('check')) {
	            $(this).parent().find('.fr').addClass('check');
	        }
	        else {
	            $(this).parent().find('.fr').removeClass('check');
	        }
	    } else {
	        $(this).find('.fr').toggleClass('check');
	        var $lsli = $(this).parent().find(".one").length;
	        var $lsli2 = $(this).parent().find(".one").find(".check").length;

	        if ($lsli == $lsli2) {
	            $(this).parent().find('.all').find('.fr').addClass('check');
	        }
	        else {
	            $(this).parent().find('.all').find('.fr').removeClass('check');
	        }
	    }
    })

	//$('.pro-sx-model-list-ul02 li').toggle(function () {
	//    $(this).find('input').attr('checked', true);
	//    var $lsli =$(this).parent().find("li").length - 1;
	//    var $lsli2 = $(this).parent().find("input:checked").length;//$('.pro-sx-model-list-ul02 li input:checked').length;
	//    if ($lsli == $lsli2)
	//    {
	//        $('.pro-sx-model-list-ul02 li.all').attr('checked', true);
	//    }

	//}, function () {
	//    $(this).find('input').removeAttr('checked', true)
	//})

	//$('.pro-sx-model-list-ul02 li.all').toggle(function () {
	//    $(this).find('input').attr('checked', true)
	//    $(this).siblings().find('input').attr('checked', true)
	//}, function () {
	//    $(this).find('input').removeAttr('checked', true)
	//    $(this).siblings().find('input').removeAttr('checked', true)
	//})

	$('.pro-dz-btn').click(function(){
		$('.pro-ar-cart').slideDown();
	})
	$('.pro-ar-cart-close').click(function(){
		$('.pro-ar-cart').slideUp();
	})
	$('.pro-cart-ok').click(function(){
		$('.pro-ar-cart').slideUp();
		$('.buy-con2').hide();
		$('.buy-con').show();
	})

	//$('.pro-fx-icon').click(function(){
	//	$('.pro-ar-fx').slideDown();
	//})
	$('.pro-ar-fx-close').click(function(){
		$('.pro-ar-fx').slideUp();
	})

	$('.ls-box label').click(function(){
		$(this).toggleClass('checkboxed');
		if($(this).hasClass('checkboxed'))
		{
			$(this).next().attr('checked', 'checked');
		}else
		{
			$(this).next().removeAttr('checked');
		}
	})

	$('.yc-xz-list').click(function(){
		if($(this).find('.ls-sm-check').hasClass('ls-sm-checked')){
			$(this).find('.ls-sm-check').removeClass('ls-sm-checked');
			//$(this).find('input').val('0');
			//var $input=$(this).find('input').val();
		
		}else{
			$(this).find('.ls-sm-check').addClass('ls-sm-checked');
			//$(this).find('input').val('1');
			//var input_1=$(this).find('input').attr('value');
			
		}
	})

	// $('.yc-ls-menu ul li').click(function(){
	// 	if($(this).find('.check').hasClass('checked')){
	// 		$(this).find('.check').removeClass('checked');
	// 		$(this).removeClass('color-txt');
	// 	}else{
	// 		$(this).siblings().removeClass('color-txt').find('.check').removeClass('checked')
	// 		$(this).find('.check').addClass('checked');
	// 		$(this).addClass('color-txt')
	// 		var $text=$(this).text()
	// 		$('.ycxz-text-click').html($text+'：')
	// 		}
	// }).eq(0).click();


	var index;
	$('.yc-ls-menu ul li').click(function(){
		var $text=$(this).text()
		$('.ycxz-text-click').html($text+'：');
		index = $(this).index();
	})

	$('.xz-save').click(function(){
		var cl = 'color-txt';
		if($('input.yc-input').val()==""){
			$('.ycxz-text-click-ts').show();
		}else{
			$('.ycxz-text-click-ts').hide();
			$('.yc-ls-menu ul li').eq(index).addClass(cl).siblings().removeClass(cl);
			//$('.yc-ls-menu ul li .check').removeClass('checked');
			$('.yc-ls-menu ul li').eq(index).addClass(cl).siblings().removeClass(cl);
		    //$('.yc-ls-menu ul li').eq(index).children('.check').addClass('checked');
			$("#toot").focus();
		}
	})

	$('.xj-box-list').click(function(){
		if($(this).hasClass('xj-box-list-click')){
			$(this).removeClass('xj-box-list-click');
			$(this).find('.xj-box-list-con').removeClass('xj-box-list-con-click');
		}else{
			$(this).siblings('.xj-box-list').removeClass('xj-box-list-click')
			$(this).siblings('.xj-box-list').find('.xj-box-list-con').removeClass('xj-box-list-con-click');
			$(this).addClass('xj-box-list-click');
			$(this).find('.xj-box-list-con').addClass('xj-box-list-con-click');
			$('.xj-jj-bg').fadeIn();
		}
	})

	$('.xj-xz-box').click(function(){
		$('.xz-box').toggle();
	})

	$('.xz-box li').click(function(){
		var $text=$(this).text();
		$('.xz-txt').text($text);
	})

	$('.xj-xz-xkd').click(function(){
		$('.xz-xkd').toggle();
	})

	$('.xz-xkd li').click(function(){
		var $text=$(this).text();
		$('.xz-xkd-txt').text($text);
	})

	$('.yes').click(function(){
		$('.xj-box-con').show();
	})

	$('.no').click(function(){
		$('.xj-box-con').hide();
	})

	$('.dzyx-btn').click(function(){
		$('.xj-dzyx-bg').fadeIn();
		$('.xj-dzyx-box').slideDown();
	})

	$('.xj-dzyx-box-close').click(function(){
		$('.xj-dzyx-bg').fadeOut();
		$('.xj-dzyx-box').slideUp();
	})

	$('.xj-dzyx-box-con ul li').click(function(){
		$(this).find('label').addClass('xj-dzxz-radio-checked').parent().parent().siblings().find('label').removeClass('xj-dzxz-radio-checked')
		$(this).find('input[type="radio"]').attr('checked','checked').parent().parent().parent().siblings().find('input[type="radio"]').removeAttr('checked')
	})

	$('.register-xz-box').click(function(){
		$('.xz-box').toggle();
	})

	$('.register-box-list').click(function(){
		if($(this).hasClass('register-box-list-click')){
			$(this).removeClass('register-box-list-click');
			$(this).find('.register-box-list-con').removeClass('register-box-list-con-click');
			$(this).siblings().find('.register-box-list-con').removeClass('register-box-list-con-click')
		}else{
			$(this).addClass('register-box-list-click');
			$(this).find('.register-box-list-con').addClass('register-box-list-con-click');
			$(this).siblings().find('.register-box-list-con').removeClass('register-box-list-con-click')
			$(this).siblings().removeClass('register-box-list-click');
		}
	})


	$('.cart-shop-allcheck').toggle(function(){
			$(this).find('input[type=checkbox]').attr('checked','checked');
			$(this).parents('.per-shop-order').find('input[type="checkbox"]').attr('checked', 'checked');
			jiancagoux();
		},function (){
		    $(this).find('input[type=checkbox]').removeAttr('checked');
		    $(this).parents('.per-shop-order').find('input[type="checkbox"]').removeAttr('checked');
			jiancagoux();
		}
	)

	$('.cart-shop-order-btn').click(function(){
		$('.cart-box-model-bg').fadeIn();
		$('.cart-box-model').slideDown();
	})

	$('.cart-box-model-close').click(function(){
		$('.cart-box-model-bg').fadeOut();
		$('.cart-box-model').slideUp();
	})

	$('.pay-list').click(function(){
		$(this).find('label').addClass('pay-radio-checked').parent().siblings().find('label').removeClass('pay-radio-checked')
		$(this).find('input[type="radio"]').attr('checked','checked').parent().parent().siblings().find('input[type="radio"]').removeAttr('checked')
	})

	//$('.ls-next').click(function(){
	//	$('.pay-model').slideDown();
	//})
	$(".ls-box-select-box").each(function () {

	    if ($(this).find("span").attr("style") == "color:#dfa8b3;") {
	        $(".ls-box-select-box").hide();	        
	    }
	    else {
	        $(".ls-box-select-box").show();
	        return false;
	    }
	});
	$('.ls-box-select').click(function () {

		$('.ls-box-select-box').slideToggle();
	})
	$('.gg-btn').click(function(){
		if($(this).hasClass('gg-btn-click')){
			$(this).removeClass('gg-btn-click')
			$('.xj-box-big').slideUp();
			$('.gg-btn img').attr({src:'skin/images/per-cont-icon-6.png',width:'8'});

		}else{
			$(this).addClass('gg-btn-click')
			$('.xj-box-big').slideDown();
			$('.gg-btn img').attr({src:'skin/images/xjd-icon-white.png',width:'15'});
		}
	})
	$('.xj-box-tit').click(function(){
		$(this).toggleClass('xj-box-tit-click')
		$(this).siblings('.xj-box-list-bigbox').slideToggle();
	})

	$('.per-change-list-tab a').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var $index=$('.per-change-list-tab a').index(this)
		$('.per-change-list-tab-ul').eq($index).show().siblings('.per-change-list-tab-ul').hide().css('display','none').stop(true,true);
	}).eq(0).click()

	// $('ul.per-change-list-tab-ul  li').click(function(){
	// 	$(this).addClass('on').siblings().removeClass('on');
	// })

	$('#ULProvince li').click(function(){
		$(this).parent().hide();
		$('#ULCity').show();
	})

	//产品详情选项卡
	$('.pro-ar-tab li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		var $index=$('.pro-ar-tab li').index(this)
		$(this).parent().next().next().find('.pro-ar-tab-con').eq($index).show().siblings().hide();
	}).eq(0).click();

	$('.ls-sm').click(function() {
		$(this).find('input').focus();
	});

	//隐藏掉回到顶部的层 
	$('.back-top').hide();
	//产品详情导航悬浮
	$(window).scroll(function(){
		var $height=$(document.body).outerHeight(true)
		$(document).scrollTop;
		if($(document).scrollTop() >= $height){
			$('.pro-ar-tab').addClass('per-ar-tab-fix')
			$('.per-ar-tab-fix').next().addClass('height50')
		}
		if($(document).scrollTop() < $height){
			$('.per-ar-tab-fix').next().removeClass('height50')
			$('.pro-ar-tab').removeClass('per-ar-tab-fix');
		}
	});

	var $height=$(document.body).outerHeight(true)
	$('.pro-onesck').css('height', $height);

	$('.pro-list:even').css('padding-right','5px');
	$('.pro-list:odd').css('padding-left','5px');

})

$(function () {
    $('.foot-weixin').click(function () {
        $('.wx-box').fadeIn();
    })

    $('.wx-box').click(function () {
        $(this).fadeOut();
    })

	$(window).scroll(function(){
		var $height=$(document.body).outerHeight(true)*0.3;
		var $height7=$(document.body).outerHeight(true)*0.2;
		var $allheight=$(document.body).outerHeight(true);
		if($(document).scrollTop()>=$height&&$(".pro-ar-con").hasClass('top')==false){
			$('body.pro-ar-body:not(:animated)').animate({
				scrollTop: $allheight
			})
			$(".pro-ar-con").addClass('top');
		}
		if($height7>$(document).scrollTop()&&$(".pro-ar-con").hasClass('top')==true){
			$(".pro-ar-con").removeClass('top').addClass('backTop');
			if($(".pro-ar-con").hasClass('backTop')==true){
				$('html,body:not(:animated)').animate({
					scrollTop: 0
				})
				$(".pro-ar-con").removeClass('backTop');
			}
		}
	});
})


