const desaparecer = () =>{
    const todo = document.getElementById("panelmaestro")
   todo.style.display="none"

}

const cpm = () =>{
    desaparecer()
    const comp = document.getElementById("CPM")
    comp.style.display = "block";
}

const informacion = () =>{
   desaparecer()
   const lista = document.getElementById("info")
   lista.style.display="block"
   const cuerpo = document.getElementById("cuerpo")
   cuerpo.style.backgroundImage="url(./src/)"
   }

const suma = () => {
    const sum1 =Number(document.getElementById("dato1").value) 
    const sum2 =Number(document.getElementById("dato2").value)
    const suma = sum1 + sum2
    alert(suma)
}