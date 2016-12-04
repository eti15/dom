var citiesObj = [],	// массив городов в виде объектов
	cities = [],	// массив городов в виде строк
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
	txt_in = document.getElementById('txt_in');
	hint = document.getElementById('hint');

	p = getCities('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');

	p.then(
		function(result){
			citiesObj = JSON.parse(result);	// ответ сервера переводим в массив объектов
			
			// сортировка городов в массиве объектов
			for(let i=0; i<citiesObj.length; i++) cities[i] = citiesObj[i].name;
			cities.sort();
			for(let i=0; i<cities.length; i++) citiesObj[i].name = cities[i]; 

			// вывод городов при помощи шаблонизатора Handlebars
			var shab = document.getElementById('shab');
			var shabFun = Handlebars.compile(shab.innerHTML);
			hint.innerHTML = shabFun({list: citiesObj});
		}
	);

	var handler = function(){
		hint.innerHTML = '';
		for(let i=0; i<cities.length; i++){
			if(cities[i].toLowerCase().indexOf(txt_in.value.toLowerCase())>=0 || !txt_in.value){
				let div = document.createElement('div');
				div.textContent = cities[i];
				hint.appendChild(div);
			}
		}
	}
	txt_in.addEventListener('input', handler);
});