const isObject = (input: any): boolean =>
  null !== input && typeof input === 'object' && Object.getPrototypeOf(input).isPrototypeOf(Object);

export const set = (path: string, obj: any, value: any, pathSeperator: string = '.') => {
  const pList = Array.isArray(path) ? path : path.split(pathSeperator);
  const len = pList.length;
  // changes second last key to {}
  for (let i = 0; i < len - 1; i++) {
    const elem = pList[i];
    if (!obj[elem] || !isObject(obj[elem])) {
      obj[elem] = {};
    }
    obj = obj[elem];
  }

  // set value to second last key
  obj[pList[len - 1]] = value;
};
