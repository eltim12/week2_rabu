
//1

var baris1 = 5
while(baris1 > 0) {
  console.log('*')
  baris1--
}


//2


var bintang = 5;
var kolom = 0;
for(kolom; kolom < bintang; kolom++) {
  var jumlah='';
   for(var baris = 0; baris < bintang; baris++) {
    jumlah += '*';
  } console.log(jumlah)
} 



var bintang = 6;

for(var kolom = 0; kolom < bintang; kolom++) {
  var jumlah='';
   for(var baris = 0; baris <= kolom; baris++) {
    jumlah += '*';
  } console.log(jumlah)
}

