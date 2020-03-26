var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
function restartGame(){
    clicks = 0;
    target.x = getRandomNumber(mapImageInfo.width);
    target.y = getRandomNumber(mapImageInfo.height);
    setImageVisible("treasureImg", false);
    $("#distance").text("Target " + target.x + " " + target.y);    
}

var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
var getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Boiling hot! (Очень горячо!)";
    } else if (distance < 20) {
        return "Really hot! ( Совсем горячо!)";
    } else if (distance < 40) {
        return "Hot! (Горячо!)";
    } else if (distance < 80) {
        return "Warm! (Тепло!)";
    } else if (distance < 160) {
        return "Cold! (Холодно!)";
    } else if (distance < 320) {
        return "Really cold! (Совсем холодно!)";
    } else {
        return "Freezing! (Леденящий холод!)";
    }
};

var mapImageInfo = {x: 0, y: 0, width: 0, height: 0};
var setUpImageInfo = function(){
    var img = document.getElementById("map");
    mapImageInfo.x = img.x;
    mapImageInfo.y = img.y;
    mapImageInfo.width = img.width;
    mapImageInfo.height = img.height;
}

var setImageVisible = function (id, visible) {
    var idJq = "#" + id;
    var visibilityJq = (visible ? 'visible' : 'hidden');
    var img = document.getElementById("map");
    var mapX = img.x;
    var mapY = img.y;
    var imgTrsre = document.getElementById("treasureImg");
    var tresureImgPos = { width: imgTrsre.x, height: imgTrsre.y };
    var tresureImgSize = { width: imgTrsre.width, height: imgTrsre.height };
    var leftOfImg = target.x - imgTrsre.width/2;
    var topOfImg = target.y - imgTrsre.height/2;

    $(idJq).css({
        left: leftOfImg,
        top: topOfImg,
        visibility: visibilityJq
    }).show();
    $(idJq).fadeOut(4000);
};

