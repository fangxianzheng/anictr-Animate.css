/**
 * Created by fangxianzheng on 2016/8/5.
 */
;(function(win){

    var eleArr = [];

    var Anictr = function(opts){
        this.ele = opts.ele;
        this.ani = opts.ani;
        this.dur = opts.dur;

        if(opts.before){
            this.before = opts.before;
        }
        if(opts.after){
            this.after = opts.after;
        }
        if(opts.rani){
            this.rani = opts.rani;
        }
    };

    Anictr.prototype = {
        go: function(){
            var self = this;
            var ele = document.querySelector(self.ele);
            eleArr.push({ele:ele,ani:self.ani});

            if(self.before){
                self.before(self)
            }
            if(self.after){
                setTimeout(function(){
                    self.after(self)
                },self.dur)
            }
            if(self.dur){
                var second = self.dur /1000 + 's';
                ele.style.cssText += ';animation-duration:' + second + ';-webkit-animation-duration:' + second;
            }
            

            if(/animated/.test(ele.className)){
                ele.className +=  ' ' + self.ani;
            }else{
                ele.className += ' animated ' + self.ani;
            }

            return self;
        },
        then: function(obj,timeDelay){
            var self = this;
            var ele = document.querySelector(self.ele);

            //then参数可以是多个对象组成的数组
            setTimeout(function(){
                //如果新的DOM之前操作过，清除之前的动画
                removeOldAni(obj);
                obj.go.call(obj)
            },timeDelay);

            return obj;
        }
    };

    function removeOldAni(obj){
        var ele = document.querySelector(obj.ele);
        for(var i= 0; i < eleArr.length; i++){
            if(ele === eleArr[i].ele){
                removeClass(ele, eleArr[i].ani)
                eleArr.splice(i,1)
            }
        }

    }

    function removeClass(ele, oldClass){
        var classNames = ele.className.trim();
        classNames = classNames.replace(/\s+/g,' ');
        var classNameArr = classNames.split(' ');
        for(var j = 0; j<classNameArr.length; j++){
            if(oldClass === classNameArr[j]){
                classNameArr.splice(j,1)
            }
        }
        return ele.className = classNameArr.join(' ');
    }

    var anictr = function(opts){
        return new Anictr(opts)
    }
    win.anictr = anictr;
})(window,undefined);



/*
anictr({
    ele:'#test1',
    ani:'zoomOut',
    dur:500,
    before:function(){console.log('haha')},
    after:function(){console.log('hehe')}
}).go().then(
    [anictr({
        ele:'#test1',
        rani:'zoomOut',
        ani:'zoomIn',
        dur:1000
    }),anictr({
        ele:'#test6',
        ani:'zoomOutUp',
        dur:1500
    })],500
).then(
    anictr({
        ele:'#test2',
        ani:'zoomOut',
        dur:1200
    }),1500
)*/
