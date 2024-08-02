import Facade from './src/Facade.js'

const facade = new Facade()
const cidadesHTML = facade.reportar('html')
const cidadesTXT = facade.reportar('txt')
console.log("\n\tRELATORIO HTML\n",cidadesHTML)
console.log("\n\tRELATORIO TXT\n",cidadesTXT)