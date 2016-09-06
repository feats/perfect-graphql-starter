import Author from './Author';
import Model from './Model';
import Post from './Post';

export default class Query extends Model {
  getAuthor({ _id }, context) {
    return Author.objects.getById(_id);
  }

  getPostsByTitle({ titleContains }, context) {
    return Post.objects.findByTitle({ contains: titleContains });
  }

  getPostsByAuthor({ authorId }, context) {
    return Post.objects.findByAuthor(authorId);
  }

}
