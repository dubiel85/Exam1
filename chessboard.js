$(".square").on("click", function() {
    
    var white = $(this).hasClass("white");
    $(".square").toggleClass("white");
    $(".square").toggleClass("black");
    
    if(white) {
        alert("the class is white");
    }
    else {
        alert("the class is black");
    }
    
})
