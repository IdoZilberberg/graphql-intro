# GraphQL introduction
This repo supports the GraphQL introduction talk by Ido Zilberberg.

> Note: this project uses Node v16.14.0
## How to recreate it

This project is based on the [Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started/) page of Apollo Server.
and on [this series](https://www.youtube.com/watch?v=sjOSIMuz9sg&ab_channel=TheCodebookInc.).

``` 
npm i -g nodemon     (useful for rapid development)
npm init --yes
npm install express apollo-server-express consola 
npm i prettier --save-dev     (not a must)
```

In `package.json` file, add this line:
> "type": "module"


Next, create a file called `index.js` in the main folder.
Paste the contents from the above link.

Run `nodemon`


