var cities = [],	// массив городов
	p;	// промис

var getCities = function(url){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		xhr.addEventListener('load', function(){
			resolve(xhr.response);
		});
		xhr.addEventListener('error', function(){
			reject();
		});
	});
}

p = getCities('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');

// создаём нумерованный список для городов
var list = document.createElement('ol');
document.body.appendChild(list);

p.then(
	function(result){
		cities = JSON.parse(result);	// ответ сервера переводим в массив объектов
		for(let i=0; i<cities.length; i++) cities[i] = cities[i].name;
		cities.sort();
		for(let i=0; i<cities.length; i++){	// помещаем города в элементы списка
			let li = document.createElement('li');
			li.textContent = cities[i];
			list.appendChild(li);
		}
	}
);