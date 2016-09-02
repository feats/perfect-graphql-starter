export default {
  posts: (author, args, context) => (context.repositories.Post.find({ 'author._id': author._id })),
};
