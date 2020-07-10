let tamano = 8;

let contador = 1;

while (contador <= tamano) {
    let contadorLinea = 1;
    let linea = '';
    if (contador % 2 != 0) {
        while (contadorLinea <= 4) {
            linea += ' #';
            contadorLinea++;
        }
    } else {
        while (contadorLinea <= 4) {
            linea += '# ';
            contadorLinea++;
        }
    }
    console.log(linea);
contador++;
}
