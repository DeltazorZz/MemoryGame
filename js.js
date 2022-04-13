window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem)
}
function Class(elem){
return document.getElementsByClassName(elem)
}
function $(elem){
    return document.querySelector(elem);
}
function ß(elem){
    return document.querySelectorAll(elem);
}

const kepek = ["kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg","kepek/kep4.jpg","kepek/kep5.jpg","kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg","kepek/kep4.jpg","kepek/kep5.jpg"];

const hatter = "kepek/hatter.jpg"
function init(){
kepek.forEach(feltolt)
}
function feltolt(){
$('article').innerHTML += "<div><img src="+hatter+"></div>"
}
const kepekElem = ß("article div img");

kepekElem.forEach(function(elem){
    elem.addEventListener("click",megfordit);
});

const kivalasztottTomb = [];
function megfordit(){
    const hatter = "kepek/hatter.jpg"
    console.log(event.target.id);
    letaktualisElem = event.target.id;
    event.target.src=kepekElem[aktualisElem];

    kivalasztottTomb.push(aktualisElem);
        console.log(kivalasztottTomb);

    if (!feltetel){
        setTimeout(function(){
            kivalasztottTomb.forEach(function(elem){
                document.getElementById(elem.src=hatter);
                })
                kivalasztottTomb.splice(0);
            }.1000);

        }else{
            kivalasztottTomb.forEach(function(elem){
                documebt.getElementById(elem).style.display="none";
            })
        }
    }
