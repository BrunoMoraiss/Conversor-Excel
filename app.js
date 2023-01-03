const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")
const Writer = require("./Writer")
const PDFWriter = require("./PdfWriter")

const leitor = new Reader()
const escritor = new Writer()

async function main(){
    const dados = await leitor.Read("./users.csv")
    const processedData = Processor.process(dados)
    const tableDate = new Table(processedData)
    const tableHtml = await HtmlParser.Parse(tableDate)

    console.log(tableHtml)
    
    escritor.Write(Date.now() + ".html", tableHtml)
    PDFWriter.Writer(Date.now() + ".PDF", tableHtml)
}

main()