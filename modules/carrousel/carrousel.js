/* jshint esversion: 6 */
const carrousel = (function carrousel() {
    "use strict";

    var pos = 0;
    var arr = ["images/batman.jpeg", "images/batman2.jpg", "images/ironman.jpg", "images/ironman2.jpg", "images/ironman3.jpg", ];

    function init() {
        var Carrousel = function Carrousel(param) {
            console.log(param);

        }
        var carrousel = new Carrousel({
            id: document.getElementById("carrousel"),
            parentHTML: document.getElementById("carrousel"),
            images: arr,

        });
        const carrou = document.getElementById("carrousel")
        if(carrou)
        carrou.innerHTML = "<img src='" + arr[0] + "'>";
        const gauche = document.getElementById("button");
        const droite = document.getElementById("button2");
        if(gauche)
        gauche.onclick = function gaucho() {
            console.log("Gautcho !!!!");
            pos--;
            if (pos < 0) {
                pos = arr.length - 1;
            }
            carrou.innerHTML = "<img src='" + arr[pos] + "'>";
        };
        if(droite)
        droite.onclick = function droito() {
            console.log("Droitoooo !!!!");
            pos++;
            if (pos >= arr.length) {
                pos = 0;

            }
            carrou.innerHTML = "<img src='" + arr[pos] + "'>";

        };


    }
    return {
        init
    };

}());
