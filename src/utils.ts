import _ from 'lodash';

export function add(a: number, b: number) {
  console.log(_.isNumber(a));
  return a + b;
}
