$(".start").click(function(){
    $("#menuStart").hide(500);
    $("#bodyMain").show(500);
    GotoLesson();
});
$(".turnSound").click(function(){
    if(sound == "off") {
        turnOnSound();
    }
    else {
        turnOffSound();
    }
});
function turnOnSound() {
    sound = "on";
    if(music=="on"){
        turnOnAudio(audioTheme);
    }
    if(language == "vi") {
        $(".textSound:eq(1)").text('BẬT');
    }
    else {
        $(".textSound:eq(1)").text('ON');
    }
    $(".textSound:eq(1)").css({"margin-left": "62px"});
    $(".turnSound").css({"background-image": "url(../Image/onSound.png)"});
    $(".buttonMusic").css({"background-image": "url(../Image/btn_onSound.png)"});
    $(".buttonSound").css({"background-image": "url(../Image/speaker.png)"});
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
    $(".buttonMusic").css({"background-image": "url(../Image/btn_offSound.png)"});
    $(".buttonSound").css({"background-image": "url(../Image/mute.png)"});
}
function turnOnAudio(audio) {
    $("audio")[audio].play();   
    $("audio")[audio].currentTime = 0;
}
function turnOffAudio(audio){
    $("audio")[audio].pause();
}
$(".buttonMusic").click(function(){
    if(music == "off"){
        $(".buttonMusic").css({"background-image": "url(../Image/btn_onSound.png)"});
        music = "on";
    }
    else {
        turnOffAudio(audioTheme);
        $(".buttonMusic").css({"background-image": "url(../Image/btn_offSound.png)"});
        music = "off";
    }
    if(sound == "on" && music == "on"){
        turnOnAudio(audioTheme);
    }
});
$(".buttonSound").click(function(){
    if(sound == "off"){
        $(".buttonSound").css({"background-image": "url(../Image/speaker.png)"});
        if(music=="on"){
            turnOnAudio(audioTheme);
        }
        sound = "on";
    }
    else {
        turnOffAudio(audioCompleted);
        turnOffAudio(audioCongratulation);
        turnOffAudio(audioCorrect);
        turnOffAudio(audioWrong);
        turnOffAudio(audioTheme);
        $(".buttonSound").css({"background-image": "url(../Image/mute.png)"});
        sound = "off";
    }
});
$(".creation").click(function(){
    if(scoreLesson>0){
        effectPart();
        pointsReward -= 100;
        $(".textPointsReward").text(pointsReward);
    }
});
$("#question").click(function(){
    if(sound=="on"){
        turnOnAudio(audioQuestion);
    }
});
$("#chooseLanguage").click(function(){
    $("#languageDialog").slideToggle();
});
$(".Language:eq(0)").click(function(){
    language = "en";
    $("#letter").text(inputQuestion.text[1]);
    $("#audioQuestion").attr("src",inputQuestion.audio[1]);
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
    $(".textLessonCompleted").text("COMPLETED");
    $(".textGotoLesson").text("GO TO LESSON");
    languageTagName();
});
$(".Language:eq(1)").click(function(){
    language = "vi";
    $("#letter").text(inputQuestion.text[0]);
    $("#audioQuestion").attr("src",inputQuestion.audio[0]);
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
    $(".textLessonCompleted").text("HOÀN THÀNH");
    $(".textGotoLesson").text("ĐI ĐẾN BÀI HỌC");
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