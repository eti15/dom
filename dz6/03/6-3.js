var cities = [],	// массив городов
	p,	// промис
	txt_in;	// input

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

window.addEventListener('load', function(){
	p = getCities('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');

	p.then(
		function(result){
			cities = JSON.parse(result);	// ответ сервера переводим в массив объектов
			for(let i=0; i<cities.length; i++) cities[i] = cities[i].name;
			cities.sort();
		}
	);

	txt_in = document.getElementById('txt_in');
	txt_in.addEventListener('input',function(){
		console.log(cities);
	});
});

		/*for(let i=0; i<cities.length; i++){	// помещаем города в элементы списка
			let li = document.createElement('li');
			li.textContent = cities[i];
			list.appendChild(li);
		}*/