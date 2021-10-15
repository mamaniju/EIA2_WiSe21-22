namespace AufgabeL01 {

    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zauber", "zerstoert"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    //console.log(subjekte);
    //console.log(praedikate);
    //console.log(objekte);

    for (let i: number = subjekte.length; i >= 1; i--) {
        //console.log(i);
        let funktionArray: string = getVerse(subjekte, praedikate, objekte);
        console.log(funktionArray);
    }
    function getVerse(_subjekte: string[], _praedikate: string[], _objekte: string[]): string {
        let vers: string = ""; 
        let randomSubjekte: number = Math.floor (Math.random() * subjekte.length); 
        vers += subjekte.splice(randomSubjekte, 1) [0] + " "; 
        let randomPraedikate: number = Math.floor (Math.random() * praedikate.length); 
        vers += praedikate.splice(randomPraedikate, 1) [0] + " ";
        let randomObjekte: number = Math.floor (Math.random() * objekte.length); 
        vers += objekte.splice(randomObjekte, 1) [0] + " ";
        
        //console.log(_subjekte, _praedikate, _objekte);
        //console.log(getVerse);
        //console.log(randomSubjekte, randomPraedikate, randomObjekte);

        return (vers);

    }

}