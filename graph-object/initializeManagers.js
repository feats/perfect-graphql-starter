export default (target) => {
  for (const name of Object.keys(target.managers)) {
    const ManagerClass = target.managers[name];

    Reflect.defineProperty(target, name, {
      value: new ManagerClass(target, target.connectors),
    });
  }

  return target;
};
