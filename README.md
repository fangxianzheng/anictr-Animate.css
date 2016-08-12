# anictr Animate.css控制器

## 简介

Animate.css是非常棒的CSS3动画库，然而因为存CSS3动画，使用很不灵活，所以创建了这个小型的库，用来让Animate.css更好的使用

## 示例

![扫一扫](https://fangxianzheng.github.io/demo/anictr/demo1.png)
[单个元素动画效果](https://fangxianzheng.github.io/demo/anictr/demo1.html)

![扫一扫](https://fangxianzheng.github.io/demo/anictr/demo2.png)
[多个元素动画效果](https://fangxianzheng.github.io/demo/anictr/demo2.html)

![扫一扫](https://fangxianzheng.github.io/demo/anictr/demo5.png)
[案例使用](https://fangxianzheng.github.io/demo/anictr/demo5.html)

## 依赖

Animate.css <http://daneden.github.io/animate.css/>

## 使用方法

````
anictr({
        ele:'#test2',
        ani:'slideInLeft',
        before:function(obj){
            var el = document.querySelector(obj.ele);
            el.style.visibility = 'visible';
        },
        dur:1000
    }).go().then(
            anictr({
                ele:'#test3',
                ani:'slideInDown',
                before:function(obj){
                    var el = document.querySelector(obj.ele);
                    el.style.visibility = 'visible';
                },
                dur:1000
            }),1000
    )
````

## 参数列表

|       参数        |   说明   |  默认值 |      可填值     |
|------------------|----------|--------|----------------|
| ele              | 将要动画的元素   | 无 （必填）    | css选择器，如: '#test' |
| ani               | Animate.css的动画名称    | 无（必填）     | 所有 Animate.css定义的动画     |
| dur            | 动画时长 |  Animate.css的默认值   | 毫秒数，如: 1000       |
| before | 动画开始前的function   | 无（带有个指向当前对象的参数） | 无|
| after        | 动画结束后的function   | 无 （带有个指向当前对象的参数） | 无 |


## API

`.go()`

开始动画，定义第一个元素的动画时必须要调用的方法。返回值为对象本身


`.then(obj, timeDelay)`

跟在`.go()`或其他`.then(obj, timeDelay)`之后调用，参数`obj`为一个anictr对象，`timeDelay`为这个动画执行的时机（相对于整个时间轴的时间）。

## 优点

可以很方便的创建出很实用很酷的动画，代码比单独使用Animate.css简洁了很多。

## 缺点

完全依赖于Animate.css，所以只能调用Animate.css定义了的动画。
