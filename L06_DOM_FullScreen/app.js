(function () {

    var rect = document.querySelector(".rect");
    rect.onclick = function () {
        //切记 要看文档 每个浏览器是不一样的  (文档 https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen)
        //这里以谷歌为例
        rect.requestFullscreen = rect.requestFullscreen || rect.webkitRequestFullScreen || rect.mozRequestFullscreen || rect.msRequestFullscreen;
        rect.requestFullscreen();
    }

})();