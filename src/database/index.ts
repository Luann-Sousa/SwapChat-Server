import {createConnection} from 'typeorm';//pegamos o cara para cria nossa conexão com bd

createConnection().then(()=> console.log("deu bom motoca")).catch((error)=> console.log("errrokk",error))//aqui ja iniciamos nossa conexao simples ne rs