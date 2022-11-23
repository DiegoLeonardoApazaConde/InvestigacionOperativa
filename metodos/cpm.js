var tamaño 
var cual
const valor = () =>{
     tamaño = Number(document.getElementById("num").value)                                                                                                                                     
    } 
const cuals = (met) =>{
        cual = met
}
const CallData = () =>{
    let valor ;
    let tamcol=tamaño;
    if(cual=="PERT"){tamcol+=2}
    let contenerdor = new Array();
    //LLamar valores de la tabla del HTML
    for (let df = 1; df < tamaño+1; df++) {
        let matrizval = new Array();
        let promtim=0;
        for (let dc =0;dc < tamcol+2; dc++) {
            valor =  document.getElementById(`colum${dc},f${df}`).value;
            if(valor != ""){
                    if(cual=="PERT"){
                        if(dc==1){
                            promtim=promtim+Number(valor)
                        }else if(dc==2){
                            promtim=promtim+((Number(valor))*4)
                        }else if(dc==3){
                            promtim=(promtim+Number(valor))/6
                            matrizval[dc]=String(promtim)
                        }else{
                            matrizval[dc]=valor
                        }

                    }else{
                        matrizval[dc] =valor 
                    }
             }
        }
        console.log(matrizval);
        const result = matrizval.filter(word => word.length!=0);
        contenerdor[df-1] = result; 
    }
    var nodosruta = []
    for(let nm=0;nm<tamaño;nm++){
            nodosruta[nm]=contenerdor[nm][1]
    }
    var d = 0, prede = [], miprede = [], vectorutil = [],nodostarde=[],nodoshol=[],aster=[],tiempodenodo=0,tiempodeorigen=0
    //Funcion para llamar el tiempo del vector temprano
    function tiempoFin(letra) {
        tiempodenodo=0
            for (let ded = 0; ded < tamaño; ded++) {
                if (letra == contenerdor[ded][0]) {
                    tiempodenodo = Number(nodosruta[ded]);
                }
            }
        return tiempodenodo;
    }
    //Funcion para llamar el tiempo del vector de "origen"
    function tiemporeg(letru) {
        tiempodeorigen=0
            for (let dud = 0; dud < tamaño; dud++) {
                if (letru == contenerdor[dud][0]) {
                    tiempodeorigen = contenerdor[dud][1];
                }
            }
        return tiempodeorigen;
    }
    //Funcion para llamar el tiempo del vector de "termlejana"
    function tiempoterle(letri) {
    tiempodenodo=0
    for (let ded = 0; ded < tamaño; ded++) {
        if (letri == contenerdor[ded][0]) {
            tiempodenodo = Number(nodostarde[ded]);
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
                }else{
                    nodosruta[index] = tiempoFin(vectorutil[0])+Number(contenerdor[index][1])
                }
        }else{
            nodosruta[index] = Number(contenerdor[index][1])
        }
    } 
    numermay = Math.max(...nodosruta) 
    nodostarde = [...nodosruta]
    vectorutil.length=0
    //Bucle para asignar tiempo tardio
    for (let indey = tamaño-1; indey>-1; indey--) {
        if(dequien(contenerdor[indey][0]).length!=0){
            vectorutil = dequien(contenerdor[indey][0])
            var numeromen = vectorutil[0]
            for(ok=0;ok<vectorutil.length;ok++){
                if(tiempoterle(numeromen)>tiempoterle(vectorutil[ok])){
                    numeromen = vectorutil[ok]
                }
            }
            nodostarde[indey]=tiempoterle(numeromen)-tiemporeg(contenerdor[indey][0])
        }else{
            nodostarde[indey]=numermay-Number(contenerdor[indey][1])

        }
    }
    //Bucle para las holguras
    for(let hh=0;hh<tamaño;hh++){
        nodoshol[hh]=(nodostarde[hh]+Number(contenerdor[hh][1]))-nodosruta[hh]
        if(nodoshol[hh]==0){
            aster[hh]="*"
        }
        else{
            aster[hh]="no"
        }
    }
    const tablafinres=document.getElementById("tablares")
    const colaster = document.createElement("th")
    const coltiempos = document.createElement("th")
    const colruta = document.createElement("th")
    const coltarde = document.createElement("th")
    const colhol = document.createElement("th")
    const filnom = document.createElement("tr")
    colaster.append("Camino");filnom.appendChild(colaster)
    coltiempos.append("Actividades");filnom.appendChild(coltiempos)
    colruta.append("Ruta critica");filnom.appendChild(colruta)
    coltarde.append("Valor de regreso");filnom.appendChild(coltarde)
    colhol.append("Holguras");filnom.appendChild(colhol)
    tablafinres.appendChild(filnom)
    for(let finej=0;finej<tamaño;finej++){
        const filanew = document.createElement("tr")
        const colastert = document.createElement("td");colastert.append(aster[finej]);filanew.appendChild(colastert)
        const coltiempost = document.createElement("td");coltiempost.append(contenerdor[finej][0]);filanew.appendChild(coltiempost)
        const colrutat = document.createElement("td");colrutat.append(nodosruta[finej]);filanew.appendChild(colrutat)
        const coltardet = document.createElement("td");coltardet.append(nodostarde[finej]);filanew.appendChild(coltardet)
        const colholt = document.createElement("td");colholt.append(nodoshol[finej]);filanew.appendChild(colholt)
        tablafinres.appendChild(filanew)
    }
    tablafinres.style.display="block"
    alert("EL TIEMPO DE RECORRIDO ES : "+ numermay)
    const botej = document.getElementById("leer1");botej.style.display="none" 
}
