/**
 * 给页面加入查看签章信息的js
 * 
 * @author zzk
 */
;
!function(window, undefined) {
	// 给页面添加信息，并赋予响应的事件或者展示数据
	jQuery.fn.addSignatureInfo = function(signNum, callback, pm) {
		if ('m' == pm) {
			showPromptMoblie(this, signNum, callback);
		} else {
			showPromptPc(this, signNum, callback);
		}
	}
	// 给页面添加提示信息
	jQuery.fn.tipsSignatureInfo = function(option, callback, pm) {
		// var zqid=option.zqid;
		// var contractNo=option.no;
		var This = this;
		$.ajax({
			url : "countSignOrder",
			type : "post",
			data : option,
			dataType : "json",
			success : function(result) {
				if (result.code == 0 && result.sign_order > 0) {
					if ('m' == pm) {
						showPromptMoblie(This, result.sign_order, callback);
					} else {
						showPromptPc(This, result.sign_order, callback);
					}
				}
			}
		});
	}
	/* pc */
	var showPromptPc = function(obj, signNum, callback) {
		$(obj).prepend("<div class='prompt_box_pc'><div class='prompt_contain_pc clearfix'>"
								+ "<div class='prompt_con_pc left'>"
								+ "<i class='iconfont icon-gantanhao icon_warningSign_pc'></i>"
								+ "<p class='prompt_msg_pc'>检测到当前合同有<span>"
								+ signNum
								+ "</span>个有效的数字签名</p>"
								+ "</div>"
								+ "<button onclick='"
								+ callback
								+ "()' class='btn_prompt_style_pc left'>点击查看</button>"
								+ "</div>" + "</div>");
	}

	/* moblie */
	var showPromptMoblie = function(obj, signNum, callback) {
		$(obj).prepend("<div class='prompt_box_moblie'><div class='prompt_contain_moblie clearfix'>"
								+ "<div class='prompt_con_moblie left'>"
								+ "<i class='iconfont icon-gantanhao icon_warningSign_moblie'></i>"
								+ "<p class='prompt_msg_moblie'>检测到当前合同有<span>"
								+ signNum
								+ "</span>个有效的数字签名</p>"
								+ "</div>"
								+ "<button onclick='"
								+ callback
								+ "()' class='btn_prompt_style_moblie right'>点击查看</button>"
								+ "</div>" + "</div>");
	}
	// 加载外部文件
	window.dynamicLoading = {
		css : function(path) {
			if (!path || path.length === 0) {
				throw new Error('argument "path" is required !');
			}
			var head = document.getElementsByTagName('head')[0];
			var link = document.createElement('link');
			link.href = path;
			link.rel = 'stylesheet';
			link.type = 'text/css';
			head.appendChild(link);
		},
		js : function(path) {
			if (!path || path.length === 0) {
				throw new Error('argument "path" is required !');
			}
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.src = path;
			script.type = 'text/javascript';
			head.appendChild(script);
		},
		getPath : function() {
			var js = document.scripts, script = js[js.length - 1], basePath = script.baseURI;
			if (script.getAttribute('merge'))
				return;
			return basePath.substring(0, basePath.lastIndexOf("/"));
		}
	}

	dynamicLoading.css("./static/common/fonts/iconfont.css");
}(window);
