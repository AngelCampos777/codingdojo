console.log("loading...")
var alert1 = document.querySelector(".alert");
function accept() {
    alert1.remove();
}
function cartCheck(element){
    alert("Your cart is empty...");
}
function change(element){
    document.querySelector("#swap").src = "test2img/assets/succulents-2.jpg";
}
function change2(element){
    document.querySelector("#swap").src = "test2img/assets/succulents-1.jpg";
}