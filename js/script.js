// var nextHair = ("#hair")
var hairIndex = 0;
var baseIndex =0;
var topIndex =0;
var bottomIndex = 0;
var shoeIndex = 0;

var skin = ["Images/base_1.png", "Images/base_2.png", "Images/base_3.png", "Images/base_4.png"]
var hairs = ["Images/hair1.png", "Images/hair2.png", "Images/hair3.png", "Images/hair4.png",
    "Images/hair5.png", "Images/hair6.png", "Images/hair7.png", "Images/hair8.png", "Images/hair9.png", "Images/hair10.png"]
var tops = ["Images/top_1.png", "Images/top_2.png", "Images/top_3.png", "Images/top_4.png", "Images/top_5.png",
    "Images/top_6.png", "Images/top_7.png", "Images/top_8.png", "Images/top_9.png", "Images/top_10.png",]
var bottoms = ["Images/bottom_1.png", "Images/bottom_2.png", "Images/bottom_3.png", "Images/bottom_4.png", "Images/bottom_5.png",
    "Images/bottom_6.png", "Images/bottom_7.png", "Images/bottom_8.png", "Images/bottom_9.png", "Images/bottom_10.png"]
var shoes = ["Images/shoes_1.png", "Images/shoes_2.png", "Images/shoes_3.png"]
var hairSlider = document.getElementById("hairRange");
var topSlider = document.getElementById("topRange");
var bottomSlider = document.getElementById("bottomRange");
var shoeSlider = document.getElementById("shoeRange");

//change hair function
$(".next-base").on("click", function () {
    baseIndex++;
    if (baseIndex == skin.length) {
        baseIndex = 0;
    }
    $('#change-base').attr("src", skin[baseIndex]);

}
);
$(".prev-base").on("click", function () {
    baseIndex--;
    if (baseIndex == -1) {
        baseIndex = 0;
    }
    $('#change-base').attr("src", skin[baseIndex]);

}
);

//change hair function
$(".next-hair").on("click", function () {
    hairIndex++;
    if (hairIndex == hairs.length) {
        hairIndex = 0;
    }
    $('#change-hair').attr("src", hairs[hairIndex]);

}
);
$(".prev-hair").on("click", function () {
    hairIndex--;
    if (hairIndex == -1) {
        hairIndex = 0;
    }
    $('#change-hair').attr("src", hairs[hairIndex]);

}
);
hairSlider.oninput = function () {
    document.getElementById("change-hair").style.filter = "hue-rotate(" + this.value + "deg)";
}



//change top function
$(".next-top").on("click", function () {
    topIndex++;
    if (topIndex == tops.length) {
        topIndex = 0;
    }

    $('#change-top').attr("src", tops[topIndex]);

}
);

$(".prev-top").on("click", function () {
    topIndex--;
    if (topIndex == -1) {
        topIndex = 0;
    }
    $('#change-top').attr("src", tops[topIndex]);

}
);
topSlider.oninput = function () {
    document.getElementById("change-top").style.filter = "hue-rotate(" + this.value + "deg)";
}
//change bottom function
$(".next-bottom").on("click", function () {
    bottomIndex++;
    if (bottomIndex == bottoms.length) {
        bottomIndex = 0;
    }
    $('#change-bottom').attr("src", bottoms[bottomIndex]);

}

);
$(".prev-bottom").on("click", function () {
    bottomIndex--;
    if (bottomIndex == -1) {
        bottomIndex = 0;
    }
    $('#change-bottom').attr("src", bottoms[bottomIndex]);

}
);
bottomSlider.oninput = function () {
    document.getElementById("change-bottom").style.filter = "hue-rotate(" + this.value + "deg)";
}

//change bottom function
$(".next-shoe").on("click", function () {
    shoeIndex++;
    if (shoeIndex == shoes.length) {
        shoeIndex = 0;
    }
    $('#change-shoe').attr("src", shoes[shoeIndex]);

}

);
$(".prev-shoe").on("click", function () {
    shoeIndex--;
    if (shoeIndex == -1) {
        shoeIndex = 0;
    }
    $('#change-shoe').attr("src", shoes[shoeIndex]);

}
);
shoeSlider.oninput = function () {
    document.getElementById("change-shoe").style.filter = "hue-rotate(" + this.value + "deg)";
}
