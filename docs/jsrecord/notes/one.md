---
theme: smartblue
---
## 前言
相信很多刚开始接触JavaScript的同学都对for...in 和 for...of 感到迷茫，到底什么时候用哪一个，本文将带你彻底搞懂两者的区别，以及再扩展几种循环迭代的方法。

## for...in
我先列举`for...in` 的特点，然后后面再用代码来论证。

1. for in通常用来`遍历对象`
1. 遍历的是`可枚举的属性`，包括实例中的属性，也包括对象原型上的属性
1. 只想获得对象的实例属性，可以使用`hasOwnProperty`方法。
1. for in用来遍历数组得到的是`数组的索引`

下面是代码验证

```js
//初始化一个对象实例,并且在实例原型上添加属性bar
let schools = {
    name:"掘金大学",
    grade:"985",
    detail:"世界一流大学"
}
Object.prototype.bar = 666;
//1.遍历对象实例(包括原型链上的属性)
    for(let i in schools) {
        console.log(`${i}:${schools[i]}`);
    }
    /*
        得到结果为:
            name:掘金大学
            grade:985
            detail:世界一流大学
            bar:666
        遍历了对象实例的属性,也遍历了对象原型的属性,其中666是实例原型上的属性，也被遍历出来了
    */
//2.遍历对象实例(不包括原型链上的属性)
    for(let i in schools) {
        if(schools.hasOwnProperty(i)) { //hasOwnProperty方法可以判断属性是否为对象实例上的属性,是返回true,不是返回false
            console.log(`${i}:${schools[i]}`);
        }
    }
    /*
        得到结果为:
            name:掘金大学
            grade:985
            detail:世界一流大学
        只遍历了对象实例的属性
    */
//3用for in 遍历数组试试
    for(let i in [1,2,3]) {
        console.log(i);
    }
    /* 
        得到结果为: 
            0
            1
            2
            bar
        得到的是数组的索引,因为数组通过原型链可以找到Object,因此数组原型上的属性也有bar
    */
```

## for...of 
还是先列举`for...of` 的特点，然后后面再用代码来论证。

1. for of通常用来`遍历数组`，从左到右遍历
1. for of`遍历得到的结果是数据的值`，而不像for in得到的是索引/属性
1. for of还可以遍历map,set,String等
1. for of不可以遍历普通的对象,但是可以借用Object.keys方法遍历对象

下面是代码验证

```js
const arr = ["掘","金","大","学"];
//1.遍历数组
    for(let item of arr) {
        console.log(item);
    }
    //得到的结果为:掘 金 大 学
//2.遍历字符串
    let str = "String"
    for(let item of str) { 
        console.log(item);
    }
    //结果为: S t r i n g
//3.遍历map
    const myMap = new Map();
    myMap.set('a','1');
    myMap.set('b','2');
    myMap.set('c','3');
    for(let item of myMap) { 
        console.log(item);
    }
    //结果为: ['a', '1']  ['b', '2']  ['c', '3']
//4.遍历set
    const mySet = new Set(arr);
    for(let item of mySet) { 
        console.log(item);
    }
    //结果为: 掘 金 大 学
//5.遍历Object
    let schools = {
        name:"掘金大学",
        grade:"985",
        detail:"世界一流大学"
    }
    // for(let item of schools) { 
    //     console.log(item);
    // }
    //结果为: Uncaught TypeError: schools is not iterable : 就是说schools对象是不可迭代的
    
    console.log(Object.keys(schools)); //结果为['name', 'grade', 'detail'],
    //通过这个我们可以知道Object.keys帮助我们把对象的属性名取出并组成一个数组返回。

    for(let item of Object.keys(schools)) { 
        console.log(`${item}:${schools[item]}`);
    }
    //结果为: name:掘金大学 grade:985 detail:世界一流大学
    //通过这个我们可以知道 for of 借助Object.keys遍历对象属性名 来间接获取对象属性值
```
# 除了for in / for of,还有另外几种常见的循环迭代方法。
## (1) forEach
**特点**: 

1. forEach无法跳出循环，即无法使用break
1. 无法使用continue,但可以用return跳过当前迭代
1. 没有返回值,即不能使用return返回给外层
1. 写法简洁，无需关心索引问题
**参数**:

`arr.forEach((item,index,arr) => {},this)`

item: 数组当前遍历的元素的值,默认从左往右遍历

