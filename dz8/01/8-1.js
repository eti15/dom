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
			handler();
		}
	);

	txt_in = document.getElementById('txt_in');
	hint = document.getElementById('hint');
	var handler = function(){
		hint.innerHTML = '';
		if(!txt_in.value) console.log(cities.length);
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