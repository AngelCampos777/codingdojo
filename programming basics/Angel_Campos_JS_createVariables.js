//what are we looking for? height and age; then in order to ride the must be at or above a certian limit
//check if thresholds are met/exceeded and allow or deny access
//var height >= 42;
//signal true
//var age >= 10;
//signal true

//if age and height both read true then allow access

var height = 42
var age = 10
if (height > 52){
    console.log("Get on that ride, kiddo!");
}
else{
    console.log("Sorry kiddo. Maybe next year");
}

//stretch1
if (height > 52 && age >= 10){
    console.log("Get on that ride, kiddo!");
}
else{
    console.log("Sorry kiddo. Maybe next year");
}

//stretch2
if (height > 52 || age >= 10){
    console.log("Get on that ride, kiddo!");
}
else{
    console.log("Sorry kiddo. Maybe next year");
}