export default {
  author: (post, args, context) => (context.repositories.Author.getById(post.author._id)),
};
