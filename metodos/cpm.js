var tamaño 
const valor = () =>{
     tamaño = Number(document.getElementById("num").value)                                                                                                                                          
    } 

const CallData = () =>{
    var punt = 0
    const elemento1=[]
    for (let di = 0; di < tamaño; di++) {
        let idse = `colum${di},f1`
        let valor =  document.getElementById(idse).value;
        if(valor != ""){
            elemento1[punt][1]=valor;
             
            punt++
        }

    }
   console.log(elemento1)    
}
