var listenToMe = function(bu){
	var knopa = document.getElementById(bu);

	knopa.addEventListener('click', tvorenie);
}

var tvorenie = function(){
	var div1 = document.createElement('div'),
		min = 1,
		max = 840,
		max2 = 480;

	telo.appendChild(div1);

	div1.style.width = '100px';
	div1.style.height = '100px';
	div1.style.marginBottom = '10px';
	div1.style.backgroundColor = 'black';
	//console.log('Да будет свет!');
}