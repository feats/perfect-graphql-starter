export default () => ({
  author: (root, args) => ({
    firstName: args.firstName,
    lastName: args.lastName,
  }),
});
