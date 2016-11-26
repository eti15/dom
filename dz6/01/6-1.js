var time = 3000;

var timer = function(t){
	var p = new Promise(function(resolve, reject){
	// асинхронный код
	setTimeout(function(){
		resolve();  // перевести промис в состояние "выполнено успешно"
	},t);
}

timer(time);

p.then(
function(){console.log('выведено через', time/1000, 'секунд');},	// выполнить, если успешно (resolve)
function(){console.log('что-то пошло не так');}		// выполнить, если неуспешно (reject)
);	// выполняется в случае выполнения промиса