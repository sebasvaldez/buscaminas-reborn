let columnas = 7;
let filas = 3;

const table = document.getElementById("table");



let tr2 = document.getElementById("tr2");


let tr1 = document.getElementById("tr1");


const generarTablero = () => {

    
    
    for (let f = 0; f < filas; f++) {
        let tr = document.createElement("tr")
        table.appendChild(tr)
        
        let td = document.createElement("td")
        

        td.innerHTML = "Z"
    
        for (let c = 1; c < columnas; c++) {
            
            let td= document.createElement("td")
            
            tr.appendChild(td)
            td.innerHTML = "Z"
            
        }
        tr.appendChild(td)
    }
    

};






generarTablero();

