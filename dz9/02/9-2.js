var calculator = function(firstNumber){ this.firstNumber = firstNumber; }

calculator.prototype.sum = function(){
    for(var i= 0, res = this.firstNumber; i<arguments.length; i++) res+=arguments[i];
    return res;
};
calculator.prototype.dif = function(){
    for(var i= 0, res = this.firstNumber; i<arguments.length; i++) res-=arguments[i];
    return res;
};
calculator.prototype.mul = function(){
    for(var i= 0, res = this.firstNumber; i<arguments.length; i++) res*=arguments[i];
    return res;
};
calculator.prototype.div = function(){
    for(var i= 0, res = this.firstNumber; i<arguments.length; i++){
        if(!arguments[i]) throw new Error('операция не может быть произведена, т.к. делитель равен нулю');
        res/=arguments[i];
    }
    return res;
};


var SqrCalc = function(firstNumber){
    this.firstNumber = firstNumber;
    this.sum = function(){
        return Math.pow(this.__proto__.sum.apply(this,arguments), 2);
    }
    this.dif = function(){
        return Math.pow(this.__proto__.dif.apply(this,arguments), 2);
    }

    this.mul = function(){
        return Math.pow(this.__proto__.mul.apply(this,arguments), 2);
    }

    this.div = function(){
        return Math.pow(this.__proto__.div.apply(this,arguments), 2);
    }
}

// наследование (ES5)
/*var inherit = function(child, parent){
    var Temp = function(){};
    Temp.prototype = parent.prototype;
    child.prototype = new Temp();
}*/

// наследование (ES6)
function inherit(child, parent){
    child.prototype = Object.create(parent.prototype);
}

inherit(SqrCalc, calculator);

var myCalculator = new SqrCalc(100);

// super не работает (Uncaught SyntaxError: 'super' keyword unexpected here)
// myCalculator.sum = function(){ return Math.pow(super.sum.apply(this,arguments), 2);}

// стрелочная функция не работает (Uncaught TypeError: Cannot read property 'apply' of undefined)
// myCalculator.sum = () => Math.pow(this.__proto__.sum.apply(this,arguments), 2);

/*myCalculator.sum = function(){
    return Math.pow(this.__proto__.sum.apply(this,arguments), 2);
}

myCalculator.dif = function(){
    return Math.pow(this.__proto__.dif.apply(this,arguments), 2);
}

myCalculator.mul = function(){
    return Math.pow(this.__proto__.mul.apply(this,arguments), 2);
}

myCalculator.div = function(){
    return Math.pow(this.__proto__.div.apply(this,arguments), 2);
}*/

console.log(myCalculator.sum(1, 2, 3)); // 1, 2, 3 - вернет 106
console.log(myCalculator.dif(10, 20)); // 10, 20 - вернет 70
console.log(myCalculator.mul(2, 2)); // 2, 2 - вернет 400

try {
    console.log(myCalculator.div(2, 2)); // 2, 2 - вернет 25
} catch(e){
    console.log('произошла ошибка при вызове метода div:', e.message);
} finally{
    console.log('=== happy end ===');
}