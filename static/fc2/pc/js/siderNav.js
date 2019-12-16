/**
 * 左侧边栏分页导航
 */

;(function($){
    $(window).ready(function(){
    	 /* new add start */ 
    	
    	$(".icon_arrow_up").attr("disabled", true); 
    	$(".icon_arrow_down").attr("disabled", true);
    	 
    	var child_num = $(".contract_tit").children("a").length; /* 获取所有的导航元素 */
    	var page_num = Math.ceil(child_num/10); /* 获取左側所有的页数（向上取余） */
    	$(".contract_tit_line").height(page_num * 10 * 68); /* 动态生成contract_tit_line的高，来添加中间线 */
    
    	var count = 1;/* 标识符 */ 
    	if(child_num < 11){
    		$(".icon_arrow_up").attr("disabled", true); 
        	$(".icon_arrow_down").attr("disabled", true);
    	}
    	if(child_num >= 11){  
    		$(".icon_arrow_down").removeAttr("disabled").addClass("icon_arrow_click");/*下按钮可点击高亮*/
    	}

    	/* 点击事件 */
    	$('.contract_tit a').click(function(event) {
	        var i=$(this).index();/*当前高亮标签的索引*/
	        $(this).addClass('cur').siblings().removeClass('cur');
	        var imgHeight = $("#contract_con img").height();/*获取img的高度*/
	        $(".mCSB_container").css('top', -(i - 1)*imgHeight);/*跟随左侧点击事件移动*/
	        //总页数小于10，上下都不能点击
	        if(child_num <= 10){
	        	count = 1;
	        	$(".icon_arrow_up").attr("disabled", true).removeClass("icon_arrow_click");
	        	$(".icon_arrow_down").attr("disabled", true).removeClass("icon_arrow_click");
	        }
	        //总数大于10 && 当前值小于10
	        if(child_num > 10 && i < 10){
	        	count = 1;
	        	//上不可点击
	        	$(".icon_arrow_down").removeAttr("disabled").addClass("icon_arrow_click");
	        	$(".icon_arrow_up").attr("disabled", true).removeClass("icon_arrow_click");
	        }
	        //总数大于10 && 当前值大于10 && 当前值小于 下一页的第一个值
	        if(child_num > 10 && i > 10 && i < (page_num - 1) * 10 + 1){
	        	count = Math.ceil(i / 10);
	        	//上下可点击
	        	$(".icon_arrow_down").removeAttr("disabled").addClass("icon_arrow_click");
	        	$(".icon_arrow_up").removeAttr("disabled").addClass("icon_arrow_click");
	        }
	        //总数大于10 && 当前值大于10 && 当前值等于 下一页的第一个值
	        if(child_num > 10 && i == (page_num - 1) * 10 + 1){
	        	count = Math.ceil(i / 10);
	        	//下不可点击
	        	$(".icon_arrow_down").attr("disabled", true).removeClass("icon_arrow_click");
	        	$(".icon_arrow_up").removeAttr("disabled").addClass("icon_arrow_click");
	        }
	        //总数大于10 && 当前值等于总页数
	        if(child_num > 10 && i == child_num){
	        	count = Math.ceil(i / 10);
	        	//下不可点击
	        	$(".icon_arrow_down").attr("disabled", true).removeClass("icon_arrow_click");
	        	$(".icon_arrow_up").removeAttr("disabled").addClass("icon_arrow_click");
	        }
	    });
    	
    	/* 滚动事件 */
	    $(".contract_con").mCustomScrollbar({
	    	theme: 'minimal',
	    	setHeight: 925,
	    	setTop: 0,
	        callbacks: {
	        	whileScrolling: function(){
	             	var TT = 480-$('.mCSB_container').offset().top;
	             	var img_height=$('.contract_con img').height();
	                var ss=TT/img_height;
	                var num=Math.floor(ss);
	                if (num<0) {
	                    num=0;
	                }
	                $('.contract_tit a').eq(num).addClass('cur').siblings().removeClass('cur');
	                var current_index = $("a.cur").index();/* 获取左侧当前高亮的a标签的索引 */
            		
	                //总页数小于等于10，上下都不能点击
	                if(child_num <= 10){
	                	$(".icon_arrow_up").attr("disabled", true);
	    	        	$(".icon_arrow_down").attr("disabled", true);
	                }
	                //总页码大于10，并且当前索引小于10	
                	if(child_num > 10 && current_index <= 10){
                		count = 1;
                		$(".icon_arrow_up").attr("disabled", true).removeClass("icon_arrow_click");
                		$(".icon_arrow_down").removeAttr("disabled").addClass("icon_arrow_click");
                	}
                	//总页码大于10，并且当前索引是下一页的第1个时
                	if(child_num > 10 && current_index == (count * 10 + 1) ) {
                		count = Math.ceil(current_index/10);
                		$(".icon_arrow_up").removeAttr("disabled").addClass("icon_arrow_click");
                		if(count == page_num -1) {
                			$(".icon_arrow_down").attr("disabled", true).removeClass("icon_arrow_click");
                		}else {
                			$(".icon_arrow_down").removeAttr("disabled").addClass("icon_arrow_click");
                		}
                		$('.contract_tit').scrollTop((count -1) * 66 * 10);
                	}
                	//总页码大于10，并且当前索引是当前页的第10个时
                	if(child_num > 10 &&  current_index == (count * 10 )) {
                		count = Math.ceil(current_index / 10);
                		$(".icon_arrow_down").removeAttr("disabled").addClass("icon_arrow_click");
                		if(count == 1) {
                			/*$(".icon_arrow_down").attr("disabled", true).removeClass("icon_arrow_click");*/
                			$(".icon_arrow_down").removeAttr("disabled").addClass("icon_arrow_click");
                		}else {
                			$(".icon_arrow_up").removeAttr("disabled").addClass("icon_arrow_click");
                		}
                		$('.contract_tit').scrollTop((count -1) * 66 * 10)
                	}
                	//总页码大于10，并且当前索引小于下一页的第1个时（索引值1除外）
                	if(child_num > 10 && current_index > 10 &&  current_index < (page_num - 1)*10+1){
                		count = Math.ceil(current_index/10);
                		$(".icon_arrow_down").removeAttr("disabled").addClass("icon_arrow_click");
                		$(".icon_arrow_up").removeAttr("disabled").addClass("icon_arrow_click");
                	}
                	//总页码大于10，并且当前索引等于下一页的第1个时（包括索引值1）
                	if(child_num > 10 && current_index == (page_num - 1)*10+1){
                		count = Math.ceil(current_index / 10);
                		$(".icon_arrow_down").attr("disabled", true).removeClass("icon_arrow_click");
                		$(".icon_arrow_up").removeAttr("disabled").addClass("icon_arrow_click");
                	}
	                
	        	},
	        	whileScrollingInterval: 500,
	        },
	    });
	    
	    /* 向下翻页 */
	    $(".icon_arrow_down").click(function(event){
    		if(count < page_num) {
    			var cursor_index = $("a.cur").index();/* 获取左侧当前高亮的a标签的索引 */
                $(".contract_tit").animate({scrollTop: 66 * 10 * count},1000);
                /*$(".contract_tit a").eq(cursor_index + 9).addClass('cur').siblings().removeClass('cur');*/
                /*$(".mCSB_container").css('top', -(cursor_index + 9)*926);*/
                if(cursor_index + 9 > child_num){
                	$(".contract_tit a").eq(child_num-1).addClass('cur').siblings().removeClass('cur');
                	$(".mCSB_container").css('top', -(child_num-1)*928);
                	$(".icon_arrow_down").removeClass("icon_arrow_click").attr("disabled", true);
                }else{
                	$(".contract_tit a").eq(cursor_index + 9).addClass('cur').siblings().removeClass('cur');
                	$(".mCSB_container").css('top', -(cursor_index + 9)*928);
                }
    			count++; 
    			if(count >= page_num){
    				$(".icon_arrow_down").removeClass("icon_arrow_click").attr("disabled", true);
    			}
    		}
    		$(".icon_arrow_up").removeAttr("disabled").addClass("icon_arrow_click");
    		stopBubbling(event);
    	});
    		
    	/* 向上翻页  */
    	$(".icon_arrow_up").click(function(){
    		if(count > 1) { 
    			$(".icon_arrow_up").removeAttr("disabled").addClass("icon_arrow_click");
    			var cursor_index = $("a.cur").index();/* 获取左侧当前高亮的a标签的索引 */
    			count--;
    			var targetTop = 66 * 10 * (count - 1);
    			$(".contract_tit").animate({scrollTop: targetTop},1000);
    			$(".contract_tit a").eq(cursor_index - 11).addClass('cur').siblings().removeClass('cur');
                $(".mCSB_container").css('top', -(cursor_index - 11)*925);
                if((cursor_index - 11) < 1){
                	$(".icon_arrow_up").attr("disabled", true).removeClass("icon_arrow_click");
                }
    			if(count === 1){
    				$(".icon_arrow_up").attr("disabled", true).removeClass("icon_arrow_click");
    				$(".icon_arrow_down").removeAttr("disabled").addClass("icon_arrow_click");
    			}
    	    }
    		$(".icon_arrow_down").removeAttr("disabled").addClass("icon_arrow_click");
    		stopBubbling(event);
    	});
        
	    /* new add end */
    	function stopBubbling(e) {
            e = window.event || e;
            if (e.stopPropagation) {
                e.stopPropagation();      //阻止事件 冒泡传播
            } else {
                e.cancelBubble = true;   //ie兼容
            }
        }
    });
    
 })(jQuery);