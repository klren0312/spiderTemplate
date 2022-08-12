const cheerio = require('cheerio')


;(async () => {
    const {got} = await import('got')
    const res = await got.get('http://localhost:3000/htmlSource.html')
    // console.log(res.body)
    const $ = cheerio.load(res.body)
    const arr = []
    $('.col-tag').each((i, el)=> {
        const html = $(el).html()
        const name = html.match(/(\S+)<span/)[1]
        const num = $(el).children().text()
        arr.push({
            name,
            num
        })
    })
    console.log(arr)
})()