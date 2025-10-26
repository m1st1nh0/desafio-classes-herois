class HeroiAventura {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.tipoAtaque = "";

        if (this.tipo === "mago") {
            this.tipoAtaque = "magia";
        } else if (this.tipo === "guerreiro") {
            this.tipoAtaque = "espada";
        } else if (this.tipo === "monge") {
            this.tipoAtaque = "artes marciais";
        } else if (this.tipo === "ninja") {
            this.tipoAtaque = "shuriken";
        }
    }

    ataque() {
        console.log(`O ${this.tipo} atacou usando ${this.tipoAtaque}.`);
    }
}


const mago = new HeroiAventura("Merlin", 150, "mago");
const guerreiro = new HeroiAventura("Arthas", 35, "guerreiro");
const monge = new HeroiAventura("Li Shen", 40, "monge");
const ninja = new HeroiAventura("Ryu", 27, "ninja");


mago.ataque();   
guerreiro.ataque(); 
monge.ataque();      
ninja.ataque();      
