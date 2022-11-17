var tamaño 
const valor = () =>{
     tamaño = Number(document.getElementById("num").value)                                                                                                                                          
    } 
    
const CallData = () =>{
    let valor ;
    let contenerdor = new Array();
    //LLamar valores de la tabla
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
    //Deposita valores de activiadades sin predecesor
    const tEarly = new Array();
    for (let index = 0; index < tamaño; index++) {
            //Actividades sin predecesor rrellenadas
            if(contenerdor[index][2] == undefined){
                tEarly[index] = Number(contenerdor[index][1])
            }
    }
    var timeret = 0;
    //Funcion que calcula el tiempo de actividad
    function tiempoget(letra) {
        if (letra != undefined) {
            for (let ded = 0; ded < tamaño; ded++) {
                if (letra == contenerdor[ded][0]) {
                    timeret = Number(contenerdor[ded][1]);
                }
            }
        }
        return timeret;
    }
    //Bucle para ruta critica(tiempos)
    for (let index = 0; index < tamaño; index++) {
        let Mayor = 0;
        if(contenerdor[index][2] != undefined){
        Mayor = tiempoget(contenerdor[index][2])
           for (let inp = 1 ; inp<tamaño ; inp++){
                    if(Mayor<= tiempoget(contenerdor[index][inp+2])){
                        Mayor = tiempoget(contenerdor[index][inp+2])
                    }
           }
        console.log(contenerdor[index][0]+"->"+Mayor);
        }
    }
}
