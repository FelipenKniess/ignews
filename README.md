<h1 align="center">
<br>
  <img src="./public/images/logo.svg" alt="Ignews" width="250">
<br>
<br>
</h1>

<p align="center">Portal de notícias com CMS e meio de pagamento integrado</p> 
 <p align="center">Aplicação desenvolvida no curso IGNITE da <a href="https://www.rocketseat.com.br/">@rocketseat</a> </p>

<p align="center">
  <a href="https://github.com/FelipenKniess/ignews/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>  
</p>

## 🎯 Sobre

<p>O ignews é um portal de notícias no qual os usuários pagam para ter acesso. o usuário só tem acesso das postagens caso ele tenha uma inscrição ativa no Stripe. 
  caso o usuário não seja inscrito, poderá ler apenas um resumo das postagens.
</p>
<p>
  Os meios de pagamento da aplicação são integrados com a API do Stripe, juntamente do FaunaDB para armazenar as informações dos usuários. as postagens são administradas através do CMS Prismic.io 
 </p>
 <p>A aplicação é construída com modelo <strong>Serveless</strong>, sem necessidade de criar uma API externa para manipular os dados 🚀</p>

## 🚀 Tecnologias utilizadas
- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [FaunaDB](https://fauna.com/)
- [Stripe](https://stripe.com/docs/payments)
- [Prismic.io](https://prismic.io/)


## :eyes: Demonstração da aplicação
<a target="_blank" href="https://ignews-felipenkniess.vercel.app/">
  <img src="./public/images/ignews-preview.gif" alt="License MIT">
</a>

## :fire: Execução da aplicação em produção
- Link da aplicação: https://ignews-felipenkniess.vercel.app/
- :credit_card: para realizar a assinatura sem precisar usar seu cartão de crédito, pode utilizar esse número fake: ``` 4242 4242 4242 4242 ```

## :octocat: Execução da aplicação em desenvolvimento
- Requisítos: Instalar [Git](https://git-scm.com/), [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/)
- Baixar o repositório na máquina e entrar no projeto:
```bash
$ git clone https://github.com/FelipenKniess/ignews.git
$ cd ignews
```
- baixar as dependências do projeto e executar o projeto:
```bash
$ yarn
$ yarn dev
```
