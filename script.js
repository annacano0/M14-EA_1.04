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

/******FUNCIONS DOM******/

function printResult(result){
    let resultContainer=document.getElementById("result-container")
    resultContainer.innerText=result
    console.log("result printed")
}