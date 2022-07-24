class Forca {

  letrasChutadas = [];
  arrayFinal = ["_","_","_","_","_","_","_"];
  vidasRestantes = 6;
  acertos = 0;
  ganhou = false;
  perdeu = false;

  constructor(palavraSecreta){
    this.palavraSecreta = palavraSecreta;
  }

  chutar(letra) {
    letra = letra.toLowerCase();
    if(letra.length == 1 && isNaN(letra)){
      if(!this.letrasChutadas.includes(letra)){
        this.letrasChutadas.push(letra);
        this.verificaPalavra(letra);
      } else {
        return;
      }      
    }
  }

  verificaPalavra(letra) {
    let palavraEmArray = this.palavraSecreta.split('');

    if(this.palavraSecreta.includes(letra)){
      for(let i = 0; i <= palavraEmArray.length; i++){
        if(letra == palavraEmArray[i]){
          this.arrayFinal[i] = letra;
          this.acertos++;
          if(this.acertos == 7 && this.vidasRestantes > 0){
            this.ganhou = true;
          }
        }
      }
    } else {
      this.vidasRestantes--;
      
      if(this.vidasRestantes <= 0){
        this.perdeu = true;
      }
    }
  }

  buscarEstado() { 

    if(this.ganhou == false && this.perdeu == true){
      return "perdeu";
    } else if (this.ganhou == true && this.perdeu == false){
      return "ganhou";
    }    
    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidasRestantes, // Quantidade de vidas restantes
          palavra: this.arrayFinal // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      } 
  }
}

module.exports = Forca;
