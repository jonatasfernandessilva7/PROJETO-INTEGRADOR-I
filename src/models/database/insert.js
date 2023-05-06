const db = require("./db");

//insere novo aluno na tabela
export async function insertTable(nomeAluno,emailAluno,cursoAluno,senhaAluno){
    await db.connect();
    await db.query({
        text: 'INSERT INTO usuario (pk_nome, email, curso, senha) VALUES ($1,$2,$3,$4)',
        values: [nomeAluno, emailAluno,cursoAluno,senhaAluno]
    })
    await db.end();
}