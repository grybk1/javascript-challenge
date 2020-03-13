// from data.js
var tableData = data;
//let tbody = d3.select("tbody");
let tbody = d3.select("#ufo-tbody")
var button = d3.select("#filter-btn")
var inputField = d3.select("#datetime")


function handleClick(){
    console.log("Hi Button Clicked");
    console.log(d3.event.target);
    var inputValue = inputField.property("value");
    console.log(inputValue);
//    console.log(tableData)

    var filteredData = data.filter(sightings => sightings.datetime===inputValue);
   console.log(filteredData);

   document.getElementById("ufo-tbody").innerHTML = "";

    filteredData.forEach(function(sighting){
        //    console.log(sighting);
            
            let row = tbody.append("tr");
            Object.entries(sighting).forEach(
                (key, value)=>{
        //            console.log(key,value);
                    let cell= row.append("td").text(key[1]);
                });
               
        });
//     console.log(tableData[i])

   // console.log(filteredData);

};

button.on("click",handleClick);

// var filteredData = data.filter(sightings => sightings.datetime==="1/1/2010");
//    console.log(filteredData); 
//console.log(data[0].datetime)





// inputField.on("change", function(){
//     var newText = d3.event.target.value;
//     console.log(newText);

// })





// for (var i = 0; i < tableData.length; i++) {
//     console.log(tableData[i]);
    
//   }

// tableData.forEach(function(sighting){
//     console.log(sighting);

// });



// tableData.forEach(function(sighting){
//     console.log(sighting);
//     let row = tbody.append("tr");
//     Object.entries(sighting).forEach(
//         (key, value)=>console.log(key,value));
// });
// ;

// tableData.forEach(function(sighting){
//     console.log(sighting);
//     let row = tbody.append("tr");
//     Object.entries(sighting).forEach(
//         (key, value)=>{
//             console.log(key,value);
//             let cell= row.append("td");
//         });
       
// });
// ;

tableData.forEach(function(sighting){
//    console.log(sighting);
    let row = tbody.append("tr");
    Object.entries(sighting).forEach(
        (key, value)=>{
//            console.log(key,value);
            let cell= row.append("td").text(key[1]);
        });
       
});
;




// YOUR CODE HERE!
