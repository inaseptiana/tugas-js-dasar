/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
- TypeError
1 Syntax Error: adalah error yang terjadi ketika kita salah menginput syntax. Misalnya ketika kita salah menginput consle.log("Hello World"); , baris kode tersebut akan menghasilkan Syntax Error, karena kesalahan penyebutan syntax consle yang seharusnya adalah console
2 Runtime Error: adalah error yang terjadi ketika proses eksekusi program. Misalnya salah dalam pemanggilan nama variabel atau function.

- ReferenceError
Objek ReferenceError mewakili kesalahan ketika variabel yang tidak ada (atau belum diinisialisasi) dalam lingkup saat ini direferensikan.

- RangeError
Objek RangeError menunjukkan kesalahan saat nilai tidak dalam set atau rentang nilai yang diizinkan.

-SyntaxError
Jika dikaitkan dengan bahasa manusia, Syntax error bisa disamakan dengan kesalahan tata bahasa atau gramatika. 
Contoh kesalahan yang termasuk dalam kategori ini adalah menuliskan perintah yang sebenarnya tidak ada, lupa menuliskan tanda kurung kotak, tanda kurung bulat dan titik koma, serta salah mengeja variabel. 
Error jenis ini akan membuat program tidak berjalan dan atau crash akibat ketidakmampuan komputer dalam menerjemahkan perintah ‘cacat’ yang dituliskan oleh programmer.
Syntax Error adalah jenis error yang paling sering muncul di layar oleh para programmer muda. 
Pengalaman menulis coding dianggap dapat membantu programmer untuk lebih dulu mengidentifikasi dan menyelesaikan syntax error sebelum menjalankan sebuah program.


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

kesalahannya ReferenceError
