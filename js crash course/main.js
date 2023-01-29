// alert('hello'+' word');    分号记得写
// alert(1+1);   会得到一个内容为2的提示框
// 'hello'.length; 查看字符串的长度
// console.log('hello'.length);  在控制台输出字符串长度
// console.log('hello'.charAt(0));  在控制台输出字符串中的某一位
// console.log('hello, world' .replace('world','jiajia')); 在控制台输出替换字符串部分后的结果
// console.log('hello, world'.toUpperCase()); 在控制台输出字符串内容全大写的格式，注意toUpperCase是一个方法，后面应该要加上括号
// var name = 'jia'
// if (name == 'jiajia') {
//     document.write('hello,jiajia')
// } else if (name == 'xiaojia') {
//     document.write('hello,xiaojia')
// } else {
//     document.write('stranger')
// }
// var name = 'red'
// var age = '18'
// for (let i = 0; i<=5; i++) {
//   age++
// //   console.log(age)
//   console.log('i='+i,'age='+age)
// }
// // 即对age进行5次+1循环
// // 最终输出23
// b = ['dog', 'cat', 'tiger'];
// console.log(b);

// // 取出数组中每一个值的方法
// // 使用for循环  i的初始值定义为0（因为数组是从0开始计数的）
// for (var i = 0; i < b.length; i++) {
// console.log(b[i])
// }
// var a = new Array();
// a[0] = 'dog';
// a[1] = 'cat';
// a[5] = 'tiger';
// // 给一个i,让i在a的范围内进行计数（也就是i++）
// for (let i in a) {
// 	console.log('i='+i,'a='+a[i])
// }
// // 未被定义的值不会被打印在控制台
var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[5] = 'tiger';
for (var i = 0; i < a.length; i++) {
console.log(a[i])
}