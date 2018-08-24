class Obra{
    constructor(
        public obra: string,
        public subobra: string,
        public inicioObra: Date,
        public fimObra: Date,
        public detalheObra: string,
        public funcionario: string,
        public funcao: string,
        public porcentHora: number,
        public valorObraHora: number
    ){}
}

export {Obra}