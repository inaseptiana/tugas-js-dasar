/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc($SALARY) { 
 if ($SALARY < 5000000) {
     return ($SALARY*0/100);
} else if ($SALARY >= 5000000 && $SALARY < 10000000){
    return($SALARY*5/100);
} else if ($SALARY >= 10000000 && $SALARY < 20000000) {
    return($SALARY*10/100);
} else  {
    return($SALARY*20/100);
}  
 }

 console.log(taxCalc(4500000));
 console.log(taxCalc(5000000));
 console.log(taxCalc(20000000));

 /// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI (weight, height){
    let $BMI = (weight /((height/100)*(height/100)))
if ($BMI < 18.5){
    return ("under weight");
} else if ($BMI > 18.5 && $BMI < 24.9) {
    return ("normal")
} else if ($BMI > 25 && $BMI < 29.9) {
    return ("over weight");
} else if ($BMI > 30 && $BMI < 34.9) {
    return ("obese");
} else {
    return ("extremely obese");
}
    }

console.log(checkBMI(80, 170));
console.log(checkBMI(80, 160));

/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(str) {
    return str.replace(/\w\S*/g, function(kata){ 
        const kataBaru = kata.slice(0,1).toUpperCase() + kata.substr(1);
        return kataBaru
        });
        
 }
 console.log(convToUpperCase("hello bandung"));
 console.log(convToUpperCase("helloworldwide"));

 /// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
if (word.split(' ').length > 1) {
    return ("kata tidak boleh di pisah");
} else if (word.split("").length ){
    return ( " ")
} 

 }

 console.log(firstNonRepeatedChar("hello world"));
 console.log(firstNonRepeatedChar("wooohoowh"))

 ''
