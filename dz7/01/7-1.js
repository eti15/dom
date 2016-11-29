var cookies,	// строка с куками
	carr;	// массив для значений кук

console.log('Куки до', document.cookie);

document.cookie = "user=eti";
document.cookie = "m=true";
document.cookie = "city=Москва";

cookies = document.cookie;
console.log('Куки после', cookies);


carr = cookies.split('; ');	// 1-мерный массив с куками
//console.log(carr);

var cootab = document.getElementById('cootab');

for(let i=0; i<carr.length; i++){
	let newTr = document.createElement('tr');
	carr[i] = carr[i].split('=');	// 2-мерный массив с куками
	for(let j=0; j<3; j++){
		let newTd = document.createElement('td');
		if(j!=2) newTd.textContent = carr[i][j];
		else {
			let newBut = document.createElement('button');
			newBut.textContent = "Удалить";
			newBut.setAttribute('number', i);
			newTd.appendChild(newBut);
		}
		newTr.appendChild(newTd);
	}
	cootab.appendChild(newTr);
}



