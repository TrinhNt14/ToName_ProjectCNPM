function GotoLesson() {
    setTimeout(function(){
        $(".textReward").text(pointsRewardLesson[Lesson-1]);
        $(".textPointsReward").text(pointsReward);
        if(language=="vi"){
            $(".level").text("CẤP ĐỘ " + Lesson);
        }
        else{
            $(".level").text("LEVEL " + Lesson);
        }
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
    $("#menuCompleted").hide(500);
    pointsReward += pointsRewardLesson[Lesson-1];
    $(".textPointsReward").text(pointsReward);
    $("#partLesson" + Lesson).remove();
    $("#tagLocationLesson" + Lesson).remove();
    $("#tagNameLesson" + Lesson).remove();
    $("#letter").hide();
    lineContext.clearRect(0, 0, $("#line")[0].width, $("#line")[0].height);
    Lesson += 1;
    if(Lesson > lessonNumber){
        GotoCongratulation();
        return;
    }
    GotoLesson();
}function GotoLesson() {
    setTimeout(function(){
        $(".textReward").text(pointsRewardLesson[Lesson-1]);
        $(".textPointsReward").text(pointsReward);
        if(language=="vi"){
            $(".level").text("CẤP ĐỘ " + Lesson);
        }
        else{
            $(".level").text("LEVEL " + Lesson);
        }
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
    $("#menuCompleted").hide(500);
    pointsReward += pointsRewardLesson[Lesson-1];
    $(".textPointsReward").text(pointsReward);
    $("#partLesson" + Lesson).remove();
    $("#tagLocationLesson" + Lesson).remove();
    $("#tagNameLesson" + Lesson).remove();
    $("#letter").hide();
    lineContext.clearRect(0, 0, $("#line")[0].width, $("#line")[0].height);
    Lesson += 1;
    if(Lesson > lessonNumber){
        GotoCongratulation();
        return;
    }
    GotoLesson();
}
$("#next").click(nextLesson);
$(".restart").click(function(){
    $("#menuCompleted").hide(500);
    $("#partLesson" + Lesson).remove();
    $("#tagLocationLesson" + Lesson).remove();
    $("#tagNameLesson" + Lesson).remove();
    $("#letter").hide();
    lineContext.clearRect(0, 0, $("#line")[0].width, $("#line")[0].height);
    pointsRewardLesson[Lesson-1] = 100*Lesson;
    GotoLesson();
});
$("#gotoLesson").click(function(){
    window.location = "../Html/ToName.html";
});
function GotoCompleted(){
    $(".smallStar:eq(0)").hide();
    $(".smallStar:eq(1)").hide();
    $(".bigStar").hide();
    $(".tool:eq(0)").hide(500);
    if(language=="vi"){
        $(".textCompleted:eq(0)").text("CẤP ĐỘ " + Lesson);
        $(".textCompleted:eq(0)").css({"margin-left": "70px"});
    }
    else{
        $(".textCompleted:eq(0)").text("LEVEL " + Lesson);
        $(".textCompleted:eq(0)").css({"margin-left": "80px"});
    }
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
function GotoCongratulation(){
    if(sound == "on"){
        turnOffAudio(audioTheme);
        turnOnAudio(audioCongratulation);
    }
    $(".textScore").text(pointsReward);
    $("#congratulation").show(1000);
}