// write your DOM code here.
const add = document.querySelector(".join_queue");
const remove = document.querySelector(".leave_queue");
const counter = document.querySelector(".count");


const section = document.querySelector(".taxi_queue_count");
const line = document.querySelector(".join_taxi_queue");

const leaving = document.querySelector(".depart");

let data = localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key")) : []
const taxiQueue = TaxiQueue();
let int = 0;
let inter = 0;

// DOM element references
add.addEventListener("click", function () {
    
    counter.innerHTML = taxiQueue.joinQueue()

});
remove.addEventListener("click", function () {

        counter.innerHTML = taxiQueue.leaveQueue()
    
});
line.addEventListener("click", function () {

     section.innerHTML = taxiQueue.joinTaxiQueue()

});
leaving.addEventListener("click", function () {
    taxiQueue.taxiDepart()
    counter.innerHTML = taxiQueue.queueLength()
    section.innerHTML = taxiQueue.taxiQueueLength()

    // if (int >= 12 && inter > 0){
    //     int -= 12;
    //     inter -= 1;
    // section.innerHTML = inter;
    // counter.innerHTML = int;
    // }
});





