
// Estructura Dinamica de Arbol Binario de Busqueda

var ABB = function(){
    
    var nodoABB = function(){
        this.info;
        this.hijoIzquierdo;
        this.hijoDerecho;
    }

    var raiz;

    this.inicializarArbol = function(){
        raiz = null;
    },
    this.hijoDerecho = function(){
        return raiz.hijoDerecho;
    },
    this.hijoIzquierdo = function(){
        return raiz.hijoIzquierdo;
    },
    this.arbolVacio = function(){
        return (raiz === null);
    },
    this.agregarElemento = function(x){
        if(raiz == null){
            raiz = new nodoABB();
            raiz.info = x;
            raiz.hijoDerecho = new ABB();            
            raiz.hijoIzquierdo = new ABB();            
            raiz.hijoDerecho.inicializarArbol();
            raiz.hijoIzquierdo.inicializarArbol();
        }
        else{
            if(raiz.info > x){
                raiz.hijoIzquierdo.agregarElemento(x);
            }
            else if(raiz.info < x){
                raiz.hijoDerecho.agregarElemento(x);
            }
        }
    },
    this.eliminarElemento = function(x){
        if(raiz != null){
            // Caso Eliminacion Hoja
            if(raiz.info === x && raiz.hijoDerecho.arbolVacio() && raiz.hijoIzquierdo.arbolVacio()){
                raiz = null;
            }

            // Caso Menor De Mayores
            if(raiz.info === x && !raiz.hijoDerecho.arbolVacio()){
                raiz.info = this.menorMayores(raiz.hijoDerecho);
                raiz.hijoDerecho.eliminarElemento(raiz.info);
            }

            // Caso Mayor De Menores
            if(raiz.info === x && !raiz.hijoIzquierdo.arbolVacio()){
                raiz.info = this.mayorMenores(raiz.hijoIzquierdo);
                raiz.hijoIzquierdo.eliminarElemento(raiz.info);
            }

            // Caso Elemento Menor al raiz
            if(raiz.info > x){
                raiz.hijoIzquierdo.eliminarElemento(x);
            }

            // Caso Elemento Mayor al Raiz
            if(raiz.info < x){
                raiz.hijoDerecho.eliminarElemento(x);
            }
        }
    },
    this.raiz = function(){
        return raiz.info;
    },
    this.menorMayores = function(abb){
        if(abb.hijoIzquierdo().arbolVacio()){
            return abb.raiz();
        }
        else{
            this.menorMayores(abb.hijoIzquierdo());
        }
    },
    this.mayorMenores = function(abb){
        if(abb.hijoDerecho().arbolVacio()){
            return abb.raiz();
        }
        else{
            this.mayorMenores(abb.hijoDerecho());
        }
    }

};

// Recorrido Pre-Order
var preOrder = function(abb){
    if(!abb.arbolVacio()){
        console.log(abb.raiz());
        preOrder(abb.hijoIzquierdo());
        preOrder(abb.hijoDerecho());
    }
};

// Recorrido In-Order
var inOrder = function(abb){
    if(!abb.arbolVacio()){
        inOrder(abb.hijoIzquierdo());        
        console.log(abb.raiz());
        inOrder(abb.hijoDerecho());
    }
};

var postOrder = function(abb){
    if(!abb.arbolVacio()){
        postOrder(abb.hijoIzquierdo());
        postOrder(abb.hijoDerecho());
        console.log(abb.raiz());
    }
};

var calcularProfundidad = function(abb, x){
    if(!abb.arbolVacio()){
        if(abb.raiz() === x){
            return 0;
        }
        else{
            if(x > abb.raiz()){
                return calcularProfundidad(abb.hijoIzquierdo(), x) + 1;
            }
            else{
                return calcularProfundidad(abb.hijoDerecho(), x) + 1;
            }
        }
    }
    else{
        return 0;
    }
};

// Agrego Elementos
var arbol = new ABB();
arbol.inicializarArbol();
arbol.agregarElemento(2);
arbol.agregarElemento(1);
arbol.agregarElemento(3);
arbol.agregarElemento(4);
arbol.agregarElemento(0);

console.log("Recorrido Pre-Order");
preOrder(arbol);

console.log("Recorrido In-Order");
inOrder(arbol);

console.log("Recorrido Post-Order");
postOrder(arbol);

console.log("Calculando Profundidad:" + calcularProfundidad(arbol, 1));

arbol.eliminarElemento(2);
//arbol.eliminarElemento(1);
//arbol.eliminarElemento(3);
//arbol.eliminarElemento(4);
//arbol.eliminarElemento(0);

console.log(arbol.arbolVacio());
inOrder(arbol);
