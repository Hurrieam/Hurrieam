$(() => {
    console.log("surprise!!! ");

    const data = [
        {date: "20220505", content: "夏天到啦，立夏快乐！！！"},
        {date: "20230927", content: "小屋重新装修啦，欢迎你！"},
    ];

    for (const dataKey of data) {
        $(".row").append(`<div class="col-sm-4"><h3>${dataKey.date}</h3><p>${dataKey.content}</p></div>`);
    }
});
