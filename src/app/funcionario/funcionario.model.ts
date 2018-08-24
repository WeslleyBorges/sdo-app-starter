class Funcionario{
    constructor(
        public matricula: number,
        public nome: string,
        public funcao: Funcao[] = [],
        public setor: Setor[] = [],
        public salario: string,
        public dataAdmissao: Date,
        public dataDemissao: Date
    ){}
}

class Funcao{
    constructor(public funcao){}
}
class Setor{
    constructor(public setor){}
}

export {Funcionario}