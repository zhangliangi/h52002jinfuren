/*
 * @Author: your name
 * @Date: 2020-06-06 09:35:14
 * @LastEditTime: 2020-06-07 15:02:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \金夫人\js\banner.js
 */ 
var btns =document.querySelectorAll("[name='btn']");

var as =document.querySelectorAll("[name='di']");
console.log(btns)
var banner = document.getElementsByClassName("Homebanner")[0];
var div =document.getElementsByClassName("bannerbox")[0];
    console.log(banner)
var j=0;
for(var i in btns){
    btns[i].onclick=function(){
        if(this.innerHTML=="&gt;"){
            dong(1);
    }else{
        dong(-1);
    }
} 
    }
    for(var i in as){
        as[i].onclick=function(){
            dong(this);
        }
    }
   
    timer=setInterval(function(){
        dong(1);
    },3000)

    div.onmouseover=function(){
        clearInterval(timer);
        btns[1].className='marright';
         btns[0].className='marleft';
        timer=null;
    }
    div.onmouseout=function(){
        timer=setInterval(function(){
        dong(1);
    },3000)
    btns[1].className='';
    btns[0].className='';
    }

    window.onblur = function () {//窗口失焦时，计时器停止
clearInterval(timer);
timer=null;
}
window.onfocus = function () {
    timer=setInterval(function(){
        dong(1);
    },3000)//获焦时开启计时器
}



    function dong(t){
        if(typeof(t)==="number"){
            j+=t;
            if(j==5){
            j=0;
        }
        if(j==-1){
            j=4;
        }

        }else{
            j=parseInt(t.getAttribute("sh")) ;
        }
        banner.style.left=j*(-100)+"%";
        for(var i=0;i<as.length;i++){
            as[i].className="";
        }
        as[j].className="cur";
    }