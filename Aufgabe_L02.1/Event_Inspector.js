"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad); //install load listener on window
    function handleLoad(_event) {
        document.addEventListener("mousemove", SetInfoBox); //install mouse move listener on document. 
        //install click and keyup-listeners on document
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        let body = document.querySelector("body"); //install click and keyup-listeners on document BODY
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        let div0 = document.querySelector("#div0"); //install click and keyup-listeners on document DIV
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        let div1 = document.querySelector("#div1"); //install click and keyup-listeners on document DIV
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        console.log(handleLoad);
    }
    function SetInfoBox(_event) {
        //console.log(_event);
        let x = _event.clientX; //display mouse position
        let y = _event.clientY; //display mouse position 
        let span = document.querySelector("#span"); //span-elemente
        //event's target in span-element
        //Set style top and left of span to mouseposition + offset 
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.innerHTML = "x: " + x + "<br>" + "y: " + y;
    }
    function logInfo(_event) {
        //event's: type, target, currentTarget // an the whole event object?
        console.log("Type: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("Current Target: " + _event.currentTarget);
        console.log(_event); //whole event? 
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=Event_Inspector.js.map