var meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

document.write("los meses del año en orden son:");
document.write("<br>");
// llamar el vector 

for(let i=0;i<meses.length;i++){

    document.write(`el mes en la posicion ${i+1} es ====> ${meses[i]}`);
    document.write("<br>");
}
document.write("<br>");
//llamar una solo posicion del vector 
document.write(meses[3]);

document.write("<br>");


// Calcular la longitud del array 
var n_elementos = meses.length;
document.write("<br>");
document.write(` El numero de elementos que compone el array es ${n_elementos}`);

