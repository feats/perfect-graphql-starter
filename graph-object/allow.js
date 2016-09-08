export default (Model, rules) => {
  const inheritedRules = Reflect.get(Model, 'allow');

  Model.allow = {
    ...inheritedRules,
    ...rules,
  };
};
