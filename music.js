$(function() {
    getSong();
})
var music_list = [
    "http://s.uxuejiaoyu.cc/test/music1.mp3",
    "http://s.uxuejiaoyu.cc/test/music2.mp3",
    "http://s.uxuejiaoyu.cc/test/music3.mp3",
    "http://s.uxuejiaoyu.cc/test/music4.mp3"
], current_position = 0;
//获取歌曲链接并插入dom中
function getSong() { 
    var audio = document.getElementById("audio");
    getPlayingSong();
    audio.loop = false; //歌曲循环
    playCotrol(); //播放控制函数

}

//点击播放/暂停
function clicks() {
    console.log($._data($('#control')[0], 'events'));
    if(!$._data($('#control')[0], 'events')){
        console.log('#control绑定 click');
        var audio = document.getElementById("audio");
        $("#control").click(function() {
            if ($("#control").hasClass("play")) {
                $("#control").addClass("pause").removeClass("play");
                audio.play();//开始播放
                audio.autoplay = "autoplay";
                dragMove();//并且滚动条开始滑动
                $("#control").html("暂停播放");
            } else {
                $("#control").addClass("play").removeClass("pause");
                $("#control").html("点击播放");
                audio.pause();
            }
        })
    }
}

//播放时间
function timeChange(time, timePlace) {//默认获取的时间是时间戳改成我们常见的时间格式
    var timePlace = document.getElementById(timePlace);
    //分钟
    var minute = time / 60;
    var minutes = parseInt(minute);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //秒
    var second = time % 60;
    seconds = parseInt(second);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var allTime = "" + minutes + "" + ":" + "" + seconds + ""
    timePlace.innerHTML = allTime;
}

//播放事件监听
function playCotrol() {
    audio.addEventListener("loadeddata", //歌曲一经完整的加载完毕( 也可以写成上面提到的那些事件类型)
        function() {
            console.log('loadeddata');
            $("#control").addClass("play").removeClass("color_gray");
            $("#control").html("点击播放");
            addListenTouch(); //歌曲加载之后才可以拖动进度条
            var allTime = audio.duration;
            timeChange(allTime, "allTime");
            setInterval(function() {
                var currentTime = audio.currentTime;
                $("#time .currentTime").html(timeChange(currentTime, "currentTime"));
            }, 1000);
            clicks();
        }, false);

    audio.addEventListener("pause",
        function() { //监听暂停
            $("#control").addClass("play").removeClass("pause");
            $("#control").html("点击播放");
            if (audio.currentTime == audio.duration) {
                if(audio.stop){
                    audio.stop();
                }
                audio.currentTime = 0;
            }
        }, false);
    audio.addEventListener("play",
        function() { //监听暂停
            $("#control").addClass("pause").removeClass("play");
            $("#control").html("暂停播放");
            dragMove();
        }, false);
    audio.addEventListener("ended", function() {
        getPlayingSong();
        // console.log('ended');
    }, false)
}
// 获取待播放的音乐
function getPlayingSong() {
    audio.src = music_list[current_position];
    console.log('当前播放：'+audio.src);
    current_position = (current_position + 1) % music_list.length;
}

//进度条
//这里我用的是事件实现进度拖动 如果不太熟悉touch的可以看下我之前写的一个小demo http://www.cnblogs.com/leinov/p/3701951.html
 var startX, x, aboveX = 0; //触摸时的坐标 //滑动的距离  //设一个全局变量记录上一次内部块滑动的位置 

//1拖动监听touch事件
function addListenTouch() {
    document.getElementById("drag").addEventListener("touchstart", touchStart, false);
    document.getElementById("drag").addEventListener("touchmove", touchMove, false);
    document.getElementById("drag").addEventListener("touchend", touchEnd, false);
    var drag = document.getElementById("drag");
    var speed = document.getElementById("speed");
}

//touchstart,touchmove,touchend事件函数
 function touchStart(e) {  
     e.preventDefault();
     var touch = e.touches[0];
     startX = touch.pageX; 
 }
 function touchMove(e) { //滑动          
     e.preventDefault();
     var touch = e.touches[0];
     x = touch.pageX - startX; //滑动的距离
     //drag.style.webkitTransform = 'translate(' + 0+ 'px, ' + y + 'px)';  //也可以用css3的方式     
     drag.style.left = aboveX + x + "px"; //  
     speed.style.left = -((window.innerWidth) - (aboveX + x)) + "px";
 }
 function touchEnd(e) { //手指离开屏幕
     e.preventDefault();
     aboveX = parseInt(drag.style.left);
     var touch = e.touches[0];
     var dragPaddingLeft = drag.style.left;
     var change = dragPaddingLeft.replace("px", "");
     numDragpaddingLeft = parseInt(change);
     var currentTime = (numDragpaddingLeft / (window.innerWidth - 30)) * audio.duration;//30是拖动圆圈的长度，减掉是为了让歌曲结束的时候不会跑到window以外
     audio.currentTime = currentTime;
 }
//3拖动的滑动条前进
function dragMove() {
    setInterval(function() {
        drag.style.left = (audio.currentTime / audio.duration) * (window.innerWidth - 30) + "px";
        speed.style.left = -((window.innerWidth) - (audio.currentTime / audio.duration) * (window.innerWidth - 30)) + "px";
    }, 500);
}