var tamaño 
const valor = () =>{
     tamaño = Number(document.getElementById("num").value)                                                                                                                                          
    } 
    
const CallData = () =>{
    let valor ;
    let contenerdor = new Array();
    //LLamar valores de la tabla del HTML
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
    var nodosruta = []
    for(let nm=0;nm<tamaño;nm++){
            nodosruta[nm]=contenerdor[nm][1]
    }
    console.log(nodosruta);
    var d = 0, prede = [], miprede = [], vectorutil = [],tiempodenodo=0
    //Funcion para llamar el tiempo del vector de "nodos"
    function tiempoFin(letra) {
        tiempodenodo=0
            for (let ded = 0; ded < tamaño; ded++) {
                if (letra == contenerdor[ded][0]) {
                    tiempodenodo = Number(nodosruta[ded]);
                }
            }
        return tiempodenodo;
    }
    //Funcion para buscar de quien soy predecesor
    function dequien(letre){
        miprede.length = 0;
        d = 0
            for(let qx = 0;qx<tamaño;qx++){
                for(let ox = 0;ox<tamaño;ox++){
                        if(letre == contenerdor[qx][ox+2]){
                            miprede[d] = contenerdor[qx][0]
                            d++
                        }
                }
            }
        return miprede;
    }
    //Funcion para buscar predecesores
    function mprede(letro){
        prede.length = 0;
                for(let dx = 0;dx<tamaño;dx++){
                        if(letro == contenerdor[dx][0]){
                            for(let mx = 0;mx<tamaño;mx++){
                                prede[mx] = contenerdor[dx][mx+2]
                            }
                        }
                }
        prede = prede.filter(letri => letri!==undefined);
        return prede;
    }
    //Bucle para ruta critica(tiempos)
    for (let index = 0; index < tamaño; index++) {
        if(contenerdor[index][2]!=undefined){
                vectorutil = mprede(contenerdor[index][0])
                if(vectorutil.length>1){
                    var numermay = tiempoFin(vectorutil[0])
                    for(m = 0;m<vectorutil.length;m++){ 
                        if(tiempoFin(vectorutil[m])>numermay){
                                numermay = tiempoFin(vectorutil[m])
                        }
                    }
                    nodosruta[index] = numermay+Number(contenerdor[index][1])
                    console.log(nodosruta);
                }else{
                    nodosruta[index] = tiempoFin(vectorutil[0])+Number(contenerdor[index][1])
                    console.log(nodosruta);
                }
        }else{
            nodosruta[index] = Number(contenerdor[index][1])
            console.log(nodosruta);
        }
    } 
}

