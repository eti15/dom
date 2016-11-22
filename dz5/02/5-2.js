var listenToMe = function(bu){
	var knopa = document.getElementById(bu);

	knopa.addEventListener('click', tvorenie);
	telo.addEventListener('mousedown', moveIt);
	document.ondragstart = function() {return false;};
}

var tvorenie = function(){
	var div1 = document.createElement('div'),
		min = 1,
		max = window.screen.width,
		max2 = window.screen.height;

	telo.appendChild(div1);

	var x1 = Math.floor(Math.random() * (max - 299 - min)) + min,
		x2 = Math.floor(Math.random() * 251) + 50,
		y1 = Math.floor(Math.random() * (max2 - 349 - min)) + min,
		y2 = Math.floor(Math.random() * 201) + 50,
		c1 = Math.floor(Math.random() * (256)),
		c2 = Math.floor(Math.random() * (256)),
		c3 = Math.floor(Math.random() * (256));

	div1.style.position = 'absolute';
	div1.style.left = x1 + 'px';
	div1.style.top = y1 + 'px';
	div1.style.width = x2 + 'px';
	div1.style.height = y2 + 'px';
	div1.style.backgroundColor = 'rgb(' + c1 + ',' + c2 + ',' + c3 + ')';
}

var moveIt = function(e){
	if(e.target.tagName == 'BUTTON') return;
	var div2 = e.target;
	div2.style.zIndex = 2;

	var moveAt = function(div, e) {
    div.style.left = e.pageX - div.offsetWidth / 2 + 'px';
    div.style.top = e.pageY - div.offsetHeight / 2 + 'px';
	}

	moveAt(div2, e);

	var handler1 = function(e){ moveAt(div2, e); };
	var handler2 = function(){
		div2.removeEventListener('mousemove', handler1);
		div2.removeEventListener('mouseup', handler2);
		div2.removeEventListener('mouseover', handler2);
		div2.style.zIndex = 1;
	};

	div2.addEventListener('mousemove', handler1);
	div2.addEventListener('mouseup', handler2);
	div2.addEventListener('mouseover', handler2);
}