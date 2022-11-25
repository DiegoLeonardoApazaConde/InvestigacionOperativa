const desappp= () =>{
    const todo = document.getElementById("panelmaestro")
    todo.style.display="none"

}
const ocultar=() =>{
    desappp()
    document.getElementById("CRITERIO_S").style.display="block"
}
const crear=()=>{

    let tamaño = Number(document.getElementById("critnum").value)
    let criteri = Number(document.getElementById("crite").value)
    let divmaster = document.getElementById("contablas")
    
    const tituc = document.createElement("h1")
        tituc.append(`CRITERIOS`)
        divmaster.appendChild(tituc)
        const tablaalterc = document.createElement("table")
    for(let inci1c = 0;inci1c<criteri;inci1c++){
        const trfilc = document.createElement("tr")
        for(let inci2c = 0 ;inci2c<criteri;inci2c++){
            const tdcolc = document.createElement("td")
            const incolc = document.createElement("input")
            incolc.id=`fila(${inci1c}),columna(${inci2c},criterio)`
            tdcolc.appendChild(incolc)
            trfilc.appendChild(tdcolc)
        }
        tablaalterc.appendChild(trfilc)    
        tablaalterc.className="tablalter"
        tablaalterc.id = `criterio`
        divmaster.appendChild(tablaalterc)
    }
    for(let inci =0;inci<tamaño;inci++){
        const titu = document.createElement("h1")
        titu.append(`ALTERNATIVA ${inci+1}`)
        divmaster.appendChild(titu)
        const tablaalter = document.createElement("table")
        for(let inci1 = 0;inci1<tamaño;inci1++){
            const trfil = document.createElement("tr")
            for(let inci2 = 0 ;inci2<tamaño;inci2++){
                const tdcol = document.createElement("td")
                const incol = document.createElement("input")
                incol.id=`fila(${inci1}),columna(${inci2}),tabla(${inci+1})`
                tdcol.appendChild(incol)
                trfil.appendChild(tdcol)
            }
            tablaalter.appendChild(trfil)    
            tablaalter.className="tablalter"
            tablaalter.id = `alternativa${inci+1}`
            divmaster.appendChild(tablaalter)
        } }
        const botoper = document
    document.getElementById("generarm").style.display="none"

}
