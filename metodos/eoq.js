const desap = () =>{
    const todo = document.getElementById("panelmaestro")
    todo.style.display="none"

}
const mospanel = () =>{
    desap()
    const panel = document.getElementById("EOQ")
    panel.style.display="block"
}
const eoq = () =>{
    const dem = Number(document.getElementById("deman").value)
    const costo = Number(document.getElementById("costo").value)
    const mant = Number(document.getElementById("mant").value)
    const demo = Number(document.getElementById("demora").value)
    const año = Number(document.getElementById("diasaño").value)
    alert(año)
}