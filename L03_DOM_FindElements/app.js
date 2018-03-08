(function () {

    // var div1 = document.getElementById("div1");
    // div1.innerHTML = "Hello World";

    // var divs = document.getElementsByTagName("div"); //下方1234都是基于这个

    //1.
    // console.log(divs);
    // divs.div1.innerHTML = "Hello World";

    //2.
    // divs[0].innerHTML = "Hello World";

    //3.
    // for (var i = 0; i < divs.length; i++) {
    //     divs[i].innerHTML = "Hello World";
    // }

    //4.
    // for (var value of divs) {
    //     // console.log(value);
    //     // value.innerHTML = "Hello World";
    //     value.innerHTML = "<button>Click me</button>";
    // }

    //5.通过类名字获取(声明index.html中body中class的标签)
    // var divs = document.getElementsByClassName("mydiv");
    // console.log(divs);

    //6.根据选择器获取
    // document.querySelector("#div5").innerHTML = "Hello World"; //HTML5 API

    //7.
    var divs = document.querySelectorAll("div");  //这里的 div 是个选择器  所有的css都可以在这里写
    // console.log(divs);
    // divs.forEach(value => console.log(value));
    divs.forEach(e => e.innerHTML = "Hello World");

})();