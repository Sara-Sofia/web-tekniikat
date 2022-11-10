//1. Lisää sivun loppuun uusi hr-elementti.
//2. Lisää hr-elementin jälkeen h3-otsikkona oma nimesi.
let content=document.querySelector("#content");
let hr= document.createElement("hr");
let h3= document.createElement("h3");
h3.textContent="Sara-Sofia Kesäniemi"
content.appendChild(hr);
content.appendChild(h3);
//3. Lisää viikonpäivien perään myös sunnuntai ”su”
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent="Sunnuntai";
ul.appendChild(li);
//4. Poista ”turhake” lista-item
let turha = document.querySelector("ul li:first-child");
turha.remove();

//1. Lisää maanantai listalle. (insertbefore)
let ul2=document.querySelector("ul li:first-child");
let li2= document.createElement("li");
li2.textContent="Maanantai";
ul2.parentElement.insertBefore(li2, ul2);

//2. Lisää uusi lista item ”välipäivä” ennen sunnuntaita. (insertBefore)
let ul3=document.querySelector("ul li:last-child");
let li3=document.createElement("li");
li3.textContent="Välipäivä";
ul3.parentElement.insertBefore(li3, ul3);

//3. Muokkaa jokainen viikonpäivä näkymään listalla lihavoituna.
let items= document.querySelectorAll("div ul:first-child li");
for (const item of items) {
    let text= item.textContent;
    item.textContent="";

    let b= document.createElement("b");
    b.textContent=text;
    item.appendChild(b);
}

//1. Aseta koodissa “last” elementille uusi tyyli, jossa teksti on lihavoitu ja list itemillä on border
let last = document.querySelector(".last");
last.style.fontWeight = "bold";
let list = document.querySelector(".last");
list.style.border="solid";

//2. Lisää sivulle nappi. Nappia painamalla kaikille ensimmäisen listan itemeille togglataan eri
//tausta- ja tekstiväri.

function changeStyle(){
    let content = document.querySelectorAll("ul:first-child li");
    for (const elements of content) {
        elements.classList.toggle("colored");
    }
}
//3. Tee toinen nappi, jota painamalla kasvatetaan kaikkien lista itemien fonttia 1.2em niille
//teksteille, joiden pituus on ale 10 merkkiä.
function changeSize(){
    let listItems=document.querySelectorAll("li");

    for (const items of listItems) {
        if(items.textContent.length < 10){
            items.classList.add("sizeup");
        }
    }
}


//4. Lisää inline tyylillä jollekin elementille uusi tekstiväri, taustaväri, border ja uusi korkeus.
let element = document.querySelector("#content");
element.style.color="white";
element.style.backgroundColor="darkGrey";
element.style.border="solid";
element.style.borderColor="black";
element.style.height="600px";
