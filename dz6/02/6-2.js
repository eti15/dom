var cities = [],	// массив городов
	p;	// промис

var getCities = function(url){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		xhr.addEventListener('load', function(){
			resolve(xhr);
		});
		xhr.addEventListener('error', function(){
			reject();
		});
	});
}

p = getCities('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');

p.then(
	function(result){
		console.log(result);
	}
);