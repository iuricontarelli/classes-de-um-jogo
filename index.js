//git add .(tudo) ou git add nomedoarquivo
//git commit -m "essas foram as mudancas feitas..."
//git push -u origin main

class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque indefinido";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi("Herói Mago", 25, "mago");
  heroi1.atacar();
  
  const heroi2 = new Heroi("Herói Guerreiro", 30, "guerreiro");
  heroi2.atacar();