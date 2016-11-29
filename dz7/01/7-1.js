console.log('Куки до', document.cookie);

document.cookie = "user=eti";
document.cookie = "m=true";
document.cookie = "city=Москва";

console.log('Куки после', document.cookie);