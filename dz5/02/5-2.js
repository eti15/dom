var listenToMe = function(bu){
	var knopa = document.getElementById(bu);

	knopa.addEventListener('click', tvorenie);
}

var tvorenie = function(){
	console.log('Да будет свет!');
}