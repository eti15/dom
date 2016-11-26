var time = 2000,	// задержка
	p;	// промис

var timer = function(t){
	p = new Promise(function(resolve, reject){
	// асинхронный код
	setTimeout(function(){
		resolve();  // перевести промис в состояние "выполнено успешно"
	},t);
})};

timer(time);

p.then(
function(){console.log('выведено через', time/1000, 'сек');}	// выполнить, если успешно (resolve)
);
