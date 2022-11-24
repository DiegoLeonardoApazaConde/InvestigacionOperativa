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
    let cantidad=0;
    cantidad=Math.pow((2*dem*costo/mant),0.5)
    const resq = document.getElementById("canop");
    const resreor = document.getElementById("reor");
    const numor = document.getElementById("nuor");
    const timecicle = document.getElementById("ticiclo");
    const costor = document.getElementById("cosaor");
    const costmant = document.getElementById("cosaman");
    const costtotal = document.getElementById("costotal");
    resq.append(cantidad)
    timecicle.append(año/(dem/cantidad))
    costor.append((dem/cantidad)*(costo))
    costmant.append((cantidad/2)*(mant))
    costtotal.append(((cantidad/2)*(mant))+((dem/cantidad)*(costo)))
    if(demo!=""){
    resreor.append(((dem*demo)/año)*demo)
    numor.append(demo/cantidad)
    }
    document.getElementById("ejecut").style.display="none"
    document.getElementById("respuestaseoq").style.display="block"
}