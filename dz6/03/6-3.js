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
	hint = document.getElementById('hint');
	txt_in.addEventListener('input',function(){
		hint.innerHTML = '';
		if(!txt_in.value) return;
		for(let i=0; i<cities.length; i++){
			if(cities[i].indexOf(txt_in.value)<0) continue;
			else {
				let div = document.createElement('div');
				div.textContent = cities[i];
				hint.appendChild(div);
			}
		}
	});
});