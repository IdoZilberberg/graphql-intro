# GraphQL introduction
This repo supports the GraphQL introductory talk by [Ido Zilberberg](https://www.linkedin.com/in/idozilberberg/).

Its purpose is to be as simple as possible while showing required features of a GraphQL Server.
> Note: this project uses Node v16.14.0

## Development

* Clone or fork this [repo](https://github.com/IdoZilberberg/graphql-intro)
* Run `npm i -g nodemon`     (useful for rapid development)
* Run `nodemon`

## Initial Setup

This project is based on the [Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started/) page of Apollo Server.
and on [this series](https://www.youtube.com/watch?v=sjOSIMuz9sg&ab_channel=TheCodebookInc.).

The following commands were used to create the initial project:


``` 
npm init --yes
npm install express apollo-server-express consola 
npm i prettier --save-dev     (not a must)
```
In `package.json` file, added this line:
> "type": "module"



