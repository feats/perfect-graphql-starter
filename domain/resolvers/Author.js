export default {
  posts: (author, args, context) => (
    context.models.Post.objects.find({ 'author._id': author._id })
  ),
};
