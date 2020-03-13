
var tableData = data;
let tbody = d3.select("#ufo-tbody");
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

function handleClick(){
    console.log("Hi Button Clicked");
    console.log(d3.event.target);
    var inputValue = inputField.property("value");
    console.log(inputValue);
    var filteredData = data.filter(sightings => sightings.datetime===inputValue);
    document.getElementById("ufo-tbody").innerHTML = "";

    filteredData.forEach(function(sighting){
        let row = tbody.append("tr");
        Object.entries(sighting).forEach(
            (key, value)=>{
            let cell= row.append("td").text(key[1]);
             });
        });
};

button.on("click",handleClick);

tableData.forEach(function(sighting){
    let row = tbody.append("tr");
    Object.entries(sighting).forEach(
        (key, value)=>{
            let cell= row.append("td").text(key[1]);
        });
});

