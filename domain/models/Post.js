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
    return this._author || (this._author = Author.objects.getById(this._raw.author._id));
  }
}

allow(Post, {
  read(context) {
    return this.author._id === context.userId || !this.private;
  },
});
