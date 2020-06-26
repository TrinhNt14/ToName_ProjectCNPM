$(".start").click(function(){
    $("#menuStart").hide(500);
    $("#bodyMain").show(500);
    GotoLesson();
});
$("#next").click(nextLesson);
$(".restart").click(function(){
    $("#menuCompleted").hide(500);
    $("#partLesson" + Lesson).remove();
    $("#tagLocationLesson" + Lesson).remove();
    $("#tagNameLesson" + Lesson).remove();
    $("#letter").hide();
    lineContext.clearRect(0, 0, $("#line")[0].width, $("#line")[0].height);
    GotoLesson();
});
$("#chooseLanguage").click(function(){
    $("#languageDialog").slideToggle();
});
$(".Language:eq(0)").click(function(){
    language = "en";
    $("#letter").text(inputQuestion.text[1]);
    $("#letter").css({"font-size" : "20px"});
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
    $("#languageDialog").hide();
    $(".textCompleted:eq(1)").text("COMPLETED");
    $(".textCompleted:eq(1)").css({"margin-left": "50px"});
    $(".textNext").text("NEXT");
    $(".textNext").css({"font-size": "35px", "margin-top": "12px"});
    $(".textCompleted:eq(0)").text("LEVEL " + Lesson);
    $(".textCompleted:eq(0)").css({"margin-left": "80px"});
    $(".level").text("LEVEL " + Lesson);
    languageTagName();
});
$(".Language:eq(1)").click(function(){
    language = "vi";
    $("#letter").text(inputQuestion.text[0]);
    $("#letter").css({"font-size" : "25px"});
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
    $("#languageDialog").hide();
    $(".textCompleted:eq(1)").text("HOÀN THÀNH");
    $(".textCompleted:eq(1)").css({"margin-left": "40px"});
    $(".textNext").text("TIẾP THEO");
    $(".textNext").css({"font-size": "22px", "margin-top": "20px"});
    $(".textCompleted:eq(0)").text("CẤP ĐỘ " + Lesson);
    $(".textCompleted:eq(0)").css({"margin-left": "70px"});
    $(".level").text("CẤP ĐỘ " + Lesson);
    languageTagName();
});
function languageTagName() {
    var textTagName = 1;
    if(language == "vi"){
        textTagName = 0;
    }
    else{
        textTagName = 1;
    }
    for(var i = 0; i < partNumber; i++){
        $(".textBox:eq(" + i + ")").text(inputTagName[i].text[textTagName]);
        if(textTagName == 1){
            $(".box:eq(" + (i + partNumber) + ")").css({
                "width": "80px",
                "height": "30px",
            });
            $(".box:eq(" + i + ")").css({
                "width": "80px",
                "height": "30px",
            });
            $(".textBox:eq(" + i + ")").css({"font-size" : "15px"});
        }
        else{
            $(".box:eq(" + i + ")").css({
                "width": "60px",
                "height": "30px",
            });
            $(".box:eq(" + (i + partNumber) + ")").css({
                "width": "60px",
                "height": "30px",
            });
            $(".textBox:eq(" + i + ")").css({"font-size" : "20px"});
        }
    }
}
$(".turnSound").click(function(){
    if(sound == "off") {
        turnOnSound();
    }
    else {
        turnOffSound();
    }
});
$(".buttonSound").click(function(){
    if(sound == "off") {
        turnOnAudio(audioTheme);
        $(".buttonSound").css({"background-image": "url(../Image/btn_onSound.png)"});
        sound = "on";
    }
    else {
        turnOffAudio(audioTheme);
        turnOffAudio(audioCorrect);
        turnOffAudio(audioWrong);
        turnOffAudio(audioCompleted);
        $(".buttonSound").css({"background-image": "url(../Image/btn_offSound.png)"});
        sound = "off";
    }
});
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
    $(".buttonSound").css({"background-image": "url(../Image/btn_onSound.png)"});
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
    $(".buttonSound").css({"background-image": "url(../Image/btn_offSound.png)"});
}
function turnOnAudio(audio) {
    $("audio")[audio].play();   
    $("audio")[audio].currentTime = 0;
}
function turnOffAudio(audio){
    $("audio")[audio].pause();
}
function GotoLesson() {
    setTimeout(function(){
        pointsRewardLesson[Lesson] = 100;
        $(".textReward").text(pointsRewardLesson[Lesson]);
        $(".textPointsReward").text(pointsReward);
        $(".tool:eq(0)").show();
        $(".tool:eq(1)").show();
        addPartLesson(Lesson);
        addTagLocation(Lesson);
        addTagName(Lesson);
        addQuestion(Lesson);
        addLine(Lesson);
    },1000);
    setTimeout(randomPart,2000);
}
function nextLesson(){
    turnOffAudio(audioCompleted);
    pointsReward += pointsRewardLesson[Lesson-1];
    $(".textPointsReward").text(pointsReward);
    Lesson += 1;
    if(Lesson > lessonNumber){
        GotoCongratulate();
        return;
    }
    $("#partLesson" + Lesson).remove();
    $("#tagLocationLesson" + Lesson).remove();
    $("#tagNameLesson" + Lesson).remove();
    lineContext.clearRect(0, 0, $("#line")[0].width, $("#line")[0].height);
    GotoLesson();
}
function GotoCompleted(){
    $(".smallStar:eq(0)").hide();
    $(".smallStar:eq(1)").hide();
    $(".bigStar").hide();
    $(".tool:eq(0)").hide(500);
    $("#menuCompleted").show(500);
    if(sound == "on"){
        turnOnAudio(audioCompleted);
    }
    $(".textPointsRewardlesson").text(pointsRewardLesson[Lesson-1]);
    if(pointsRewardLesson[Lesson-1] > 0){
        $(".smallStar:eq(0)").show(1000);
    }
    if(pointsRewardLesson[Lesson-1] >= (Lesson*100/2)){
        $(".smallStar:eq(1)").show(2000);
    }
    if(pointsRewardLesson[Lesson-1] == (Lesson*100)){
        $(".bigStar").show(3000);
    }
}
function GotoCongratulate(){
    alert($(".textPointsReward").text());
}
function drawLine(x, y, x1, y1) {
    lineContext.moveTo(x,y);
    lineContext.lineTo(x1,y1);
    lineContext.stroke();
}
function checkDrag(i) {
    tagName = i;
    if(checkPart[tagName-5]) return;
    dragObject = $(".box:eq(" + tagName + ")");
    mainBig.mousemove(moveshape);
    dragObject.mousemove(moveshape);
    if(checkEffect[tagName-5]){
        expressDragObject = true;
    }
}
function moveshape(e){
    e.preventDefault();
    if(!expressDragObject) return;
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
    var locationLeft = $(".box:eq(" + (tagName - partNumber) + ")").offset().left;
    var locationTop = $(".box:eq(" + (tagName - partNumber) + ")").offset().top;
    if(tagNameTop >= locationTop - 5 && tagNameTop <= locationTop + 60){
        if(tagNameLeft >= locationLeft && tagNameLeft <= locationLeft + 120){
            checkPart[idPart] = true;
            checkEffect[idPart] = false;
            scoreLesson -= 1;
            if(sound == "on"){
                turnOnAudio(audioCorrect);
            }
            $(".box:eq(" + (tagName - partNumber) + ")").hide();
            dragObject.css({"left" : (locationLeft - 283) + "px"});
            dragObject.css({"top" : (locationTop - dragObject.outerHeight() + 15) + "px"});
            dragObject.animate({left: (locationLeft - 280) + "px",top:(locationTop - dragObject.outerHeight() + 10) + "px"},300);
            dragObject.animate({left: (locationLeft - 283) + "px",top:(locationTop - dragObject.outerHeight() + 10) + "px"},300);
            dragObject.animate({left: (locationLeft - 280) + "px",top:(locationTop - dragObject.outerHeight() + 15) + "px"},300);
            dragObject.animate({left: (locationLeft - 280) + "px",top:(locationTop - dragObject.outerHeight() + 10) + "px"},300);
            dragObject.animate({left: (locationLeft - 283) + "px",top:(locationTop - dragObject.outerHeight() + 15) + "px"},300);
            if(scoreLesson == 0){
                setTimeout(GotoCompleted,3000);
                return;
            }
            setTimeout(randomPart,3000);
            return;
        }
    }
    if(pointsRewardLesson[Lesson-1] > (10*Lesson)){
        pointsRewardLesson[Lesson-1] -= (10*Lesson);
    }
    else{
        pointsRewardLesson[Lesson-1] = 0;
    }
    $(".textReward").text(pointsRewardLesson[Lesson-1]);
    if(sound == "on"){
        turnOnAudio(audioWrong);
    }
    for(var i = 0; i < partNumber; i++){
        if(i == tagName - 5) continue;
        var locationWrongTop = $(".box:eq(" + i + ")").offset().top;
        var locationWrongLeft = $(".box:eq(" + i + ")").offset().left;
        if(tagNameTop >= locationWrongTop - 5 && tagNameTop <= locationWrongTop + 60){
            if(tagNameLeft >= locationWrongLeft && tagNameLeft <= locationWrongLeft + 120){
                $(".box:eq(" + i + ")").css({"background-color": "red"});
                setTimeout(function(){
                    $(".box:eq(" + i + ")").css({"background-color": "white"});
                },1000);
                break;
            }
        }
    }
    dragObject.css({"top" : "110px"});
    dragObject.css({"left" : (150 + (tagName-partNumber)*100) + "px"});
}
function randomPart() {
    idPart = Math.floor(Math.random() * partNumber);
    while(checkPart[idPart]){
        idPart = Math.floor(Math.random() * partNumber);
    }
    $(".box:eq(" + (idPart + partNumber) + ")").css({"background-color": "rgb(0, 255, 255)"});
    $(".box:eq(" + (idPart + partNumber) + ")").hover(function(){
        $(".box:eq(" + (idPart + partNumber) + ")").css({"background-color": "white"});
    },function(){
        $(".box:eq(" + (idPart + partNumber) + ")").css({"background-color": "rgb(0, 255, 255)"});
    });
    effectPart();

}
function effectPart() {
    for(var i = 0; i < loopEffectNumber ; i++){
        $(".box:eq(" + idPart + ")").toggle(500);
        $("." + part[idPart]).toggle(500);
    }
    setTimeout(function(){
        if(language == "vi"){
            $(".box:eq(" + idPart + ")").animate({
                width: "60px",
                height: "30px",
            },100);
        }
        else{
            $(".box:eq(" + idPart + ")").animate({
                width: "80px",
                height: "30px",
            },100);
        }
        checkEffect[idPart] = true;
    },5000);
}
function addPartLesson(i){
    inputPartLesson =  JSON.parse(JSON.stringify(lesson[i-1]));
    part.splice(0,partNumber);
    checkPart.splice(0,partNumber);
    checkEffect.splice(0,partNumber);
    partNumber = inputPartLesson.length;
    scoreLesson = partNumber;
    var idpartLesson = "partLesson" + i;
    var partLesson = document.createElement("div");
    partLesson.setAttribute("id", idpartLesson);
    $("#bodyMain").prepend(partLesson);
    for(var id = 0; id < partNumber; id++){
        var Class = document.createElement("div");
        Class.setAttribute("class",inputPartLesson[id].class);
        $("#" + idpartLesson).append(Class);
        $("." + inputPartLesson[id].class).css({
            "width": "270px",
            "height": "410px",
            "background-image": ("url(" + inputPartLesson[id].image + ")"),
            "left": "265px",
            "top": "160px",
            "position": "absolute",
            "cursor": "pointer"
        });
        part.push(inputPartLesson[id].class);
        checkPart.push(false);
        checkEffect.push(false);
    }
}
function addTagLocation(i){
    inputTagLocation = JSON.parse(JSON.stringify(tagLocation[i-1]));
    var idTagLocation = "tagLocationLesson" + i;
    var tagLocationLesson = document.createElement("div");
    tagLocationLesson.setAttribute("id", idTagLocation);
    $("#letter").after(tagLocationLesson);
    for(var id = 0; id < partNumber; id++){
        var Class = document.createElement("div");
        Class.setAttribute("class","box");
        $("#" + idTagLocation).append(Class);
        $(".box:eq(" + id + ")").css({
            "left": inputTagLocation[id].left,
            "top": inputTagLocation[id].top,
        });
    }
}
function addTagName(i){
    inputTagName = JSON.parse(JSON.stringify(tag_Name[i-1]));
    var idTagName = "tagNameLesson" + i;
    var tagNameLesson = document.createElement("div");
    tagNameLesson.setAttribute("id", idTagName);
    $("#bodyMain").append(tagNameLesson);
    for(var id = 0; id < partNumber; id++){
        var Class = document.createElement("div");
        Class.setAttribute("class","box");
        Class.setAttribute("onmousedown",("checkDrag("+ (id + partNumber) + ")"));
        Class.setAttribute("onmouseup","checkDrop()");
        $("#" + idTagName).append(Class);
        $(".box:eq(" + (id +partNumber) + ")").css({"left": inputTagName[id].left});
        var textClass = document.createElement("div");
        textClass.setAttribute("class","textBox");
        $(".box:eq(" + (id +partNumber) + ")").append(textClass);
        $(".textBox:eq(" + id + ")").text(inputTagName[id].text[0]);
        $(".textBox:eq(" + id + ")").css({"margin-left": inputTagName[id].marginLeft});
    }
    languageTagName();
}
function addLine(i){
    $("#line").width = "800px";
    $("#line").height = "555px";
    inputLine = JSON.parse(JSON.stringify(line[i-1]));
    lineContext.lineWidth = 3;
    lineContext.beginPath();
    lineContext.strokeStyle = "yellow";
    lineContext.lineCap = "round";
    for(var id = 0; id < partNumber; id++){
        drawLine(inputLine[id].x, inputLine[id].y, inputLine[id].x1, inputLine[id].y1);
    }
}
function addQuestion(i){
    inputQuestion = JSON.parse(JSON.stringify(question[i-1]));
    if(language == "vi") {
        $("#letter").text(inputQuestion.text[0]);
    }
    else{
        $("#letter").text(inputQuestion.text[1]);
    }
    $("#letter").show();
}