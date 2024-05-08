// const a = 'nihao'
// const b = `abc${a}`
// console.log(b)

// const [a , b , c] = [1,2,3]
// console.log(a,b,c);

// const {name:testname,age,...other} = {
//     name: "xiaotian",
//     age: 21,
//     hobby: 'computer'
// }
// console.log(testname)
// console.log(other)

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [7,8,...arr1,...arr2]
// console.log(arr3)

// const obj1 = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// const obj2 = {
//     e: 4,
//     f: 5,
//     g: 6
// }

// const obj3 = {
//     ...obj1,
//     ...obj2,
//     sum: 8
// }

// console.log(obj3)

// function fn () {
//     Array.from(arguments).forEach( function (item) {
//         console.log(item)
//     })
// }
// fn(1,2,3,4,5)

// const Obj1 = {
//     name: "tiancong",
//     age: 18
// }

// const Obj2 = {
//     love: 'lwys',
//     hobby: 'money'
// }
// const Obj3 = Object.assign({},Obj1,Obj2)
// Obj3.love = 'lwystc'
// console.log(Obj3);


// class A {
//     constructor (name,age) {
//         this.name = name
//         this.age = age
//     }

//     introduce () {
//         console.log(`我的名字是${this.name}`)
//     }
// }

// class B extends A {
//     constructor(name,age,male) {
//         super(name,age)
//         this.male = male
//     }

//     hello () {
//         console.log(`我的年龄是${this.age}`)
//     }
// }

// var s = new B('xiaotian',21,'男')
// s.introduce()
// s.hello()


// const a = n => n+1
// const b = (n,s) => n+s
// console.log(b(3,6));
// const c = (n,s,...other) => console.log(n,s,other);
// c(1,2,3,4,5)

// const getSum = arr => {
//     let sum =0
//     arr.forEach(item => {
//         sum += item
//         return sum
//     });   
// }
// console.log(getSum([1,2,3,4,5]));

// const p = new Promise((resolve,reject) => {
//     resolve('任务一:成功获取数据')
//     // reject('任务一:获取数据失败')
// })

// p.then(data => {
//     console.log(data);
//     return new Promise((resolve,reject) => {
//         resolve('任务二:成功获取数据')
//         // reject('任务二:获取数据失败')
//     })
// }, err => {
//     console.log('任务一:失败');
//     throw new Error('任务一失败')
// })

// .then(data => {
//     console.log(data)
//     return new Promise((resolve,reject) => {
//         // resolve('任务三:成功获取数据')
//         reject('任务三:获取数据失败')
//     })

// }, err => {
//     console.log('任务二:失败')
//     throw new Error('任务二失败')
// })

// .then(data => {
//     console.log(data)
//     return new Promise((resolve,reject) => {
//         resolve('任务四:成功获取数据')
//         reject('任务四:获取数据失败')
//     })

// }, err => {
//     console.log('任务三:失败')
//     throw new Error('任务三失败')
// })

// .then(data => {
//     console.log(data)
// }, err => {
//     console.log('任务四:失败')
// })


// var target = {name: 'tiancong', age: 18}
// var obj = new Proxy (target, {
//     get (target, key) {
//         return target[key]
//     },
//     set (target, key, value) {
//         if (key === 'age' && typeof value === 'number') {
//             target[key] = value
//             return true
//         }

//         else {
//             console.log('类型错误，请输入数字')
//             return false
//         }
//     }
// })

// console.log(obj.name);
// obj.age = 21
