# Perfect GraphQL Starter

> "Have no fear of perfection, you’ll never reach it." - Salvador Dali

## Why

Get real, we could never agree on a perfect boilerplate project for any technology, and it would not be different for a GraphQL-based project. But it doesn't mean we cannot try.

This project aims to be a place for the community to spread best practices and the use of related technologies.

It is based on the tutorial [How to build a GraphQL server](https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.wy5h1htxs) and its [repository](https://github.com/apollostack/apollo-starter-kit)

## Getting started

```sh
git clone https://github.com/Quadric/perfect-graphql-starter
cd perfect-graphql-starter
npm install
npm start
```

Then open [http://localhost:8080](http://localhost:8080)

When you paste this on the left side of the page:

```graphql
{
  getAuthor(_id: 2) {
    lastName
    posts {
      text
    }
  }
}
```

and hit the play button (cmd-return), then you should get this on the right side:

```graphql
{
  "data": {
    "getAuthor": {
      "lastName": "Lombardi",
      "posts": [
        {
          "text": "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        }
      ]
    }
  }
}
```  