index: 数组当前遍历元素的索引

arr: 当前遍历的数组

this: 回调函数中this指向

**测试用例**：

```js
const list = [1,2,3,4,5,6,7,8,9];
const test = list.forEach((item,index) => { 
    if(item === 5) return 1;
    console.log(`数组下标${index}的值为${item}`);
})
/**
 * 运行结果为: 
    数组下标0的值为1
    数组下标1的值为2
    数组下标2的值为3
    数组下标3的值为4   (值为5时被跳过了,说明return可以跳过当前迭代，进入下一次循环)
    数组下标5的值为6
    数组下标6的值为7
    数组下标7的值为8
    数组下标8的值为9
*/
console.log(test) //结果为:undefined,证实无法使用return返回值
```

```js
let user = { 
    name: 'root'
}
const list = [1,2,3,4];

list.forEach((item,index,arr) => { 
    console.log(`${this.name}第${index+1}次时往数组[${arr}]输入了${item}`)
},user)
/**
 * 运行结果 
    undefined第1次时往数组[1,2,3,4]输入了1
    undefined第2次时往数组[1,2,3,4]输入了2
    undefined第3次时往数组[1,2,3,4]输入了3
    undefined第4次时往数组[1,2,3,4]输入了4
   使用箭头函数会导致第四个参数(回调函数中this指向)失效
   因为箭头函数没有this指针，它会捕获其所在上下文的this的值，作为自己的this
   此时的this指向全局变量，全局变量没有name属性
 */

list.forEach(function(item,index,arr) { 
    console.log(`${this.name}第${index+1}次时往数组[${arr}]输入了${item}`)
},user)
/**
 * 运行结果 
    root第1次时往数组[1,2,3,4]输入了1
    root第2次时往数组[1,2,3,4]输入了2
    root第3次时往数组[1,2,3,4]输入了3
    root第4次时往数组[1,2,3,4]输入了4
   回调函数中this代指user
 */
```
## (2) map
**特点**

1. 不改变原数组，返回新数组
1. 不可以使用break中断循环，不可以使用continue跳出迭代
1. 可以使用return返回**自定义元素**
1. **新数组长度与原数组长度保持一致**，但数组元素是可自定义的
1. 数组中如果有空元素会跳过
（`简单理解就是map相当于一物换一物，可能换到一样的东西，也可能换到不一样的，空元素相当于没有东西，换到的自然也是空`）

**测试用例**

```js
const list = [1,,null,undefined,2,3,4];
const test = list.map(item => { 
    if(item == 2) return "稀土掘金";
    return item;
})
const test2 = list.map(item => {
    return item+1;
})
console.log(list); //结果为: [1,empty,null,undefined,2,3,4]
console.log(test); //结果为: [1,empty,null,undefined,'稀土掘金',3,4]
console.log(test2); //结果为: [2, empty, 1, NaN, 3, 4, 5]
```
## (3) filter
**特点**

1.不改变原数组，返回新数组 

2.不可以使用break和continue

3.可以使用return返回**满足条件元素**，

4.**新数组长度与原数组长度不一定一致**,但对应元素一致。

5.数组中如果有空元素会跳过

（`简单理解filter相当于滤网，滤出可以透出的东西，过滤后这些东西并没有发生变化，如果这个东西如果是空，那就是没东西可以过滤咯，自然也就没东西透出`）

**测试用例**

```js
const list = [1,,null,undefined,2,3,4];
const test = list.filter(item => { 
    return item;
})

const test2 = list.filter(item => { 
    return item < 4;
});

//简化写法
const test3 = list.filter(item => item < 4);

console.log(list); 
//结果为: [1,empty,null,undefined,2,3,4];
console.log(test); 
//结果为: [1, 2, 3, 4],这里空,null和undefined都被过滤掉了
console.log(test2); 
//结果为: [1, null, 2, 3],这里空和undefined被过滤掉了,但是null没有,是因为null在于数字4进行比较时，被当做0处理，因为null能够滤出
```
## （4）reduce\reduceRight

**特点**

1.不改变原数组，返回回调函数处理累计的结果

2.reduce从左往右遍历，reduceRight从右往左遍历

3.不能使用break,不能使用continue

4.可以使用return,返回之前数组元素被回调函数处理累计的结果

**参数**


