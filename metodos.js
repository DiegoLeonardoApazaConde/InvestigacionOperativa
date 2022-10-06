const desaparecer = () =>{
    const elemento = document.getElementById("empaque")
    elemento.style.display = "none"

}

const cpm = () =>{
    desaparecer()
    const comp = document.getElementById("CPM")
    comp.style.display = "block";
}

const informacion = () =>{
   const todo = document.getElementById("panelmaestro")
   todo.style.display="none"
   const lista = document.getElementById("info")
   lista.style.display="block"
}