import Facade from './src/Facade.js'

const [cmd, filename, format] = process.argv;

const facade = new Facade()
const cidades = facade.reportar(format)
console.log(cidades)