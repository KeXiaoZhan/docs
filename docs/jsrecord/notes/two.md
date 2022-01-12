## 方法一: 使用JSON转换

```javascript
	function deepClone(target) {
	    //通过数据创建JSON格式的字符串
	    let str = JSON.stringify(target);
	    console.log(str);
	    //将JSON字符串转化为JS数据
	    let data = JSON.parse(str);
	    return data;
	}
```
缺点：

 - JSON转换**不能克隆方法**;
 - JSON转换**不能克隆循环引用**，如: obj.b.push(obj.c);  obj.c.j = obj.b;

## 方法二: 使用递归

```javascript
function deepClone2(target) { 
    //检测数据类型
    if (typeof target !== 'object' || target === null) {
        // target 是 null ，或者不是对象和数组，说明是原始类型,直接返回
        return target;
    } else { 
        //创建一个容器,存储数组或者对象
        const result = Array.isArray(target) ? [] : {};
        //遍历target
        for(let key in target) { 
            //检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
            if(target.hasOwnProperty(key)) { 
            	//递归遍历子元素，直到能返回原始值
                result[key] = deepClone2(target[key]);
            }
        }
        return result;
    }
}
```

 - 优点: 递归**可以克隆方法**
 - 缺点: 递归**不可以克隆循环引用** 如: obj.b.push(obj.c）;   obj.c.j = obj.b;即b中有c，c中有b，这样递归时会不停执行克隆 b-->c-->b-->c**--....**
****
## 方法三: 递归+映射
首先要明白**map.set()这个方法传入的值是按引用传入**的,代码如下:

```javascript
let result = [1,2,3];
const map = new Map();
map.set(0,result)  //这里map.get(0)是[1,2,3]
result.push(4); //这里map.get(0)是[1,2,3,4]
//综上可以得知map.set()方法传入的值是按引用传入
```
综上可以得知map.set()方法传入的值是**按引用传入**。
接下来**解决递归版深拷贝无法拷贝循环引用的问题**,代码如下

```javascript
function deepClone3(target,map = new Map()) { 
    //检测数据类型
    if (typeof target !== 'object' || target === null) {
        // target 是 null ，或者不是对象和数组，说明是原始类型,直接返回
        return target;
    } else { 
        //克隆数据前，先进行判断数据之前是否克隆过
        let cache = map.get(target);
        //如果克隆过,直接返回映射中键对应的值,绕开了递归
        if(cache) { 
            return cache;
        }
        //创建一个容器,存储数组或者对象
        const result = Array.isArray(target) ? [] : {};
        //注意:map.set()传入的值是按引用传入,后序result改变也会影响map中保存的状态
        map.set(target,result);
        //遍历target
        for(let key in target) { 
            //检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
            if(target.hasOwnProperty(key)) { 
                result[key] = deepClone3(target[key],map);
            }
        }
        return result;
    }
}

//测试用例
const obj1 = {
    b:['1','2','3'],
    c: {h: 20}
}
obj1.b.push(obj1.c);   
obj1.c.j = obj1.b;
const obj2 = deepClone3(obj1)
```
几个丑字加深理解:
![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/89917e0827214000ba9472310a9dec83~tplv-k3u1fbpfcp-zoom-1.image)

 - 优点: 解决递归无法深拷贝循环引用问题.
