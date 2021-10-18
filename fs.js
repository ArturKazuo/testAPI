var fs = require('fs')

function bora(){

    fs.readFile('index.js','utf-8',function(err, data){
        console.log(data)
    }
    )
}