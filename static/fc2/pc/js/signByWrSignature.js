$(document).ready(function(){
  // 签名(显示出签章)
  $('.sign2 .sign_btn2').click(function(event) {
    $('.mengban_box').show();
    var user_code = $("#user_code_hidden").val();
    var zqid = $("#zqid-hidden").val();
    var token = $("#token-hidden").val();
    //请求服务器取出签章图片赋给imgDiv下的img
    let data = {
      "zqid":zqid,
      "token":token,
      "user_code":user_code
    }
    parent.getQuery(data)
    // $.ajax({
    //  type: "POST",
    //  url: "http://signtest.zqsign.com/gainDefault",
    //  data: "zqid="+zqid+"&token="+token+"&user_code="+user_code,
    //  dataType:"json",
    //  success: function(msg){
    //    if (msg == null || msg == undefined || msg == ''){
    //    }else{
    //      userType=msg.userType;
    //      var signature=msg.signbradge;
    //      $("#imgDiv").html("<img src='data:image/png;base64,"+signature+"' alt='' />");
    //      dingwei();
    //    }
    //  }
  // });
    
  });
});
function showImage (data){
  let info = JSON.parse(data)
  userType=info.userType;
  var signature=info.signbradge;
  $("#imgDiv").html("<img src='data:image/png;base64,"+signature+"' alt='' />");
  dingwei();
}

var userType=0;//用户类型
var img_ratio = 4.4/21;
//如果有定位就直接把签章定位
function dingwei(){
var po = $(".position-sign");
var pageNum = po.eq(0).val();
var xScale = po.eq(1).val();
var yScale = po.eq(2).val();
//计算签章大小
var img=$("#page1");
var imgh=img.height();
var imgw=img.width();

var imgDiv=$("#imgDiv");
/*签章图片的高度*/
var imgwid = imgw * img_ratio;	
/*签章图片的高度*/
var imgheig = imgwid;
if(userType == 1){ //个人
  imgheig = imgheig/2;
  imgwid = imgwid/2;
}

if(pageNum=="" || xScale=="" || yScale==""){
  //成功的的话执行下面的操作
  $('.mengban_box').hide();
  $('.signName1').hide();
  $('.sign2').hide(); //隐藏掉签署的按钮
  $('.tijiaoSign2').show();//显示出提交按钮
  // $('.sign_name2').css({"top": 20,"left":20});/*签章默认位置是第一页的 左上角 20 20*/
  var page_Nav = $('.contract_tit a');
  var current_page = parseInt( (pageNum-1) / 10 );
  // $(".contract_tit").animate({scrollTop: $(".contract_tit")[0].scrollHeight},100);
  page_Nav.eq(pageNum-1).addClass('cur').siblings().removeClass('cur');
  page_Nav.eq(pageNum-1).click();
  
  $("#signatureSize").css("width",imgwid); //给签章大小设置样式覆盖
  let imgHeight = $('.contractImg').height()
  let num = (page_Nav.length)*imgHeight -200
  // $(".sign_name2").css('top', +num); //屏幕下滑到签名位置
  $(".sign_name2").animate({top:num}, "slow");
  $('.sign_name2').show();//显示出签名图片
}else{
  //成功的的话执行下面的操作
  $('.mengban_box').hide();
  $('.signName1').hide();
  //显示出签名图片
  
  var index =  parseInt(pageNum) -1;
  var topY = parseFloat(imgh) - parseFloat(yScale) * parseFloat(imgh)+ parseFloat(index) *  parseFloat(imgh) - imgheig/2;		
  var leftX = parseFloat(xScale) * parseFloat(imgw);
  $('.sign_name2').css({"top":topY,"left":leftX});
  $('.sign_name2').show();
  
  $(".mCSB_container").css('top', -(pageNum-1)*imgh); //屏幕下滑到签名位置
  $("#signatureSize").css("width",imgwid); //给签章大小设置样式覆盖
  if(pageNum > 1){
    //左侧页码样式
    var pagebtn = $('.contract_tit a');
    pagebtn.eq(pageNum-1).addClass('cur').siblings().removeClass('cur');
    var current_page = parseInt( (pageNum-1) / 10 );
    $(".contract_tit").animate({scrollTop: current_page * imgh},100);
    pagebtn.eq(pageNum-1).click();
  }
  
  $('.sign2').hide(); //隐藏掉签署的按钮
  $('.tijiaoSign2').show();//显示出提交按钮
}
}

