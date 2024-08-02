export default class Reporter {
    ler(caminho) {
        throw new Error('o metodo invocado deve ser implementado por uma subclasse')
    }
  
    parse() {
        throw new Error('o metodo invocado deve ser implementado por uma subclasse')
    }
  
    reportar() {
        throw new Error('o metodo invocado deve ser implementado por uma subclasse')
    }
}
