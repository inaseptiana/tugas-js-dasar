/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 1; i <= 100; i ++){
    let flag = 0;
 for (let j = 2; j < i; j++) {
    if (i % j == 0) {
        flag = 1;
        break;
    }
 }
 if (i > 1 && flag == 0){
    console.log(i);
 }
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;
while (let i = 1; i <= 100; i ++){
   let flag = 0;
for (let j = 2; j < i; j++) {
   if (i % j == 0) {
       flag = 1;
       break;
   }
}
if (i > 1 && flag == 0){
   console.log(i);
}
}


    
    