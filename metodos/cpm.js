var tamaño 
const valor = () =>{
     tamaño = Number(document.getElementById("num").value)                                                                                                                                          
    } 
    
const CallData = () =>{
    let valor ;
    let contenerdor = new Array();
    for (let df = 1; df < tamaño+1; df++) {
        let matrizval = new Array();
        for (let dc =0;dc < tamaño+2; dc++) {
            valor =  document.getElementById(`colum${dc},f${df}`).value;
            if(valor != ""){
                    matrizval[dc] =valor 
             }
        }
        const result = matrizval.filter(word => word.length!=0);
        contenerdor[df-1] = result; 
    }
    //ACTIVIDADES Y TIEMPO
    for (let index = 0; index < tamaño; index++) {
            //Actividades
            contenerdor[index][0]
            for (let n = 0; n < tamaño-1; n++) {
                
                 
            }
    }
}
