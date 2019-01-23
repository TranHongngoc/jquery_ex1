$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide();
    });
    $("#show").click(function () {
        $("p").show();
    });
});

$(document).ready(function () {
    $("#start").click(function () {
        var div = $("div");
        div.animate({left: '250px'}, "slow");
        div.animate({fontSize: '100px'}, "slow");
    });
});