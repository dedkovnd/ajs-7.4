import {transformToNum} from '../app.js';
import {findBy} from '../app.js'
test("str can be a number",()=>{
  let str = "444";
  let result = 444;
  expect(transformToNum(str)).toBe(result)
})
test("str can be a number",()=>{
  let str = "444";
  let result = 444;
  expect(transformToNum(str)).toBe(result)
})

test("str can be not a number",()=>{
  expect(transformToNum("4ttt")).toThrowError(new Error ("это не число"));
})
test("search in arr",()=>{
  let arr = [
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'}
]
  let props = [{name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'}];
  expect(arr.filter(findBy('name','заклинание'))).toStrictEqual(props)
})



