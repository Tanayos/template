/* jshint esversion: 6 */
const musee = (function musee() {
    "use strict";
    var listmusee, listElem;

    function createList() {
        listmusee.forEach(function(musee) {
            console.log(musee); // chaque objet musée
             const li = document.createElement("li");
             li.className = "clickable item musee";
             li.innerHTML = `
                 <h3 class="title">${musee.fields.nom_du_musee}</h3>
                 <p>
                   ${musee.fields.adr},  ${musee.fields.cp}
                </p>
             `;
             li.onclick = function() {
                 console.log("click");
             };
            listElem.appendChild(li);
        });
    }

    function init() {
        const btn = document.getElementById("musee");
        listElem = document.getElementById("list_musee_paris");
        if (btn)
        btn.onclick = function handleClick() {
            ajax.getData("https://opendata.paris.fr/api/records/1.0/search/?dataset=liste-musees-de-france-a-paris&rows=1000&facet=cp", function (data) {
                  console.log(data); //le résultat de la requête AJAX
                listmusee = data.records; // la liste des musee
                createList();
            });
        };
    }

    return {
        init
    };

}());
