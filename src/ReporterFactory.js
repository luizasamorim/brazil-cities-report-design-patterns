export default class ReporterFactory {
    createReporter() {
        throw new Error('o metodo invocado deve ser implementado por uma subclasse')
    }

    generateReport(caminho) {
        const reporter = this.createReporter()
        reporter.ler(caminho)
        reporter.parse()
        const report = reporter.reportar()
        return report
    }
}