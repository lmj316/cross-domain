const express = require('express')

const app = express()

const axios = require('axios')

app.use(express.static('./public'))

app.get('/jiemeng', (req, res) => {
    let query = encodeURI('下课')
    // http://v.juhe.cn/dream/query?key=a3bad6b379879791d5de72c98ea9e88d&q=${query}
    axios.get(`http://v.juhe.cn/dream/query?key=a3bad6b379879791d5de72c98ea9e88d&q=${query}`)
    .then((response) => {
        console.log(response.data)
        // console.log()
        res.send(JSON.stringify(response.data))
    })
    
})


app.listen(2500, () => {
    console.log(`我要做一个反向代理服务器`)
})