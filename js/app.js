var currentPage = null;

var pages = [
    $("#hello"),
    $("#education"),
    $("#experience"),
    $("#moreExperience"),
];

$(".fa-arrow-circle-left").click(function () {
    currentPage = pages.pop();
    ShowPage(pages[0]);
});

$(".fa-arrow-circle-right").click(function () {
    
});