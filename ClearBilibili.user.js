// ==UserScript==
// @name         ClearBilibili
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  让b站的视频观看页变得简洁
// @author       Automatic-Airz
// @match        *://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var right_column = document.querySelectorAll("#app > div.v-wrap > div.r-con");
    var comment = document.querySelectorAll("#comment");
    var right_column_children = right_column[0].children;
    right_column[0].style.display="none";
    comment[0].style.display="none";

    //延时运行，等那个广告栏加载出来再删除
    //出了点小问题，发现这个位置的广告栏有的时候是#activity_vote,有时是#bannerAd
    setTimeout(function() {
        var ad = document.querySelectorAll("#activity_vote");
        if(ad[0]!=null)ad[0].style.display="none";
        else {ad = document.querySelectorAll("#bannerAd");
        if(ad[0]!=null)ad[0].style.display="none";
        }


        //var end_panel = document.querySelectorAll("#bilibiliPlayer > div.bilibili-player-area.video-state-blackside.video-state-pause.video-state-ending-panel-flag.progress-shadow-show > div.bilibili-player-video-wrap > div.bilibili-player-ending-panel > div.bilibili-player-ending-panel-box.second-screen");
        //var end_panel = document.querySelectorAll("#bilibiliPlayer > div.bilibili-player-area.video-state-blackside.video-state-pause.progress-shadow-show > div.bilibili-player-video-wrap > div.bilibili-player-video-control-wrap > div.bilibili-player-video-control > div.bilibili-player-video-progress-shadow.bui.bui-slider > div > div.bui-bar-wrap > div.bui-bar.bui-bar-normal");
        //if(end_panel[0]!=null)console.log(1);
        //else console.log(0);

        }, 6000);

    setTimeout(function(){
        //下面这行查找元素要等到第二遍加载的时候再查找，b站网页加载的时候好像会先加载一遍简洁版的这个，然后再加载一个完整的
        var Headers = document.querySelectorAll("#biliMainHeader > div > div > ul.left-entry");
        //因为第一行第一列有个下拉框，鼠标放到位置就会展现出来，所以这个得移除
        if(Headers[0].children[0].children[0]!=null)
            {
                Headers[0].children[0].children[0].style.display="none";}
        for(var i=1;i<8;i++){
            if(Headers[0].children[i].children[0]!=null)
            {
                Headers[0].children[i].children[0].style.display="none";
                // Headers[0].children[i].children[0].style.visibility="hidden";
            }
        }
        var Headers2 = document.querySelectorAll("#biliMainHeader > div > div > ul.right-entry");
        if(Headers2[0].children[0].children[0]!=null)
            {
                Headers2[0].children[0].children[0].style.display="none";}
        for(i=1;i<8;i++){
            if(Headers2[0].children[i].children[0]!=null)
            {
                Headers2[0].children[i].children[0].style.display="none";
                //Headers2[0].children[i].children[0].style.visibility="hidden";
            }
        }
        //处理一下搜索框的推广
        var search_box = document.querySelectorAll("#nav-searchform > div.nav-search-content > input");
        if(search_box[0]!=null)
        {search_box[0].placeholder="bilibili简洁化已完成~";
         search_box[0].title="bilibili简洁化已完成~";}
        //把搜索框下的搜索历史、热搜都删掉了
        var navigator = document.querySelectorAll("#biliMainHeader > div > div > div > div > div");
        if(navigator[0]!=null)navigator[0].parentNode.removeChild(navigator[0]);
        }, 4000);
})();
