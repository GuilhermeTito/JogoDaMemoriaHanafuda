export default class CartaLogica {
    constructor(id, naipe, tipo, valor){
        this.id = id
        this.naipe = naipe
        this.tipo = tipo
        this.valor = valor        
        this.virada = false
        this.virarCartaFisica = undefined
    }

    virar(){
        this.virada = !this.virada

        if (this.virarCartaFisica != undefined){
            this.virarCartaFisica(this.virada)
        }
    }
}