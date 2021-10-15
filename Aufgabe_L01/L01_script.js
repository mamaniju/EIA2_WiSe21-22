"use strict";
var AufgabeL01;
(function (AufgabeL01) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate = ["braut", "liebt", "studiert", "hasst", "zauber", "zerstoert"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte);
    //console.log(praedikate);
    //console.log(objekte);
    for (let i = subjekte.length; i >= 1; i--) {
        //console.log(i);
        let funktionArray = getVerse(subjekte, praedikate, objekte);
        console.log(funktionArray);
    }
    function getVerse(_subjekte, _praedikate, _objekte) {
        let vers = "";
        let randomSubjekte = Math.floor(Math.random() * subjekte.length);
        vers += subjekte.splice(randomSubjekte, 1)[0] + " ";
        let randomPraedikate = Math.floor(Math.random() * praedikate.length);
        vers += praedikate.splice(randomPraedikate, 1)[0] + " ";
        let randomObjekte = Math.floor(Math.random() * objekte.length);
        vers += objekte.splice(randomObjekte, 1)[0] + " ";
        //console.log(_subjekte, _praedikate, _objekte);
        //console.log(getVerse);
        //console.log(randomSubjekte, randomPraedikate, randomObjekte);
        return (vers);
    }
})(AufgabeL01 || (AufgabeL01 = {}));
//# sourceMappingURL=L01_script.js.map