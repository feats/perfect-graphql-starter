import casual from 'casual';

export default () => ({
  title: casual.title,
  text: casual.sentences(3),
});
