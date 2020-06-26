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
function drawLine(x, y, x1, y1) {
    lineContext.moveTo(x,y);
    lineContext.lineTo(x1,y1);
    lineContext.stroke();
}
function addQuestion(i){
    inputQuestion = JSON.parse(JSON.stringify(question[i-1]));
    if(language == "vi") {
        $("#letter").text(inputQuestion.text[0]);
        $("#audioQuestion").attr("src",inputQuestion.audio[0]);
    }
    else{
        $("#letter").text(inputQuestion.text[1]);
        $("#audioQuestion").attr("src",inputQuestion.audio[1]);
    }
    $("#letter").show();
}