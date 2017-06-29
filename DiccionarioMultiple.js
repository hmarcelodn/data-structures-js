
var DiccionarioMultiple = function(){
    
    var NodoClave = function(){
        this.clave;
        this.valores;
        this.nodoClaveSiguiente;
    };

    var NodoValor = function(){
        this.valor;
        this.siguienteValor;
    };

    var origen;

    this.inicializarDiccionario = function(){
        nodoClave = null;
    },
    this.claves = function(){

    },
    this.agregar = function(c, v){
        var claveNodo = this.clave2NodoClave(c);
        if(claveNodo == null){
            var nuevaClave = new NodoClave();
            nuevaClave.clave = c;
            nuevaClave.valores = new NodoValor();
            nuevaClave.valores.valor = v;
            nuevaClave.nodoClaveSiguiente = origen;
            origen = nuevaClave;
        }
        else{
            var aux = claveNodo.valores;

            while((aux != null) && (aux.valor != v)){
                aux = aux.siguienteValor;
            }

            if(aux == null){
                var nuevoValor = new NodoValor();
                nuevoValor.valor = v;
                nuevoValor.siguienteValor = claveNodo.valores;
                claveNodo.valores = nuevoValor;
            }
        }
    },
    this.eliminarClave = function(c){
        if(origen != null){
            if(origen.clave == c){
                origen = origen.nodoClaveSiguiente;
            }
            else{
                var aux = origen;

                while((aux.nodoClaveSiguiente != null) && aux.nodoClaveSiguiente.clave != c ){
                    aux = aux.nodoClaveSiguiente;
                }

                if(aux != null){
                    aux.nodoClaveSiguiente = aux.nodoClaveSiguiente.nodoClaveSiguiente;
                }
            }
        }
    },
    this.eliminar = function(c, v){
        if(origen != null){
            if(origen.clave == c){
                this.eliminarNodoValor(origen, v);
            }
            else{
                var aux = origen;

                while((aux.nodoClaveSiguiente) && (aux.nodoClaveSiguiente.clave == c)){
                    aux = aux.nodoClaveSiguiente;                    
                }

                if(aux.nodoClaveSiguiente != null){
                    this.eliminarNodoValor(aux.nodoClaveSiguiente, v);

                    if(aux.nodoClaveSiguiente.valores == null){
                        aux.nodoClaveSiguiente = aux.nodoClaveSiguiente.nodoClaveSiguiente;
                    }
                }
            }
        }
    },
    this.recuperar = function(c){

    },
    this.clave2NodoClave = function(c){
        var aux = origen;
        while((aux != null) && (aux.clave != c)){
            aux = aux.nodoClaveSiguiente;
        }

        return aux;
    },
    this.eliminarNodoValor = function(nc, v){
        if(nc.valores != null){
            var aux = nc.valores;

            if(nc.valores.valor == v){
                nc.valores = nc.valores.siguienteValor;
            }
            else{
                while((aux.siguienteValor != null) && aux.siguienteValor.valor === v){
                    aux = aux.nodoClaveSiguiente;
                }

                if(aux){
                    aux.siguienteValor = aux.siguienteValor.siguienteValor;
                }
            }
        }
    }
}
