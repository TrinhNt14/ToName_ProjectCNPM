var language = "vi";
var sound = "off";
$(".start").click(function(){
    $("#menuStart").css({"display" : "none"});
    GotoLesson();
});
$("#chooseLanguage").click(function(){
    $("#languageDialog").slideToggle();
});
$(".Language:eq(0)").click(function(){
    language = "en";
    $(".backText").text('BACK');
    $(".textStart").text('START');
    $(".textStart").css({"margin-left": "50px"});
    $(".textSound:eq(0)").text('SOUND');
    $(".textSound:eq(0)").css({"margin-left": "55px"});
    if(sound == "off") {
        $(".textSound:eq(1)").text('OFF');
    }
    else {
        $(".textSound:eq(1)").text('ON');
    }
    $("#mainLanguage").text('ENGLISH');
    $("#mainLanguage").css({"margin-left": "25px"});
    $("#languageDialog").css({"display" : "none"});
});
$(".Language:eq(1)").click(function(){
    language = "vi";
    $(".backText").text('TRỞ VỀ');
    $(".textStart").text('BẮT ĐẦU');
    $(".textStart").css({"margin-left": "35px"});
    $(".textSound:eq(0)").text('ÂM THANH');
    $(".textSound:eq(0)").css({"margin-left": "35px"});
    if(sound == "off") {
        $(".textSound:eq(1)").text('TẮT');
    }
    else {
        $(".textSound:eq(1)").text('BẬT');
    }
    $("#mainLanguage").text('TIẾNG VIỆT');
    $("#mainLanguage").css({"margin-left": "0px"});
    $("#languageDialog").css({"display" : "none"});
});
$(".turnSound").click(function(){
    if(sound == "off") {
        turnOnSound();
    }
    else {
        turnOffSound();
    }
})
function turnOnSound() {
    sound = "on";
    turnOnAudio(audioTheme);
    if(language == "vi") {
        $(".textSound:eq(1)").text('BẬT');
    }
    else {
        $(".textSound:eq(1)").text('ON');
    }
    $(".textSound:eq(1)").css({"margin-left": "62px"});
    $(".turnSound").css({"background-image": "url(../Image/onSound.png)"});
}
function turnOffSound() {
    sound = "off";
    turnOffAudio(audioTheme);
    if(language == "vi") {
        $(".textSound:eq(1)").text('TẮT');
    }
    else {
        $(".textSound:eq(1)").text('OFF');
    }
    $(".textSound:eq(1)").css({"margin-left": "100px"});
    $(".turnSound").css({"background-image": "url(../Image/offSound.png)"});
}
var audioTheme = 0;
var audioWrong = 1;
var audioCorrect = 2;
var audioCompleted = 3;
function turnOnAudio(audio) {
    $("audio")[audio].play();   
}
function turnOffAudio(audio){
    $("audio")[audio].pause();
}
var lineContext = $("#line")[0].getContext("2d");
function GotoLesson() {
    setTimeout(function(){
        $("#bodyMain").css({ "display": "block"});
        lineContext.lineWidth = 3;
        lineContext.beginPath();
        lineContext.strokeStyle = "yellow";
        lineContext.lineCap = "round";
        drawLine(200, 165, 320, 190);
        drawLine(200, 370, 400, 370);
        drawLine(500, 165, 600, 165);
        drawLine(450, 280, 600, 320);
        drawLine(420, 450, 600, 470);
    },500);
    addTagName();
    setTimeout(randomPart,2000);
}
function drawLine(x, y, x1, y1) {
    lineContext.moveTo(x,y);
    lineContext.lineTo(x1,y1);
    lineContext.stroke();
}
var tagName = 5;
function addTagName() {
    $(".box:eq(5)").mousedown(function(){
        checkDrag(5);
    });
    $(".box:eq(6)").mousedown(function(){
        checkDrag(6);
    });
    $(".box:eq(7)").mousedown(function(){
        checkDrag(7);
    });
    $(".box:eq(8)").mousedown(function(){
        checkDrag(8);
    });
    $(".box:eq(9)").mousedown(function(){
        checkDrag(9);
    });
    $(".box:eq(5)").mouseup(function(){
        checkDrop();
    });
    $(".box:eq(6)").mouseup(function(){
        checkDrop();
    });
    $(".box:eq(7)").mouseup(function(){
        checkDrop();
    });
    $(".box:eq(8)").mouseup(function(){
        checkDrop();
    });
    $(".box:eq(9)").mouseup(function(){
        checkDrop();
    });
}
var expressDragObject = false;
var mainBig = $("#mainBig");
var dragObject;
function checkDrag(i) {
    tagName = i;
    dragObject = $(".box:eq(" + tagName + ")");
    mainBig.mousemove(moveshape);
    dragObject.mousemove(moveshape);
    if(!checkEffect){
        expressDragObject = true;
    }
}
function moveshape(e){
    e.preventDefault();
    if(checkPart[tagName-5] || !expressDragObject) return;
    var leftOfMainbig = mainBig.offset().left;
    var topOfMainbig = mainBig.offset().top;
    var limitLeft = leftOfMainbig +dragObject.outerWidth()/2;
    var limitRight = leftOfMainbig + mainBig.outerWidth() - dragObject.outerWidth()/2;
    var limitTop = topOfMainbig + 45 + dragObject.offset().top/2;
    var limitBottom = topOfMainbig + mainBig.outerHeight() - dragObject.outerHeight()/2;
    if(e.pageX >= limitLeft && e.pageX <= limitRight && e.pageY >= limitTop && e.pageY <= limitBottom){
       dragObject.css({"top" : ((e.pageY - topOfMainbig) - (dragObject.outerHeight() / 2)) + "px"});
       dragObject.css({"left" : ((e.pageX - leftOfMainbig) - (dragObject.outerWidth() / 2)) + "px"});
    }
    else{
        checkDrop();
    }
}
function checkDrop() {
    expressDragObject = false;
    var tagNameLeft = dragObject.offset().left + 52;
    var tagNameTop = dragObject.offset().top + dragObject.outerHeight();
    var locationLeft = $(".box:eq(" + (tagName - 5) + ")").offset().left;
    var locationTop = $(".box:eq(" + (tagName - 5) + ")").offset().top;
    if(tagNameTop >= locationTop - 5 && tagNameTop <= locationTop + 60){
        if(tagNameLeft >= locationLeft && tagNameLeft <= locationLeft + 120){
            checkPart[idPart] = true;
            scoreLesson[0] -= 1;
            turnOnAudio(audioCorrect);
            dragObject.css({"left" : (locationLeft - 55) + "px"});
            dragObject.css({"top" : (locationTop - dragObject.outerHeight() + 15) + "px"});
            if(scoreLesson[0] == 0){
                pointsReward += pointsRewardLesson[0];
                return;
            }
            setTimeout(randomPart,3000);
            return;
        }
    }
    pointsRewardLesson[0] -= 10;
    turnOnAudio(audioWrong);
    dragObject.css({"top" : "110px"});
    dragObject.css({"left" : (150 + (tagName-5)*100) + "px"});
}
var part = ['trunk', 'root', 'leaf', 'flower', 'fruit'];
var checkPart = [false, false, false, false, false];
var idPart;
var checkEffect = true;
var pointsReward = 1000;
var scoreLesson = [5];
var pointsRewardLesson = [100];
function randomPart() {
    idPart = Math.floor(Math.random() * 5);
    while(checkPart[idPart]){
        idPart = Math.floor(Math.random() * 5);
    }
    $(".box:eq(" + (idPart + 5) + ")").css({"background-color": "rgb(0, 255, 255)"});
    $(".box:eq(" + (idPart + 5) + ")").hover(function(){
        $(".box:eq(" + (idPart + 5) + ")").css({"background-color": "white"});
    },function(){
        $(".box:eq(" + (idPart + 5) + ")").css({"background-color": "rgb(0, 255, 255)"});
    });
    checkEffect = true;
    effectPart();
    setTimeout(function(){
        checkEffect = false;
    },5000);
}
function effectPart() {
    for(var i = 0; i < 10 ; i++){
        $(".box:eq(" + idPart + ")").toggle(500);
        $("." + part[idPart]).toggle(500);
    }
}