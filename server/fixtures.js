module.exports = {
  run(connection) {
    connection.then(connector => {
      connector.collection('authors').deleteMany({}).then(() => {
        connector.collection('authors').insertMany([
          { _id: 1, firstName: 'Salvador', lastName: 'Dali' },
          { _id: 2, firstName: 'Vince', lastName: 'Lombardi' },
        ]);
      });

      connector.collection('posts').deleteMany({}).then(() => {
        connector.collection('posts').insertMany([
          { _id: 1, author: { _id: 1 }, title: 'Perfection fear', text: 'Have no fear of perfection, you’ll never reach it.', views: 20 },
          { _id: 2, author: { _id: 2 }, title: 'Catch excellence', text: 'Perfection is not attainable, but if we chase perfection we can catch excellence.', views: 61 },
          { _id: 3, author: { _id: 1 }, private: true, title: 'The Secret Life of Salvador Dalí', text: 'this is a private post!', views: 1 },
        ]);
      });
    }).catch(err => {
      console.error(err.stack || err);
    });
  },
};
