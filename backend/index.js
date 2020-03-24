const express = require ('express')

const app = express();

app.get('/',(request, response)=>{
    return response.json({
        evento : 'semana ommistack 11.0',
        aluno : 'Emily'
    });
});

app.listen(3333);

