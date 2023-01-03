const pdf = require("html-pdf")

class PDFWriter{
    static Writer(filnemae, data){
        pdf.create(data,{}).toFile(filnemae, (error) => {console.log(error)})
    }
}

module.exports = PDFWriter