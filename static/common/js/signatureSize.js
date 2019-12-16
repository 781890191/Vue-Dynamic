/**
 * 不同设备下签章的大小和放大、缩小效果
 */
$().ready(function(){
	var system ={ win : false, mac : false, xll : false};/*判断当前浏览的设备*/
	//检测平台     
	var navigatorType = navigator.platform;    
	system.win = navigatorType.indexOf("Win") == 0;   
	system.mac = navigatorType.indexOf("Mac") == 0;    
	system.x11 = (navigatorType == "X11") || (navigatorType.indexOf("Linux") == 0); 
	
	var contract_sign_type = $("#contract_sign_type").val(); /*获取当前的签署类型*/
	var CON_WIDTH = $("#contract_con").width(); /*合同的宽度*/
	var user_type = $("#user_type").val();	/*获取签署人的类型*/
	
	$(window).resize(function (){
		CON_WIDTH = $("#contract_con").width();
	});
	
	var img_ratio = 4.2/21; //签章与图片的比例值
	
	if(system.win || system.mac || system.xll){
		/* pc 端 */
		if(contract_sign_type == "WRITTEN" || contract_sign_type == "WRITTENCODE"){
			/*手写签署类型*/
			/*手写签署--签章的宽度*/
			var sign_img_w = CON_WIDTH * img_ratio;
			$("#signatureSize").css({"width": sign_img_w});
			$("#signatureSize").resizable({
				aspectRatio: true,
				minWidth: sign_img_w,
				maxWidth: sign_img_w * 3,
				containment: "parent"
			}).draggable({containment: "#contract_con", cursor: "move"});
		}else{
			/*签章签署类型*/
			/* 签章签署--公司签章的宽度是合同高度的4/21*/
			var sign_img_w = CON_WIDTH * img_ratio;
			if(user_type == 0){
				/*公司类型*/
				$("#signatureSize").css({"width": sign_img_w});
				$("#signatureSize").resizable({
					aspectRatio: true,
					minWidth: sign_img_w,
					maxWidth: sign_img_w * 3,
					containment: "parent"
				}).draggable({containment: "#contract_con", cursor: "move"});
			}else{
				/*个人类型*/
				$("#signatureSize").css({"width": sign_img_w/2});
				$("#signatureSize").resizable({
					aspectRatio: true,
					minWidth: sign_img_w/2,
					maxWidth: sign_img_w/2 * 3,
					containment: "parent"
				}).draggable({containment: "#contract_con", cursor: "move"});
			}
		}
	}else{
		/*mobile 端*/
		if(contract_sign_type == "WRITTEN" || contract_sign_type == "WRITTENCODE"){
			/*手写签署类型*/
			/*手写签署--签章的宽度100*/
			var sign_img_w = CON_WIDTH * img_ratio;
			$("#signerImg").css({"width": sign_img_w});
			$("#signerImg").resizable({
				aspectRatio: true,
				minWidth: sign_img_w,
				maxWidth: sign_img_w * 3,
				containment: "parent"
			}).draggable({containment: "#contract_con", cursor: "move"});
			$("#signerImg #imgDiv").css({"width": "100%", "height": "100%"});
		}else{
			/*签章签署类型*/
			/* 签章签署--公司签章的高度是合同宽度的4/21*/
			var sign_img_w = CON_WIDTH * img_ratio;
			if(user_type == 0){
				/*公司类型*/
				$("#signerImg").resizable({
					aspectRatio: true,
					minWidth: sign_img_w,
					maxWidth: sign_img_w * 3,
					containment: "parent"
				}).draggable({containment: "#contract_con", cursor: "move"});
			}else{
				/*个人类型*/
				$("#signerImg").resizable({
					aspectRatio: true,
					minWidth: sign_img_w/2,
					maxWidth: sign_img_w/2 * 3,
					containment: "parent"
				}).draggable({containment: "#contract_con", cursor: "move"});
			}
			$("#signerImg #imgDiv").css({"width": "100%", "height": "100%"});
		}
	} 
});
