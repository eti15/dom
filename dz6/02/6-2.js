var cities = [];

var getCities = function(url){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		xhr.addEventListener('load', function(){
			resolve(xhr.responseText);
		});
		xhr.addEventListener('error', function(){
			reject();
		});
	});
}

cities = getCities('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
console.log(cities);