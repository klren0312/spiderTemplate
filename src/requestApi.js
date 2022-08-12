;(async () => {
    const {got} = await import('got')
    const res = await got.get('http://localhost:3000/tags')
    console.log(JSON.parse(res.body))
})()