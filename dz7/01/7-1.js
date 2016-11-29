var cookies,	// строка с куками
	carr;	// массив для значений кук

console.log('Куки до', document.cookie);

document.cookie = "user=eti";
document.cookie = "m=true";
document.cookie = "city=Москва";


cookies = document.cookie;
console.log('Куки после', cookies);

carr = cookies.split('; ');
console.log(carr);

for(let i=0; i<carr.length; i++){
	carr[i] = carr[i].split('=');
}
console.log(carr);