require("dotenv").config();
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.json());
app.use(cors());


app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});

const User = require('./model/User');

app.post('/login', async (req,res) => {
    
    const {email, password} = req.body;

    const jsonPath = path.join(__dirname, '.', 'db','banco-dados-usuario.json');
    const usuariosCadastrados = JSON.parse(fs.readFileSync(jsonPath, {enconding : 'utf8', flag: 'r'}));

    
    for (let user of usuariosCadastrados){
        if(user.email === email){
            const passwordValidado = await bcrypt.compare(password, user.password);
            if(passwordValidado){
                const token = jwt.sign(user, process.env.TOKEN);

                return res.json({"token" : token});
            }

            else
                return res.status(422).send(`Usuario ou senhas incorretas.`);
        }

    }
});

app.get('/create', async (req,res) => {
    //extraçao dos dados do formulario para criara o usuario
    const {username, email, password} = req.body;

    const jsonPath = path.join(__dirname,'.', 'db', 'banco-dados-usuario.json');
    const usuariosCadastrados = JSON.parse(fs.readFileSync(jsonPath, {encoding: 'utf-8', flag: 'r'}));

    //verificaçao de se o usuario ja existe com o email cadastrado
    for(let users of usuariosCadastrados){
        if(users.email === emaill){
            //usuario existente, impossivel criar outro
            //retornando o erro 409 para indicar o conflito
            return res.status(409).send(`Usuario com email ${email} já existente`);
        }
        const id = usuariosCadastrados.length + 1;

        //geraçao de senha criptografada
        const salt = await bcrypt.genSalt(10);
        const passwordCrypt = await bcrypt.hash(password,salt);

        //criando user
        const user = new User(id, username, email, passwordCrypt);

        //salvando usuario no "banco"
        usuariosCadastrados.push(user);
        fs.writeFileSync(express.json,JSON.stringify(usuariosCadastrados,null,2));
        res.send(`Tudo certo usuario criado com sucesso.`);
    }
});

function verificaToken(req,res,next){

    const authHeaders = req.headers['authorization'];
    
    const token = authHeaders && authHeaders.split(' ')[1]
    //Bearer token

    if(token == null) return res.status(401).send('Acesso Negado');

    jwt.verify(token, process.env.TOKEN, (err) => {
        if(err) return res.status(403).send('Token Inválido/Expirado');
        next();
    })
}