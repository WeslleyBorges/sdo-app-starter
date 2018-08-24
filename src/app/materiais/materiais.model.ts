class Materiais{
    constructor(
        public equipamento: string,
        public descricao: string,
        public fornecedor: Fornecedor[] = []
    ){}
}

class Fornecedor{
    constructor(public fornecedor){}
}

export {Materiais}