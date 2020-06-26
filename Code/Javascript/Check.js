function checkDrag(i) {
    tagName = i;
    if(checkPart[tagName-partNumber]) return;
    dragObject = $(".box:eq(" + tagName + ")");
    mainBig.mousemove(moveshape);
    dragObject.mousemove(moveshape);
    if(checkEffect[tagName-partNumber]){
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