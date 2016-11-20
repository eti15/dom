var listenToMe = function(bu){
	var knopa = document.getElementById(bu);

	knopa.addEventListener('click', tvorenie);
}

var tvorenie = function(){
	var div1 = document.createElement('div'),
		min = 1,
		max = window.screen.width,
		max2 = window.screen.height;

	telo.appendChild(div1);

	var x1 = Math.floor(Math.random() * (max - 99 - min)) + min,
		x2 = Math.floor(Math.random() * (max - min + 101)) + min,
		y1 = Math.floor(Math.random() * (max2 - 99 - min)) + min,
		y2 = Math.floor(Math.random() * (max2 - min + 101)) + min,
		c1 = Math.floor(Math.random() * (256)),
		c2 = Math.floor(Math.random() * (256)),
		c3 = Math.floor(Math.random() * (256));

	div1.style.position = 'absolute';
	div1.style.left = x1 + 'px';
	div1.style.top = y1 + 'px';
	div1.style.width = x2 + 'px';
	div1.style.height = y2 + 'px';
	div1.style.backgroundColor = 'rgb(' + c1 + ',' + c2 + ',' + c3 + ')';
	//console.log(div1);
}