const desaparecer = () =>{
    const elemento = document.getElementById("empaque")
    elemento.style.display = "none"

}

const cpm = () =>{
    desaparecer()
    const comp = document.getElementById("CPM")
    comp.style.display = "block";
}