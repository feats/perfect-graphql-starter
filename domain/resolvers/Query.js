export default {
  getAuthor(root, { _id }, context) {
    return context.models.Author.objects.getById(_id);
  },
  getPostsByTitle(root, { titleContains }, context) {
    return context.models.Post.objects.findByTitle({ contains: titleContains });
  },
  getPostsByAuthor(root, { authorId }, context) {
    return context.models.Post.objects.findByAuthor(authorId);
  },
};
