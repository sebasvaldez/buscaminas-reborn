const table = document.getElementById("table");

const filas = document.getElementById("inputFila");

const columnas = document.getElementById("inputCol");

const gTablero = document.getElementById("gTablero");

gTablero.addEventListener("click", () => {
  generarTablero();
});

const generarTablero = () => {
  for (let f = 0; f < filas.value; f++) {
    let tierra= document.createElement("img")
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let td = document.createElement("td");


    //  td.innerHTML="2"
    td.appendChild(tierra).src="./imagenes/tierra.jpg"
    
    

    for (let c = 0; c < columnas.value-1; c++) {
      let tierra= document.createElement("img")
      let td = document.createElement("td");

      tr.appendChild(td);
      
      td.appendChild(tierra).src="./imagenes/tierra.jpg"
      
    }
    
  }
};


const vaciarTablero= ()=>{
    let tablero = []
    for (let filas = 0; filas < filas; filas++) {

        tablero.push([])
        
    }

}

const arrTablero = []


for (let i = 0; i < columnas*filas; i++) {


  
  arrTablero.push()
}
