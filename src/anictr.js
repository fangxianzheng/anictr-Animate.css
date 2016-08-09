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

            if(eleArr.length >0){
                for(var k = 0; k<eleArr.length; k++){
                    if(ele === eleArr[k].ele){
                        removeClass(ele,eleArr[k].ani);
                        eleArr.splice(k,1);
                    }
                }
            }
            eleArr.push({ele:ele,ani:self.ani});
            if(/animated/.test(ele.className)){
                ele.className +=  ' ' + self.ani;
            }else{
                ele.className += ' animated ' + self.ani;
                ele.className = ele.className.trim();
            }

            return self;
        },
        then: function(obj,timeDelay){
            var self = this;
            var ele = document.querySelector(self.ele);

            //then参数可以是多个对象组成的数组
            setTimeout(function(){

                obj.go.call(obj)
            },timeDelay);

            return obj;
        }
    };

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


