import { PostManager } from '/domain/managers';
import Model from './Model';

export default class Post extends Model {
  static get managers() {
    return {
      objects: PostManager,
    };
  }
}
