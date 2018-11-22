/*
* @Author: tongdev
* @Date:   2018-11-20 19:32:25
* @Last Modified by:   tongdev
* @Last Modified time: 2018-11-22 19:44:15
*/
<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/favicon.ico");
         document.title = '页面崩溃啦 | 快回来！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/favicon.ico");
         document.title = '我们又见面了~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });