
// var sum = a=>b=>c=>{
//     return a+b+c;
// }
// var kq=sum(2)(3)(3); 
// console.log(kq);

var tich = a=>b=>c=>{
    return a*b*c;
}
var kqua=tich(2)(3)(3); 
console.log(kqua);


//cho gia tien va % discount => gia sp


var total = gia => discount =>{
    return gia * discount;
}

var totalprice = total(200)(10%);
console.log(totalprice);