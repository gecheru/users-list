interface Obj {
  [key: string | number]: unknown;
}

export const isEqual = (obj1: Obj, obj2: Obj): boolean => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};
