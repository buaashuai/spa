/*同步加载文件并执行回调*/
/* 已加载文件缓存列表,用于判断文件是否已加载过，若已加载则不再次加载*/
var classcodes =[];
window.Import={
    /*加载一批文件，_files:文件路径数组,可包括js,css,less文件,succes:加载成功回调函数*/
    LoadFileList:function(_files,succes){
        var FileArray=[];
        if(typeof _files==="object"){
            FileArray=_files;
        }else{
            /*如果文件列表是字符串，则用,切分成数组*/
            if(typeof _files==="string"){
                FileArray=_files.split(",");
            }
        }
        if(FileArray!=null && FileArray.length>0){
            var LoadedCount=0;
            for(var i=0;i< FileArray.length;i++){
                loadFile(FileArray[i],function(){
                    LoadedCount++;
                    if(LoadedCount==FileArray.length){
                        succes();
                    }
                })
            }
        }
        /*加载JS文件,url:文件路径,success:加载成功回调函数*/
        function loadFile(url, success) {
            if (!FileIsExt(classcodes,url)) {
                var ThisType=GetFileType(url);
                var fileObj=null;
                if(ThisType==".js"){
                    fileObj=document.createElement('script');
                    fileObj.src = url;
                }else if(ThisType==".css"){
                    fileObj=document.createElement('link');
                    fileObj.href = url;
                    fileObj.type = "text/css";
                    fileObj.rel="stylesheet";
                }else if(ThisType==".less"){
                    fileObj=document.createElement('link');
                    fileObj.href = url;
                    fileObj.type = "text/css";
                    fileObj.rel="stylesheet/less";
                }
                success = success || function(){};
                fileObj.onload = fileObj.onreadystatechange = function() {
                    if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                        success();
                        classcodes.push(url)
                    }
                }
                document.getElementsByTagName('head')[0].appendChild(fileObj);
            }else{
                success();
            }
        }
        /*获取文件类型,后缀名，小写*/
        function GetFileType(url){
            if(url!=null && url.length>0){
                return url.substr(url.lastIndexOf(".")).toLowerCase();
            }
            return "";
        }
        /*文件是否已加载*/
        function FileIsExt(FileArray,_url){
            if(FileArray!=null && FileArray.length>0){
                var len =FileArray.length;
                for (var i = 0; i < len; i++) {
                    if (FileArray[i] ==_url) {
                       return true;
                    }
                }
            }
            return false;
        }
    }
}

var hackFun = function(){
  // $(".up").trigger("click");
  console.log($("#J_LinkBasket"));
  $("#J_LinkBasket").click();
};
if(!window.jQuery && !window.$){
  console.log("引入jQuery");
  var FilesArray=["http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"];
  Import.LoadFileList(FilesArray, function(){
    // 加载完jquery执行回调
    // timerTask(1000, hackFun, 4);
  });
}else{
  // timerTask(1000, hackFun, 4);
}

/**
 * 争抢任务
 * @param  {[Number]}   interval [任务执行间隔时间，毫秒]
 * @param  {Function} fn       [任务函数]
 * @param  {[Number]}   times    [任务执行次数，默认无数次]
 */
function timerTask(interval, fn, times){
  times = times || Number.MAX_VALUE - 1;
  var num =1;
  var timer =setInterval(function(){
    fn();
    num++;
    if(num>times)
        window.clearInterval(timer);
  }, interval);
}



/**
 *
 *
 *      如果不支持jQuery（例如采用HTTPS协议的网站），则采用原生的js实现脚本注入
 * 
 * 
 */


// 获取某个class的dom对象
function getElementsClass(classname){
  var result = [];
  var tmp = document.getElementById(classname);
  if(tmp){
    result.push(tmp);
  }
  var tags=document.getElementsByTagName("*");//获取HTML的所有标签 
  for(var i in tags){//对标签进行遍历 
    if(tags[i].nodeType==1){//判断节点类型 
      if((''+tags[i].getAttribute("class")).indexOf(classname)>=0){
        result.push(tags[i]);
      }
    }
  }
  return result;
}

// 生成点击事件
function fireClick(node){
    if (document.createEvent) {
        var evt = document.createEvent('MouseEvents');
        evt.initEvent('click', true, false);
        node.dispatchEvent(evt);
    } else if(document.createEventObject) {
        node.fireEvent('onclick') ;
    } else if (typeof node.onclick == 'function') {
        node.onclick();
    }
}

// timerTask(1000, function(){
//   var a=getElementsClass("J_LinkBasket");
//   console.log(a[0]);
//   fireClick(a[0]);
// }, 4);
