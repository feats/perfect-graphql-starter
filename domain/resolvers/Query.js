export default {
  getAuthor(root, { _id }, context) {
    return context.repositories.Author.getById(_id);
  },
  getPostsByTitle(root, { titleContains }, context) {
    return context.repositories.Post.findByTitle({ contains: titleContains });
  },
  getPostsByAuthor(root, { authorId }, context) {
    return context.repositories.Post.findByAuthor(authorId);
  },
};
