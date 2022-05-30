// write your DOM code here.
const add = document.querySelector(".join_queue");
const remove = document.querySelector(".leave_queue");
const counter = document.querySelector(".count");


const section = document.querySelector(".taxi_queue_count");
const line = document.querySelector(".join_taxi_queue");

const leaving = document.querySelector(".depart");

let int = 0;
let inter = 0;

// DOM element references
add.addEventListener("click", function () {

    int += 1;
    counter.innerHTML = int;

});
remove.addEventListener("click", function () {
    if (int >0){
    int -= 1;
    counter.innerHTML = int;
    }
});
line.addEventListener("click", function () {

    inter += 1;
    section.innerHTML = inter;

});
leaving.addEventListener("click", function () {
    if (int >= 12 && inter > 0){
    int -= 12;
    inter -= 1
    section.innerHTML = inter;
    counter.innerHTML = int;
    }



});




decrement.addEventListener("click", function () {


});
// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events

