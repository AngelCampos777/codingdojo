//general
function greetings() {
    console.log("How's it goin'");
}
greetings();

//specific name
function greeting(name) {
    console.log("hi " + name);
}
greeting("llama")

//specific name time
function timeGreet(num, name) {
    if (name == "dork") {
        console.log("Not you. " + name)
    } else {
        console.log("hi " + name);
    }
    if (num < 11) {
        console.log("mornin' " + name);
    } else if (num >= 11 && num < 17) {
        console.log("afternoon " + name);
    } else if (num >= 17 && num <= 24) {
        console.log("evenin' " + name);
    }
}

timeGreet(10, "Angel")
timeGreet(13, "Llama")
timeGreet(23, "Xandra")
timeGreet(0, "dork")

//greeting but not a specific person
function greeting(name) {
    if (name == "dork") {
        console.log("Not you. " + name)
    } else {
        console.log("hi " + name);
    }
}
greeting("llama")
greeting("dork")





//debug add variable word in console log to run function and produce hello world and set to variable
function greeting() {
    return "Hello World";
}
var word = greeting();
console.log(word);
