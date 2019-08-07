var currentPage = 1;

const pages = [ 
    null,
    $("#hello"),
    $("#education"),
    $("#experience"),
    $("#moreExperience"),
    $("#moreAbout")
]

const page = {
    hello: 1,
    education: 2,
    experience: 3,
    moreExperience: 4,
    projects: 5
}

$(".fa-chevron-down").click(function () {
    console.log("Down");
    currentPage++;
    if (currentPage > 5) {
        currentPage = 5;
    }
    ShowPage(currentPage);
});

$(".fa-chevron-up").click(function () {
    console.log("Up");
    currentPage--;
    if (currentPage < 1) {
        currentPage = 1;
    }
    ShowPage(currentPage);
});

function ShowPage(page) {
    for (let i = 1; i <= 5; i++) {
        if (i == page) {
            pages[i].show();
            currentPage = i;
        }
        else{
            pages[i].hide();
        }   
    }
}

$(document).ready(function (){
    ShowPage(page.hello);
});
