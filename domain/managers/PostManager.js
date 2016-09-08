import Manager from './Manager';

export default class PostManager extends Manager {
  findByAuthor(_id) {
    return this.find({ 'author._id': _id });
  }

  findByTitle(title) {
    const selector = { title };

    if (title && title.contains) {
      selector.title = new RegExp(title.contains, 'i');
    }

    return this.find(selector);
  }
}
