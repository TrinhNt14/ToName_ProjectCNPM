var language = "vi";
var sound = "off";
$(".start").click(function(){
    $("#menuStart").css({"display" : "none"});
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