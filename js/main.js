const listEl = document.getElementById("list");
console.log(listEl)

for (let i = 0; i < 100; i++) {


    const listItem = document.createElement("li");
    console.log(listItem)

    listItem.innerHTML = i + 1;
    listItem.classList.add("box");


    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {

        listItem.classList.add("box-fizz-buzz")

    } 
    else if ((i + 1) % 5 == 0) {

        listItem.classList.add("box-fizz")

    }
    else if ((i + 1) % 3 == 0) {

        listItem.classList.add("box-buzz")
        
    }
    

    listEl.append(listItem);
}