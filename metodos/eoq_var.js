const desapp= () =>{
    const todo = document.getElementById("panelmaestro")
    todo.style.display="none"

}
const ocultarpan = () =>{
    desapp()
    const panel = document.getElementById("EOQVAR")
    panel.style.display="block"
}
const eoq_var = () =>{
    const cocomp= Number(document.getElementById("cocom").value)
    const pvliq = Number(document.getElementById("venli").value)
    const pvreg = Number(document.getElementById("venre").value)
    const lsup = Number(document.getElementById("limsup").value)
    const linf = Number(document.getElementById("liminf").value)
    let co,cu,cantidad=0,frac=0;
    const rrespues = document.getElementById("cantta");
    co=cocomp-pvliq
    cu=pvreg-cocomp
    frac=cu/(cu+co)
    cantidad=((lsup-linf)*frac)+linf

    rrespues.append(cantidad)
    document.getElementById("ejemets").style.display="none"
    document.getElementById("respuestaseoq_var").style.display="block"
}