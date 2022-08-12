const express = require('express')
const open = require('open')
const MockData = require('./mockData')
app = express()
app.use('/', express.static('public'))
open('/')

//设置所有路由无限制访问，不需要跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
})

app.get('/tags', function(req, res) {
    res.send({
        code: 0,
        data: MockData
    })
})

app.listen(3000, function() {
    console.log('服务启动')
})

