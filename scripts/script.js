$(function () {
    console.log("surprise!!! ");
    var data = [
        { date: "20220505", content: "夏天到啦，立夏快乐！！！" },
        { date: "20230927", content: "小屋重新装修啦，欢迎你！" },
    ];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var dataKey = data_1[_i];
        $(".row").append("<div class=\"col-sm-4\"><h3>".concat(dataKey.date, "</h3><p>").concat(dataKey.content, "</p></div>"));
    }
});
//# sourceMappingURL=script.js.map