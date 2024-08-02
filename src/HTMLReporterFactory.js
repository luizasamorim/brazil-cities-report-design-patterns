import ReporterFactory from './ReporterFactory.js'
import HTMLReporter from './HTMLReporter.js'

export default class HTMLReporterFactory extends ReporterFactory {
    createReporter() {
        return new HTMLReporter()
    }
}