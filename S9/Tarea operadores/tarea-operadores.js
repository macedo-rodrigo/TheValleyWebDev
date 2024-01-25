// OPERADOR ||
console.log(false || {}); // {}. Sale {} porque el OR no se queda con el booleano "false" y pasa al siguiente.
console.log("string" || true); // String. Sale "string" porque el en este caso el OR no necesita mirar el segundo argumento.
console.log([] || 100); // []. [] es considerado true, luego el operador OR se queda con él y lo pinta.
console.log("" || true); // true. Una string vacia es falso cuando el operador es Or, luego pasa al 2º argumento.
console.log(undefined || false); // false. Siendo undefined un valor falso, el operador pasa al segudo argumento y, aunque este tbn sea falso, lo pinta.

// Operador &&
console.log(false && {}); // false. Con el operadoe &&, cuando el primer argumento es falso se retorna el valor del segundo.
console.log("string" && true); // true. Si las dos son verdaderas, && va a por el 2º argumento.
console.log([] && 100); // 100. Si las dos son verdaderas, && va a por el 2º argumento.
console.log(null && "Prueba"); // null. Si el primer valor el false, && se queda con él sin seguir al segundo argumento.
console.log("" && true); // "". Si el primer valor el false, && se queda con él sin seguir al segundo argumento.
console.log(undefined && false); // undefined. Si el primer valor el false, && se queda con él sin seguir al segundo argumento.

// Operador ??
console.log(false ?? {}); // false. El operador ?? se queda con el primer argumento si el mismo es true, y como solo considera como "false" undefined y null, aquì lo que sale en console es el false.
console.log("string" ?? true); // String. Mismo argumento de arriba.
console.log([] ?? 100); // []. Funciona como el || para los true, siempre se queda con el primer que encuentra.
console.log(null ?? "Prueba"); // Prueba. Null es considerado false, luego ?? pasa al 2º argumento.
console.log("" ?? true); // "" pq el primer argmento, "", es true, no hace falta pasar al segundo.
console.log(undefined ?? false); // false. Aqui, undefied es falso y "false" es verdadero.