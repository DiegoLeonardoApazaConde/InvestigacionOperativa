const valor = () =>{
    var tamaño = Number(document.getElementById("num").value)
} 

const CallData = () =>{
    const tamaño = Number(document.getElementById("num").value)
    alert(tamaño)
    const elemento = []
    for (let index = 0; index < tamaño; index++) {
        elemento[index] = document.getElementById(`colum${index},f1`).value       
    }
   console.log(elemento);
}
