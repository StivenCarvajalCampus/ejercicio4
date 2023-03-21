function mostrarmenu(){
    let opcion = 1;

    do {
        opcion = parent(prompt(`------menu------
        1.  lectura de datos
        2.  crear objeto
        3.  mostrar objeto
        4.  crear array
        5.  mostar array
        6.  eliminar el primer elemento del array
        7.  eliminar el ultimo elemento del array
        8.  eliminar cualquier elemento del array
        9.  agregar elemento al comienzo del array
        10. agregar elemento al fianl del array 
        11. crear array con objetos
        12. iterar array con objetos con FOR
        13. iterar array con objetos con forEach
        14. iterar array con objetos con map y crear copia
        15. proceso personal
        0.  salir`));

        switch(opcion){
            case 1:
                function leerdatos(){
                    nombre = prompt("digite su nombre");
                    nombre = prompt("digite su edad");
                    console.log(`su nombre es: ${nombre} y su edad es: ${edad}`);
                }
                leerdatos();
                    break;
                    case 2:
                    function crearobjeto(){
                        let persona ={
                            nombre :"zulay",
                            edad : 22,
                            profecion : "tecnologa"
                        };
                        console.log(personas)
                    }
                    crearobjeto();
                    break;
                    case 3:
                    function  mostrarobjeto(){
                        let persona ={
                            nombre:  "zulay",
                            edad : 22,
                            profecion : "tecnologa"
                        };
                         for (let propiedad in personas){
                            console.log(`${propiedad}: ${persona[propidad]}`);
                         }
                    }
                    mostrarobjeto()
                    break;
                    case 4:
                        function  mostrarobjeto(){
                            let numero = [1,2,3,4,5];
                            console.log(numeros);
                        } 
                    creararray()
                    break;
                    case 5:
                        function mostararray(){
                            let numeros = [1,2,3,4,5];
                            for (let z =0; z<numeros.length; z++){
                                console.log(numeros[z]);
                            }
                        }
                    mostrararray()
                    break;
                    case 6:
                    function elminarprimerelemento(){
                        let numero = [1,2,3,4,5];
                        numero.shift();
                        console.log(numeros);

                    }
                    elminarprimerelemento()
                    break;
                    case 7:
                        function elminarprimerelemento(){
                            let numero = [1,2,3,4,5];
                            numero.pop();
                            console.log(numeros);
                        }
                        eliminarultimoelemento()
                        break;
                        case 8:
                            function eliminarultimoelemento(){
                                let numero = [1,2,3,4,5];
                                let indice = parent(prompt("digite el indice del elemento a eliminar:"));
                                numeros.splice(indice,1);
                            }
                        eliminarprimerelemento()
                        break;
                        case 9:
                            function agragaralcomienzo(){
                                let numero = [1,2,3,4,5];
                                let elemnto = parent(prompt("digite el elemento a gregar al comienzo del array:"));
                                numeros.unshift(elemento);
                                console.log(numeros);
                            }
                        agregaralcomienzo()
                        break;
                        case 10:
                            function agragaralfinal(){
                                let numero = [1,2,3,4,5];
                                let elemnto = parent(prompt("digite el elemento a gregar al final del array:"));
                                numeros.unshift(elemento);
                                console.log(numeros);
                                }
                        agregaralcomienzo()
                        break;
                        case 11:
                            function creararrayobjeto(){
                                let persona = [
                                    {nombre: "zulay", edad: 22, profecion:"tecnologa"},
                                    {nombre: "leidy", edad: 20, profecion:"chef"},
                                    {nombre: "miguel", edad: 25, profecion:"ingeniero"}
                                ];
                                console.log(personas);
                            }
                        creararrayobjeto()
                        break;
                        case 12:
                            function itearrayfor(){
                                let personas = [
                                    {nombre: "zulay", edad: 22, profecion:"tecnologa"},
                                    {nombre: "leidy", edad: 20, profecion:"chef"},
                                    {nombre: "miguel", edad: 25, profecion:"ingeniero"}
                                ];
                                for(let z= 0; z< personas.length; z++){
                                    conso.log(`${personas[z].nombre} -${personas[z].edad} profecion-${personas[z].profecion}`);
                                }
                            }
                        itearrayfor();
                        break;
                        case 13:
                            function iteararrayforeach(){
                                let personas = [
                                    {nombre: "zulay", edad: 22, profecion:"tecnologa"},
                                    {nombre: "leidy", edad: 20, profecion:"chef"},
                                    {nombre: "miguel", edad: 25, profecion:"ingeniero"}
                                ];
                                personas.forEach(function(persona) {
                                    console.log(`${personas[z].nombre} -${personas[z].edad} profecion-${personas[z].profecion}`);
                                });
                            }
                            iteararrayforeach();
                            break;
                            case 14:
                                function iteararraymap(){
                                    let personas = [
                                        {nombre: "zulay", edad: 22, profecion:"tecnologa"},
                                        {nombre: "leidy", edad: 20, profecion:"chef"},
                                        {nombre: "miguel", edad: 25, profecion:"ingeniero"}
                                    ];
                                   let personascopia = personas.map(function(persona) {
                                    return { persona}; });

                                }
                            iteararraymap();
                                break;
                                case 15:
                                    function procesopersonal(){
                                        let numero = [1,2,3,4,5];
                                        let suma = 0;
                                        for(let z=0; z<numeros.length; z++){
                                            suma += numero [z];
                                        }
                                        let promedio = suma / numero.length;
                                        console.log(`el promedio de los numeros es: ${promedio}`);
                                    }
                                    procesopersonal()
                                    break;
                                    case 0:
                                        alert("salir del menu:");
                                    default:
                                        alert("su elecion no es correcta:");
                                        break;
                                }
    }while(opcion !=0);
}
mostrarmenu();