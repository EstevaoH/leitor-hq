const express = require('express');
const con = require('./db');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3000, () => {
    con.connect((erro) => {
        if (!erro) {
            console.log("Servidor Okay");
        } else {
            console.log('Erro: ' + erro.sqlMessage)
        }
    });
});

app.get('/autor', (req, res)=>{
    const sql = 'SELECT * FROM autor;';
    con.query(sql, (erro, resultado) =>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});


app.post('/autor', (req,res)=>{
    const id = req.body;
    const sql = 'INSERT INTO autor(codAutor, nome, dtNascimento, nacionalidade, biografia ) VALUES (?,?,?,?,?);';
    con.query(sql, [id.codAutor, id.nome, id.dtNascimento, id.nacionalidade, id.biografio ], (erro, resultado)=>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.delete('/autor/:id', (req, res)=>{
    const id = req.params.id;
    const sql = 'DELETE  FROM autor WHERE codAutor = ?;';
    con.query(sql, [id.codAutor], (erro, resultado)=>{
        if(!erro){
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage)
        }
    });
});

app.put('/autor', (req, res)=>{
    const id = req.body;
    const sql = 'UPDATE autor SET nome = ?, dtNascimento = ?,nacionalidade = ?,biografia = ? WHERE codAutor = ?;';
    con.query(sql, [id.nome, id.dtNascimento, id.nacionalidade, id.biografio, id.codAutor], (erro, resultado)=>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.get('/autor/:id', (req, res) => {
    const id = req.params.id;
    const slq = 'SELECT * FROM autor WHERE codAutor = ?;';
    con.query(slq,[id], (erro, resultado) => {
        if (!erro) {
            res.send(resultado);
        } else {
            res.send('Erro = '+ erro.sqlMessage)
        }
    });
});


app.get('/obras/genero', (req, res) => {
    const slq = 'SELECT genero FROM obras';
    con.query(slq, (erro, resultado) => {
        if (!erro) {
            res.send(resultado);
        } else {
            res.send('Erro = '+ erro.sqlMessage)
        }
    });
});

app.get('/obras', (req,res)=>{
    //const id = req.params.id;
    const sql = 'SELECT * FROM obras;';
    con.query(sql, (erro, resultado) =>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.get('/obras/:id', (req,res)=>{
    const id = req.params.id;
    const sql = 'SELECT * FROM obras WHERE codObra = ?;';
    con.query(sql,[id], (erro, resultado) =>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.post('/obras', (req,res)=>{
    const id = req.body;
    const sql = 'INSERT INTO obras( nome, isbn, genero, dtlancamento, editora, sinopse, codAutor ) VALUES (?,?,?,?,?,?,?) ;';
    con.query(sql, [id.nome, id.isbn, id.genero, id.dtlancamento, id.editora, id.sinpse, id.codAutor], (erro, resultado)=>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.delete('/obras/:id', (req, res)=>{
    const id = req.params.id;
    const sql = 'DELETE  FROM obras WHERE codObra = ?;';
    con.query(sql, [id], (erro, resultado)=>{
        if(!erro){
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage)
        }
    });
});

app.put('/obras', (req, res)=>{
    const id = req.body;
    const sql = 'UPDATE obras SET nome = ?, isbn = ?, genero = ?, dtlancamento = ?, editora = ?, genero = ?, sinopse = ?,codAutor = ? WHERE codObra = ?;';
    con.query(sql, [id.nome, id.isbn, id.genero, id.dtlancamento, id.editora, id.genero, id.sinpse, id.codAutor, id.codObra], (erro, resultado)=>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.post('/usuarios', (req,res)=>{
    const id = req.body;
    const sql = 'INSERT INTO obras( nome, email, senha) VALUES (?,?,?) ;';
    con.query(sql, [id.nome, id.email, id.senha], (erro, resultado)=>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

