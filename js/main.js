// ciclo crea 100 numeri e mettili nella lista e aggiungi le classi per modificarne l'aspetto in base al numero presente

// seleziona la lista 
const listEl = document.getElementById("list");
console.log(listEl)

// ciclo ad incremento per la creazione dei numeri 
for (let i = 0; i < 100; i++) {

    // crea elemento li 
    const listItem = document.createElement("li");
    console.log(listItem)
    // incremento grafico per partire da 1 anzichè 0
    listItem.innerHTML = i + 1;
    // aggiunta classe box 
    listItem.classList.add("box");

    // se il numero è divisibile per 3 e 5 colora di rosso e scrivi fizzbuzz 
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {

        listItem.classList.add("box-fizz-buzz");
        listItem.innerHTML = ("fizzbuzz");

    } 
    // se il numero è divisibile per 5 colora di giallo e scrivi buzz 
    else if ((i + 1) % 5 == 0) {

        listItem.classList.add("box-buzz");
        listItem.innerHTML = ("buzz");

    }
    // se il numero è divisibile per 3 colora di verdeacqua e scrivi fizz
    else if ((i + 1) % 3 == 0) {

        listItem.classList.add("box-fizz");
        listItem.innerHTML = ("fizz");
    }
    

    listEl.append(listItem);
}