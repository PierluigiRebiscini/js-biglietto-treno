// chidere all'utente il numero dei chilometri
const numeroKm = parseInt(prompt("Inserisci il numero dei chilometri"));




//chiedere all'utente l'eta
const etaPasseggero = parseInt(prompt("inserisci l'Eta"));


// impostare prezzo del biglietto in base ai kilometri(*0.21)
const prezzoBiglietto = (numeroKm * 0.21);

//sconto del 20%
const sconto20 = ( prezzoBiglietto * 20 / 100);
const scontoBigliettoMinorenni = ( prezzoBiglietto - sconto20); 

//sconto del 40%
const sconto40 = (prezzoBiglietto * 40 / 100);
const scontoBigliettiOver65 = (prezzoBiglietto - sconto40);




//se l'eta è minore di 18 applica il 20% di sconto
if( etaPasseggero < 18){
    console.log(`il prezzo del biglietto(sconto del 20%) è: ${scontoBigliettoMinorenni.toFixed(2)}€`);
    //se l'eta è maggiore di 65 applica il 40% di sconto
} else if ( etaPasseggero > 65) {
    console.log(`Il prezzo del biglietto(sconto del 40%) è: ${scontoBigliettiOver65.toFixed(2)}€` );
}
// altrimenti non applicare sconto
else{
    //impostare il valore in output con numeri decimali
    console.log(`Il prezzo del biglietto totale è: ${prezzoBiglietto.toFixed(2)}€`);

}







