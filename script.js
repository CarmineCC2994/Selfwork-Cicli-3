let num = 0;

switch (num) {
    case (num = 1):
    console.log("è stata selezionata l'acqua");
    break;
    
    case (num = 2):
    console.log('è stata selezionata coca cola');
    break;
    
    case (num = 3):
    console.log('è stata selezionata birra');
    break;
    
    default: 
    console.log("Scegli la bevanda");
    break;
}


let scelta;

do {
    scelta = prompt(
        "Scegli una bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra"
    );

    switch (scelta) {
        case "1":
        case "acqua":
            console.log("È stata selezionata l'acqua");
            break;

        case "2":
        case "coca cola":
            console.log("È stata selezionata Coca Cola");
            break;

        case "3":
        case "birra":
            console.log("È stata selezionata la birra");
            break;

        default:
            alert("Scelta non valida! Riprova.");
    }

} while (
    scelta !== "1" &&
    scelta !== "2" &&
    scelta !== "3" &&
    scelta.toLowerCase() !== "acqua" &&
    scelta.toLowerCase() !== "coca cola" &&
    scelta.toLowerCase() !== "birra"
);
