const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`it's alive on http://localhost:${PORT}`)
})

app.use(express.json())

app.get('/comments/get', (req,res)=>{
    res.status(200).send({
        comment:'funcionou o GET'
    })
})

app.post('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;

    if(!comment){
        res.status(418).send({message:'we need a comment'})
    }

    res.send({
        comments: `comment is: ${comment} and id is ${id}`,
    });

});
