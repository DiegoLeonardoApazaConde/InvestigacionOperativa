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

//Generamos la matriz 
const genMatriz = () => {
    const botgen = document.getElementById("botgen")
    const num =Number(document.getElementById("num").value)+1 
    const depTabla = document.getElementById("tabla")
    for (let n = 0; n < num; n++) {
        const col = document.createElement("tr")
        col.id = (`fila${n}`)
        depTabla.appendChild(col)
    }

    for (let d = 0; d < num; d++) {
        const cole = document.getElementById(`fila${d}`)
        for (let k = 0; k< num+1; k++) {
            const fil = document.createElement("td")
            const but = document.createElement("input")
            but.type = "text"
            but.id=(`colum${k},f${d}`)
            if (d==0) {
                if(k==0){
                    const texto = document.createTextNode(`Actividad`)
                    const pletra = document.createElement("p")
                    pletra.append(texto)
                    fil.appendChild(pletra)
                }else if(k==1){
                    const texto = document.createTextNode(`Tiempos`)
                    const pletra = document.createElement("p")
                    pletra.append(texto)
                    fil.appendChild(pletra)
                }else{
                    const texto = document.createTextNode(`Predecesor ${k-2}`)
                    const pletra = document.createElement("p")
                    pletra.append(texto)
                    fil.appendChild(pletra)
                }
            }else{
                fil.appendChild(but)
            }
            cole.appendChild(fil)
            }
        }
    const go = document.getElementById("leer")
    go.style.display = "block"
    botgen.style.display  = "none"
}

