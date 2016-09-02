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

([Run](http://localhost:8080/graphiql/?query=%7B%0A%20%20getAuthor\(_id%3A%202\)%20%7B%0A%20%20%20%20lastName%0A%20%20%20%20posts%20%7B%0A%20%20%20%20%20%20text%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D))
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

```json
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

# Examples
There is more you can try! Go back to the [interactive tool](http://localhost:8080/graphiql/) and paste any of the following snippets there and check the result:

([Run](http://localhost:8080/graphiql/?query=%7B%0A%20%20getAuthor\(_id%3A%202\)%20%7B%20%20%23%20Almost%20the%20same%20as%0A%20%20%20%20firstName%20%20%20%20%20%20%20%20%20%20%23%20before%2C%20but%20with%20extra%0A%20%20%20%20lastName%20%20%20%20%20%20%20%20%20%20%20%23%20fields.%0A%20%20%20%20posts%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20text%0A%20%20%20%20%20%20views%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D))
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

([Run](http://localhost:8080/graphiql/?query=%7B%0A%20%20getPostsByTitle\(titleContains%3A%20%22fear%22\)%20%7B%0A%20%20%20%20title%0A%20%20%20%20text%0A%20%20%20%20views%0A%20%20%20%20author%20%7B%0A%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20lastName%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D))
```graphql
{
  getPostsByTitle(titleContains: "fear") {
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

([Run](http://localhost:8080/graphiql/?query=%7B%0A%20%20getPostsByAuthor\(authorId%3A1\)%20%7B%20%20%23%20You%20can%20try%20adding%0A%20%20%20%20title%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20the%20%27author%27%20field%0A%20%20%20%20text%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20as%20seen%20before%0A%20%20%20%20views%0A%20%20%7D%0A%7D))
```graphql
{
  getPostsByAuthor(authorId:1) {  # You can try adding
    title                         # the 'author' field
    text                          # as seen before
    views
  }
}
```
