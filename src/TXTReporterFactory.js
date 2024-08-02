import ReporterFactory from './ReporterFactory.js'
import TXTReporter from './TXTReporter.js'

export default class TXTReporterFactory extends ReporterFactory {
    createReporter() {
        return new TXTReporter()
    }
}
  