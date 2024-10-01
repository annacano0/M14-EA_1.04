/******EXERCICI 1******/
const estudiant={
    nom: 'Joan',
    edat: 20,
    notes: {
        matematiques: 8,
        programacio: 9,
        fisica: 7
    }
}
// Desestructura l'objecte aquí
// Imprimeix: "Joan té 20 anys i ha tret un 8 en matemàtiques."

function activitat1(){
    let nom=estudiant.nom;
    let edat=estudiant.edat;
    let notesMates=estudiant.notes.matematiques
    printResult(nom+" te "+edat+" anys i ha tret un "+notesMates+" en matematiques")
}

/******EXERCICI 2******/

const coordenades = [12, 5, 8];

// Desestructura l'array aquí
// Imprimeix les coordenades: "Les coordenades són x=12, y=5, z=8."

function activitat2(){
    let x= coordenades[0];
    let y=coordenades[1];
    let z=coordenades[2];
    printResult(`Les coordenades són x=${x}, y=${y}, z=${z}`)
}



/******EXERCICI 3******/

const preus = [100, 200, 300, 400];

// Aplica el mètode map per incrementar els preus en un 10%
// Imprimeix el nou array de preus

function activitat3(){
    let nousPreus=preus.map((preu)=>preu+(preu*0.10))
    printResult(nousPreus)
}



/******EXERCICI 4******/

const edats = [16, 21, 18, 24, 12, 30];

// Utilitza el mètode filter per obtenir les edats majors de 18
// Imprimeix el nou array

function activitat4(){
    let majorsEdat=edats.filter((edat)=>edat>18)
    printResult(majorsEdat)
}

/******EXERCICI 5******/

const notes = [7, 9, 5, 10, 8];


// Utilitza reduce per calcular la mitjana
// Imprimeix el resultat

function activitat5(){
    const suma = notes.reduce((acumulador, nota) => acumulador + nota, 0);
    const mitjana = suma / notes.length;
    printResult(mitjana);
}



/******EXERCICI 6******/

// Escriu la funció per crear l'objecte producte
// Exemple de sortida: { nom: "Portàtil", preu: 950, quantitat: 3 }

function activitat6(nomProducte, preuProducte, quantitatProducte){
    let preuFinal=preuProducte
    let producte={nom:nomProducte,preu:preuFinal,quantitat:quantitatProducte}
    printResult(JSON.stringify(producte))
}

/******EXERCICI 7******/

const cotxe = {
    marca: 'Tesla',
    model: 'Model S',
    preu: 80000
};
// Afegeix la propietat 'any' aquí
// Imprimeix l'objecte actualitzat


function activitat7(){
    cotxe.any=2023;
    printResult(JSON.stringify(cotxe))
}


/******FUNCIONS DOM******/

function printResult(result){
    let resultContainer=document.getElementById("result-container")
    resultContainer.innerText=result
    console.log("result printed")
}