//删除签章图片
function clearSignImg(){
/*$(".signature-info").val("");
    var imgs = $("#imgDiv").parent().hide().find("img");
    imgs.eq(0).attr("src","");
    $(".sign_name2").removeAttr("style");*/
$(".signature-info").val("");
$("#imgDiv").html("").parent().hide();
//刪除自动添加的样式
$("#signatureSize").css({"top":"","position":"","display":"none"});
}
$('.sign_name2 .close').click(function(event) {
clearSignImg();
$('.sign2').show(); //显示出签署的按钮
$('.tijiaoSign2').hide();//隐藏掉提交的按钮
});

//所有的都完成了提交
$('.tijiaoSign .sign_btn2').click(function(event) {
$('.mengban_box').show();
$('.signName').hide();
//提交表单
fillFormInput();
});
$('.tijiaoSign .sign_btn2').on("click",fillFormInput);

var subNTimer;
function fillFormInput(){
$('.mengban_box').show();
$('.signName').hide();
showMengban_box();
clearTimeout(subNTimer);
subNTimer = setTimeout(function (){
  var signature = $("#imgDiv img");
  var signatureVal = signature.attr("src");
  //去除开头的 data:image/png;base64,
  var finishimage =  signatureVal.replace("data:image/png;base64,","");
  //签章图片大小
  var signHei = signature.height();	
  var signwid = signature.width();	
  //图片大小
  var imgHei = $("#page1").height();	
  var imgwid = $("#page1").width();
  if(!imgHei){
    imgHei = 925;	
    imgwid = 654;
  }
  //
  var sign_name2 = $(".sign_name2");
  var topAll = Math.abs(parseInt(sign_name2.css("top")));
  var page = parseInt((topAll+20)/imgHei); 
  var leftX = parseInt(sign_name2.css("left"));
  var topY = topAll - page*imgHei;
  var sp = $(".signature-info");
  sp.eq(0).val(leftX);
  sp.eq(1).val(topY);
  sp.eq(2).val(page+1);
  if(!finishimage){
//			$("#layui-layer2").hide();//layui-layer-shade2
//			$("#layui-layer-shade2").hide();
    $(".layui-layer-content").hide();
    $(".layer-anim").hide();
    $(".layui-layer-shade").hide();
    $(".dialog-bg").show();
    return false;
  }
   if(signwid=="0"||signHei=="0"){
     $(".layui-layer-content").hide();
    $(".layer-anim").hide();
    $(".layui-layer-shade").hide();
    $(".dialog-bg").show();
     return false;
   }
  sp.eq(3).val(signwid);
  sp.eq(4).val(signHei);
  sp.eq(5).val(imgwid);
  sp.eq(6).val(imgHei);
  sp.eq(7).val(finishimage);
  var token = $("#token-hidden").val();
  delCookie(token);
  // 获取from参数 
    var form = document.getElementById('signContractSave');  
    var elements = new Array();  
    var tagElements = form.getElementsByTagName('input');  
    for (var j = 0; j < tagElements.length; j++){ 
       elements.push(tagElements[j]); 
    
    } 
    let obj = {}
    for (let i =0;i<elements.length;i++) {
      if (elements[i].name === '') {continue}
      let name = elements[i].name
      let val = elements[i].value
      obj[name] = val
    }
  // 调用父级方法，进行合约签署
  parent.sendQuery(obj);
  return false;
},500);
}

//loading层
var indexLayer;
function showMengban_box(){
indexLayer = layer.load(0, {
  shade: [0.1,'#fff'] //0.1透明度的白色背景
});
return false;
}
function hideMengban_box(){
layer.close(indexLayer);
}
