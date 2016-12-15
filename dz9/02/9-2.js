var calculator = function(firstNumber){
        this.sum = function(){
            for(var i= 0, res = firstNumber; i<arguments.length; i++) res+=arguments[i];
            return res;
        },
        this.dif = function(){
            for(var i= 0, res = firstNumber; i<arguments.length; i++) res-=arguments[i];
            return res;
        },
        this.div = function(){
            for(var i= 0, res = firstNumber; i<arguments.length; i++){
                if(!arguments[i]) throw new Error('операция не может быть произведена, т.к. делитель равен нулю');
                res/=arguments[i];
            }
            return res;
        },
        this.mul = function(){
            for(var i= 0, res = firstNumber; i<arguments.length; i++) res*=arguments[i];
            return res;
        }
}

var myCalculator = new calculator(100);
console.log(myCalculator);

//var myCalculator = calculator(100);
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