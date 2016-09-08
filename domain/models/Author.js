import { Model } from 'graph-object';
import Post from './Post';

export default class Author extends Model {
  posts() {
    return this._posts || (this._posts = Post.objects.find({ 'author._id': this._raw._id }));
  }
}
