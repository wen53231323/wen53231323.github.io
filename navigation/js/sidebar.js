$(document).ready(function () {
    //菜单点击
    $("#menu").click(function (event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
        $(".mywth").toggleClass('hidden');
    });
});