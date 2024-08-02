import TXTReporterFactory from './TXTReporterFactory.js'
import HTMLReporterFactory from './HTMLReporterFactory.js'

export default class Facade {
    reportar(format) {
            switch (format) {
            case 'html':
                this.reporterFactory = new HTMLReporterFactory
                return this.reporterFactory.generateReport('./data/cidades-2.json')
            case 'txt':
                this.reporterFactory = new TXTReporterFactory
                return this.reporterFactory.generateReport('./data/cidades-2.json')
            default:
                throw new Error("formato ainda não implementado")             
        }
    }
}
