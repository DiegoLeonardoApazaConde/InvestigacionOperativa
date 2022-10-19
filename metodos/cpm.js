
const CallData = () =>{
    const tamaño =Number(document.getElementById("num").value)
    for (let index = 0; index < tamaño; index++) {
        const elemento[index] = document.getElementById(`colum${index},f1`).value        
    }
    console.log(elemento);
   
}