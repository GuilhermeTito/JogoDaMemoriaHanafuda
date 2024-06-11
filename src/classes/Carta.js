class Carta {
    constructor(id, naipe, valor){
        this.id = id
        this.naipe = naipe
        this.valor = valor
        this.virada = false
    }
}

class Hikari extends Carta{
    constructor(id, naipe){
        super(id, naipe, 20)
    }
}

class Tane extends Carta{
    constructor(id, naipe){
        super(id, naipe, 10)
    }
}

class Tanzaku extends Carta{
    constructor(id, naipe){
        super(id, naipe, 5)
    }
}

class Kasu extends Carta{
    constructor(id, naipe){
        super(id, naipe, 1)
    }
}