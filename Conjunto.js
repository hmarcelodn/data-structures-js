
// Estructura Dinamica De Conjunto
var Conjunto = function(){
    
    var Nodo = function(){
        this.info;
        this.siguiente;
    }    

    var c;

    this.inicializarConjunto = function(){
        c = null;
    },
    this.agregar = function(x){
        if(!this.pertenece(x)){
            var nodo = new Nodo();
            nodo.info = x;
            nodo.siguiente = c;
            c = nodo;
        }
    },
    this.sacar = function(x){
        if(c != null){
            if(c.info == x){
                c = c.siguiente;
            }
            else{
                var aux = c;
                
                while((aux.siguiente !== null) && aux.siguiente.info !== x){
                    aux = aux.siguiente;
                }

                if(aux.siguiente != null){                    
                    aux.siguiente = aux.siguiente.siguiente;
                }                
            }
        }
    },
    this.pertenece = function(x){
        var aux = c;

        while((aux != null) && (aux.info != x)){
            aux = aux.siguiente;
        }

        return (aux !== null);
    },
    this.elegir = function(){
        return c.info;
    },
    this.conjuntoVacio = function(){
        return (c === null);
    }
}

//Ejecucion

var conjunto = new Conjunto();
conjunto.inicializarConjunto();
conjunto.agregar(5);
conjunto.agregar(10);
console.log("Conjunto Vacio:" + conjunto.conjuntoVacio());
console.log("Elegir: " + conjunto.elegir());
conjunto.sacar(5);
conjunto.sacar(10);
console.log("Conjunto Vacio: " + conjunto.conjuntoVacio());
