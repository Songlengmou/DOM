(function () {

    var container = document.getElementById("container");
    // container.innerHTML = "<a href='https://www.baidu.com'>BaiDu</a>";

    //使用节点操作
    var aNode = document.createElement("a");
    aNode.href = "https://www.baidu.com";
    aNode.innerHTML = "BaiDu";
    container.appendChild(aNode);

    //①
    var btn = document.createElement("button");
    btn.innerHTML = "Click me";
    btn.onclick = function () {
        alert("Button clicked");
    };
    container.appendChild(btn);

    //②
    function addButton(id) {
        var div = document.createElement("div");
        var btn = document.createElement("button");
        btn.innerHTML = "Click button[" + id + "] to remove me";
        btn.onclick = function () {
            div.parentNode.removeChild(div);
        };
        div.appendChild(btn);
        container.appendChild(div);
    }

    for (var i = 0; i < 10; i++) {
        addButton(i);
    }
})();