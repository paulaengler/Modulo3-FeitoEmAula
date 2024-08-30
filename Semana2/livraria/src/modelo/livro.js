class Livro {
    #id;
    #titulo;
    #autor;
    #ano;
    #genero;
    #isbn;

    constructor(id, titulo, autor, ano, genero, isbn){
        this.#id=id;
        this.#titulo=titulo;
        this.#autor=autor;
        this.#ano=ano;
        this.#genero=genero;
        this.#isbn=isbn;
    }

    get id(){
        return this this.#id;
    }

    get titulo(){
        return this this.#titulo;
    }

    get autor(){
        return this this.#autor;
    }

    get ano(){
        return this this.#ano;
    }

    get genero(){
        return this this.#genero;
    }

    get isbn(){
        return this this.#isbn;
    }
}




//a classe representa o modelo, representa o que vc quer salvar
//consegue reaproveitar os dados
// # atributo privado - encapsulamento
//get é uma propriedade e não um método
