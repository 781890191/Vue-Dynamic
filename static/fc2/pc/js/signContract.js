function getCookie(name){
	 var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	 if(arr=document.cookie.match(reg)) return unescape(arr[2]); else return null;
}
function delCookie(name){
	 var exp = new Date();
	 exp.setTime(exp.getTime() - 1);
	 var cval=getCookie(name);
	 if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
$(document).ready(function(){
	
	// 合同详情
    $(".detail_btn").click(function(event) {
        $(".detail_con").slideToggle();
        $(this).find('img').css('transform', 'rotateX(180deg)');
        if ($(".detail_con").is(":hidden")) {
            $(this).find('img').css('transform', 'rotateX(0)');
        };
    }).click();
	
    //滚动条事件
    $(window).scroll(function(){
    	//获取滚动条的滑动距离
    	var scroH = $(this).scrollTop();
    	/*当数字签名和签署人详情都隐藏*/
    	if($(".detail_con").is(":hidden") && $(".prompt_box_pc").is(":hidden")){
    		if(scroH >= 148){
    			$(".btn_sign_box").css({ "position": "fixed", "top": 0, "margin-left": 760,});
    		}else if(scroH < 148){
    			$(".btn_sign_box").css({"position":"static","margin-left": 20,});
    		}
    	}
    	/*当数字签名隐藏*/
    	if($(".prompt_box_pc").is(":visible")){
    		if(scroH >= 198){
    			$(".btn_sign_box").css({ "position": "fixed", "top": 0, "margin-left": 760,});
    		}else if(scroH < 198){
    			$(".btn_sign_box").css({"position":"static","margin-left": 20,});
    		}
    	}
    	/*当签署人详情隐藏*/
    	if($(".detail_con").is(":visible")){
    		if(scroH >= 320){
    			$(".btn_sign_box").css({ "position": "fixed", "top": 0, "margin-left": 760,});
    		}else if(scroH < 320){
    			$(".btn_sign_box").css({"position":"static","margin-left": 20,});
    		}
    	}
    	/*当数字签名和签署人详情都显示*/
    	if($(".detail_con").is(":visible") && $(".prompt_box_pc").is(":visible")){
    		if(scroH >= 370){
    			$(".btn_sign_box").css({ "position": "fixed", "top": 0, "margin-left": 760,});
    		}else if(scroH < 370){
    			$(".btn_sign_box").css({"position":"static","margin-left": 20,});
    		}
    	}
		
    });
     
});