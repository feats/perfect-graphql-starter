module.exports = {
  run(connection) {
    connection.then(connector => {
      connector.collection('authors').deleteMany({}).then(() => {
        connector.collection('authors').insertMany([
          { _id: 1, firstName: 'Dilma', lastName: 'Rousseff' },
          { _id: 2, firstName: 'Michel', lastName: 'Temer' },
        ]);
      });

      connector.collection('posts').deleteMany({}).then(() => {
        connector.collection('posts').insertMany([
          { _id: 1, author: { _id: 1 }, title: 'It is a coup!', text: 'I did not commit a crime', views: 20 },
          { _id: 2, author: { _id: 2 }, title: 'Whatever...', text: 'let\'s just pretend you did', views: 61 },
        ]);
      });
    }).catch(err => {
      console.error(err.stack || err);
    });
  },
};
