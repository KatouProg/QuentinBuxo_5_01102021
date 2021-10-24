function main(){
    const idNumber = document.getElementById("orderId");
    idNumber.innerText = localStorage.getItem("orderId");
    console.log(localStorage.getItem("orderId"))
    localStorage.clear();
}

main();