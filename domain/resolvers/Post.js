export default {
  author: (post, args, context) => (
    context.models.Author.objects.getById(post.author._id)
  ),
};
