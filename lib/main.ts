type itemType = any;
export const version = `version:1.0.9`;
export const reduce = (arr: itemType[], key: string = 'id') => {
  const obj: { [key: string]: boolean } = {};
  const arrResult = arr.reduce(
    (item: any[], next: { [x: string]: string | number }) => {
      if (!obj[next[key]]) {
        item.push(next);
        obj[next[key]] = true;
      }
      return item;
    },
    []
  );
  return arrResult;
};
export const intersection = (
  arr1: itemType[],
  arr2: itemType[],
  key: string
) => {
  const result = arr1.filter((item: itemType) => {
    return arr2.some((el: itemType) => {
      return item[key] === el[key];
    });
  });
  return result;
};
export const difference = (arr1: itemType[], arr2: itemType[], key: string) => {
  const result = arr1.filter((item: itemType) => {
    return arr2.every((el: itemType) => {
      return item[key] !== el[key];
    });
  });
  return result;
};
export const all = (
  arr1: itemType[],
  arr2: itemType[],
  key: string,
  select: string
) => {
  const result = JSON.parse(JSON.stringify(arr1)).map((item: itemType) => {
    item[select] = arr2.some((el) => el === item[key]);
    return item;
  });
  return result;
};
export const part = (arr1: itemType[], arr2: itemType[], key: string) => {
  const result = arr1.filter((item: itemType) => {
    //  item.select = c.some((el) => el === item.id);
    return arr2.some((el) => el === item[key]);
  });
  return result;
};
export const other = (arr1: itemType[], arr2: itemType[], key: string) => {
  const result = arr1.filter((item: itemType) => {
    //  item.select = c.some((el) => el === item.id);
    return arr2.every((el) => el !== item[key]);
  });
  return result;
};
