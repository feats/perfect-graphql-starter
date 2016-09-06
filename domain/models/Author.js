import Model from './Model';
import Post from './Post';

export default class Author extends Model {
  posts() {
    return this.cached.posts
      || (this.cached.posts = Post.objects.find({ 'author._id': this.cached._id }));
  }
}
