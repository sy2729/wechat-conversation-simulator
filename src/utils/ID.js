export default function createID(length) {
  let string = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i <=length; i++) {
    let index = Math.floor((Math.random() * string.length));
    result = result + string[index];
  }
  return result;
}