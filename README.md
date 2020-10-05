O sistema espera que tenha um banco mysql rodando previamente ná maquina.

A configuração padrão espera um banco com nome "mutant" e a senha do usuario root seja "password"
para alterar essas configurações basta criar um arquivo .env como no modelo do .env.example

```bash
git clone https://github.com/glayner/mutant-challenge.git

cd mutant-challenge

yarn
```

Para rodar como desenvolvedor:
```bash
yarn dev:server
```

Para rodar como em produção:
```bash
yarn build

node dist/shared/infra/http/server.js
```
Tenha atenção para que ao rodar como desenvolvedor a variavel TYPEORM_ENTITIES esteja apontando para "./src/modules/**/infra/typeorm/entities/*.ts", mas se for rodar como em produção ela deve estar: "./dist/modules/**/infra/typeorm/entities/*.js"

Para acessar o swagger basta acessar a rota localhost:3000/docs

Pelo fator de tempo não consegui concluir o docker mas segue até onde fiz para se quiser dar uma olhada.
