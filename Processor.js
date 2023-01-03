class Processor {
    static process(content){
        const data = content.split("\r\n")
        const rows = []

        data.forEach(data => {
            const arr = data.split(";")

            rows.push(arr)
        });
        return rows
    }
}

module.exports = Processor