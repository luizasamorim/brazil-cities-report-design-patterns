import * as fs from 'node:fs';
import Reporter from './Reporter.js' 

export default class TXTReporter extends Reporter{

  ler (caminho) {
    this.cidades = fs.readFileSync(caminho);
  }

  parse () {
    this.cidades = JSON.parse(this.cidades);
  }

  reportar() {
    let result = `Relatório de Nomes de Cidades
=============================`;

    for (let i = 0; i < this.cidades.length; i++) {
      result += '* ' + this.cidades[i]['Nome'] + '\n';
    }

    return result;
  }
}

