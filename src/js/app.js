// TODO: write your code here
import sum from './basic';

// console.log('worked');
//
// console.log(sum([1, 2]));
export function transformToNum(str) {
  let num = str.slice(0, str.lenght)
  for (let elem of num) {
    let n = parseInt(elem, 10)
    if (Number.isNaN(n)) {
      throw new Error("это не число")
    }
  }
  return num = +num;
}
//вторая задача
export function findBy(key,value) {
  const props = (elem) => {
    let index = elem[key].indexOf(value)
    return index !== -1;
  }
  return props;
}
