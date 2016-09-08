import { Model, allow } from '/graph-object';
import { PostManager } from '/domain/managers';
import Author from './Author';

export default class Post extends Model {
  static get managers() {
    return {
      objects: PostManager,
    };
  }

  get author() {
    return this.cached.author instanceof Author
      ? this.cached.author
      : (this.cached.author = Author.objects.getById(this.cached.author._id));
  }
}

allow(Post, {
  read(context) {
    return this.author._id === context.userId || !this.private;
  },
});
