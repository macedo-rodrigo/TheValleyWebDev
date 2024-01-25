/* 
    Crea una función que recibiendo un resultado del tablero del 3 en raya, 
    indique si algún jugador ha ganado la partida. Asumimos que recibimos 
    un tablero válido

            - 0 - Hueco en blanco
            - 1 - Jugador 1
            - 2 - Jugador 2

    La función devolverá:
        - -1 si nadie ha ganado todavía y el tablero tiene huecos por rellenar
        - 1 si el jugador 1 ha ganado
        - 2 si el jugador 2 ha ganado
        - 0 nadie ha ganado

    Ejemplo:
        Entrada:    
        [  [ 0, 2, 1],
           [ 0, 1, 2],
           [ 2, 1, 0] ]

        Salida: -1
*/ 

let juego = [  
    [ 0, 2, 1],
    [ 0, 1, 2],
    [ 2, 1, 0] ]
  function validarLinea(valor1, valor2, valor3){
    if( valor1 === valor2 && valor2 === valor3 && valor1!=0)
    {
        return valor1;
    }
    return 0;
  }
  function validarJuego(juego){
    let ganador = 0;
      ganador = validarLinea( juego[0][0] , juego[0][1], juego[0][2]);
      if(ganador!=0) return ganador;
      ganador = validarLinea( juego[1][0] , juego[1][1], juego[1][2]);
      if(ganador!=0) return ganador;
      ganador = validarLinea( juego[2][0] , juego[2][1], juego[2][2]);
      if(ganador!=0) return ganador;
      ganador = validarLinea( juego[0][0], juego[1][0], juego[2][0]);
      if(ganador!=0) return ganador;
      ganador = validarLinea( juego[0][1], juego[1][1], juego[2][1]) ;
      if(ganador!=0) return ganador;
      ganador = validarLinea( juego[0][2], juego[1][2], juego[2][2]) ;
      if(ganador!=0) return ganador;
      ganador = validarLinea( juego[0][0], juego[1][1], juego[2][2]) ;
      if(ganador!=0) return ganador;
      ganador = validarLinea(  juego[0][2], juego[1][1], juego[2][0]);
      if(ganador!=0) return ganador;
  }
  validarJuego(juego);