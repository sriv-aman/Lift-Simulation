liftState = {
    floorNo: 1,
};

function changeFloor(operation, floorNo, liftState) {
    var lifts = document.getElementById('f1lift0');
    var currPos = parseInt(lifts.style.top);
    console.log(floorNo);
        if(operation == 1)
            lifts.style.top = currPos + (-200) +'px';
        else if(operation == 0)
            lifts.style.top = currPos + 200 + 'px';
}

function floorDiv(floorNo, objects){
    var startDiv = "\
    <div style='width: 100%;height: 100%;flex-direction: row;display: flex;align-items: center;'>"
    var EndDiv = "\
    </div>\
    "
 return startDiv  + objects + EndDiv;
}

function actionButtons(floorNo, totalFloors){
    var upButton = "\
    <div> \
        <button onClick='changeFloor(1, "+floorNo+", 2)' class='actionButton' style='background-color: rgb(4, 255, 0);height: 25px;border-radius: 5px;'>UP</button> \
    </div>"
    var downButton = "\
    <div> \
        <button onClick='changeFloor(0, "+floorNo+", 2)' class='actionButton' style='background-color: rgb(255, 170, 0);height: 25px;border-radius: 5px ' value='down'>DOWN</button> \
    </div> "

    if(floorNo == 1)
        return "<div id='buttons'>" + downButton + "</div>";
    else if(floorNo == totalFloors)
        return "<div id='buttons'>" + upButton + "</div>";
    else return "<div id='buttons'>" + upButton + downButton + "</div>";
}

function lifts(floorNo, noofLifts){
    var lift = ""
    for(let i = 0;i<noofLifts;i++){
        lift = lift + "\
        <div class='lift' id='f"+ floorNo +"lift" + i + "' style='margin-left: 5px; display: inline-flex; margin-right: 5px;position: relative;top:0'>"
        + (floorNo == 1 ? "<div id='door'></div><div id='door'></div>" : "") +
        "</div> \
        "
    }
        

    return "<div id='lifts'>" + lift + "</div>";
}

function test (val1, val2) {  
    let existingSession = 0;
    for(var i=val1;i>0;i--){
        var floor = document.createElement('div');
        floor.setAttribute('id', 'floor'+i);
        floor.setAttribute('class', 'floor');
        floor.innerHTML =  floorDiv(i, actionButtons(i, val2) + lifts(i, val2) );
        document.getElementById('floors').appendChild(floor);
    }     
}