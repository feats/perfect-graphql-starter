# Perfect GraphQL Starter

> "Have no fear of perfection, you’ll never reach it." - Salvador Dali

## Why

Get real, we could never agree on a perfect boilerplate project for any technology; It would not be different for a GraphQL-based project then. But it doesn't mean we should not try.

This project aims to be a place for the community to spread **best practices** and the use of related technologies.

It is inspired by the tutorial [How to build a GraphQL server](https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.wy5h1htxs) and its [repository](https://github.com/apollostack/apollo-starter-kit).


## Install

As simple as that:
```sh
git clone https://github.com/Quadric/perfect-graphql-starter
cd perfect-graphql-starter
npm install
npm start
```

## Getting started
* open [http://localhost:8080/graphiql/](http://localhost:8080/graphiql/)

* Paste this on the left side of the page:

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

* Hit the play button (cmd-return), then you should get this on the right side:

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

* There is more you can try! Paste any of the following snippets there and check the result:

```graphql
{
  getAuthor(_id: 2) {  # Almost the same as
    firstName          # before, but with extra
    lastName           # fields.
    posts {
      title
      text
      views
    }
  }
}
```

```graphql
{
  getPostsByTitle(titleContains: "whatever") {
    title
    text
    views
    author {
      firstName
      lastName
    }
  }
}
```

```graphql
{
  getPostsByAuthor(authorId:1) {  # You can try adding
    title                         # the 'author' field
    text                          # as seen before
    views
  }
}
```
