# Perfect GraphQL Starter

> "Have no fear of perfection, you’ll never reach it." - Salvador Dali



<p align="center">
  <img src="http://www.pixhoster.info/f/2016-09/8516908bc1552a5c3dcdb242611ee506.jpg" />
</p>

## Why

_There will never be an agreement on a perfect boilerplate project for any technology we are aware of and it would not be different for a GraphQL-based project. But it doesn't mean we should not try to get as close as we can get from it. So please don't mind our pretentious project name, it's just a catchy one._

This project aims to be a place for the community to **spread good practices** and the use of related technologies.


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

([Run](http://localhost:8080/graphiql/?query=%7B%0A%20%20getPostsByTitle\(titleContains%3A%20%22fear%22\)%20%7B%0A%20%20%20%20title%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20Try%20adding%20the%20%27author%27%0A%20%20%20%20text%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20field%20anywhere%20inside%0A%20%20%20%20views%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20this%20block%20%3B\)%0A%20%20%7D%0A%7D&variables=))
```graphql
{
  getPostsByTitle(titleContains: "fear") {
    title               # Try adding the 'author'
    text                # field anywhere inside
    views               # this block ;)
  }
}
```

([Run](http://localhost:8080/graphiql/?query=%7B%0A%20%20getPostsByAuthor\(authorId%3A1\)%20%7B%20%20%23%20This%20author%20has%20a%20private%0A%20%20%20%20title%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20post.%20You%20should%20get%20an%0A%20%20%20%20text%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20Authorization%20error.%0A%20%20%20%20views%0A%20%20%7D%0A%7D&variables=))
```graphql
{
  getPostsByAuthor(authorId:1) {  # This author has a private
    title                         # post. You should get an
    text                          # Authorization error.
    views
  }
}
```