```js
const result = list.reduce((accumulator,current,currentIndex,sourceArray) => { 
    return accumulator*current;
},initialValue)
```
**reduce有两个参数**，

一个是回调函数`(accumulator,current,currentIndex,sourceArray) => { 
}`

另一个是初始值 `initialValue`

**回调函数的四个参数分别是**:

accumulator: 之前所有数组元素被回调函数处理累计的结果,`初始值为initialValue(reduce的第二个参数)`,
如果没有设定`initialValue`，则让数组中第一个元素作为初始值传给accumulator，从数组第二项开始累计处理结果。

current: 当前正在执行的数组元素

currentIndex: 当前被执行元素的索引

sourceArray: 原数组

**测试用例**

```js
const list = [1,2,3,4]
//(1)有初始值initialValue
const result = list.reduce((accumulator,current,currentIndex,sourceArray) => { 
    console.log(accumulator,current,currentIndex,sourceArray);
    return accumulator+current;
},1)
console.log("result:"+result)
/**
 * 执行结果为: 
    1 1 0 (4) [1, 2, 3, 4]
    2 2 1 (4) [1, 2, 3, 4]
    4 3 2 (4) [1, 2, 3, 4]
    7 4 3 (4) [1, 2, 3, 4]
    result: 11
 */
//(2)没有初始值initialValue
const result2 = list.reduce((accumulator,current,currentIndex,sourceArray) => { 
    console.log(accumulator,current,currentIndex,sourceArray);
    return accumulator+current;
}) //注意这里的 1 没了;
console.log("result2:"+result2)
/**
 * 执行结果为: 
    1 2 1 (4) [1, 2, 3, 4]  //这里直接将数组第一项作为accumulator传给数组第二项，从数组第二项开始reduce
    3 3 2 (4) [1, 2, 3, 4]
    6 4 3 (4) [1, 2, 3, 4]
    result2: 10
 */
```
## （5）some/every
**特点**

1.不改变原数组，返回布尔值

2.some：某一个元素满足返回条件，就立刻返回true，全部元素都不满足返回条件，则返回false

3.every：所有元素都满足返回条件才返回true，有某一个元素不满足返回条件，就立刻返回false

4.不可以使用break和continue，可以使用return

**参数**

some和every的回调函数中都有三个参数

`some((item,index,arr) => {})`

`every((item,index,arr) => {})`

item: 当前正在执行的数组元素

index：当前正在执行数组元素的索引

arr: 原数组

**代码示例**


```js
const list = [1,2,3,4]

const result = list.some((item,index,arr) => { 
    console.log(item,index,arr);
    return item < 5;
})
console.log(result);
/** 
 *运行结果: 
    1 0 (4) [1, 2, 3, 4]   
    true         //第一项就满足返回条件了，立刻返回。
*/

const result2 = list.every((item,index,arr) => { 
    console.log(item,index,arr);
    return item < 5;
})
console.log(result2);
/** 
 *运行结果: 
    1 0 (4) [1, 2, 3, 4]
    2 1 (4) [1, 2, 3, 4]
    3 2 (4) [1, 2, 3, 4]
    4 3 (4) [1, 2, 3, 4]  
    true         //每一项都满足条件才返回true
*/
```

## (6) find/findIndex

**特点** 

1.不改变元素值

2.find返回匹配到的数组元素，findIndex返回匹配到数组元素的索引

3.不可以使用break，continue,可以使用return

**参数**

find和findIndex的回调函数中都有三个参数

`find((item,index,arr) => {})`

`findIndex((item,index,arr) => {})`

item: 当前正在执行的数组元素

index：当前正在执行数组元素的索引

arr: 原数组

**代码示例**

```js
const schools = [
    {name: '掘金大学',id: 1},
    {name: 'B站大学', id: 2},
    {name: 'CSDN大学', id: 3}
]

const result = schools.find((item,index,arr) => { 
    return item.name == '掘金大学'
})
console.log(result);   
/**
 * 运行结果: 
    {name: '掘金大学', id: 1} //返回匹配到的数组元素
 */

const result2 = schools.findIndex((item,index,arr) => { 
    return item.name == '掘金大学'
})
console.log(result2);   
/**
 * 运行结果: 
    0 //返回匹配到的数组元素的索引
 */
```

> 写的不好的地方欢迎大家来批评指正，希望路过的朋友动动小指给个赞，这对我真的很重要！