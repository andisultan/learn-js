# Struktur Data dan Algoritma

## Struktur Data

adalah kumpulan data yang terorganisir.

### Jenis - Jenis Struktur Data

#### **Array - kumpulan data sejenis.**

Cara kerja array adalah menyimpan data bersebelahan dengan data sebelumny.

Sehingga, jika pada suatu memory dimana ruang sebelah dari array sudah tersisi maka array akan mencari memory kosong untuk menyimpan data sejumlah array berserta data baru, dan begitu seterusnya.

Itulah mengapa proses menambahkan data menjadi kompleks dan lambat. Namun dalam hal pencarian data array sangat cepat yaitu mengunakan index dari data tersebut.

#### **Stack - data yang bersifat seperti tumpukan**

#### **Queue - data yang bersifat seperti antrian**

#### **Link List - data yang memiliki nilai sender dan address ke data selajutnya**

Adalah tipe data dimana setiap itemnya memiliki nilai dirinya sendiri dan alamat ke data berikutnya.
Cara kerja link list adalah flexible, artinya menambahkan data baru link list akan secara otomatis mennyimpan ke memory yang kosong, yang mana berbeda dengan array yang mengharuskan alokasi memory disebelah harus kosong.
Untuk melakukan pencarian data acak, tipe data link list akan sangat lambat karena harus melalui data demi data.

## Algoritma

adalah instruksi untuk menyelesaikan masalah.

### Jenis - Jenis Algoritma

### Search - Pencarian

1. Linear Search : pencarian data berurut (1 demi 1)
2. Binary Search : pencarian data dengan men-eleminasi setengah dari jumlah data.

### Sort - Penyortiran

#### 1. Bubble Sort

#### 2. Selection Sort

Adalah algoritma untuk mengurutkan data dengan cara membandingkan data satu persatu dari yang terkecil hingga terbesar dimana dalam proses perbandingan data terjadi penukaran posisi.

#### 3. Insertion Sort

#### 4. Merge Sort

#### 5. Quick Sort

#### 6. Counting Sort

#### 7. Radix Sort

#### 8. Bucket Sort

#### 9. Heap Sort

#### 10. Shell Short

## Asymphotatic Notations

Adalah matematika notasi yang di gunakan untuk mendeskripsikan waktu yang dibutuhkan

Big O Notation : mengukur waktu maksimal suatu algoritma. (worst case)
Omega Notation : mengukur waktu rata-rata. (average case)
Theta Notion : mengukur waktu terbaik dari sebuah algoritma. (best case)

1. Time Complexity adalah seberapa lama waktu yang diperlukan untuk menjalankan suatu algoritma.

2. Space Complexity adalah seberapa besar memori yang kita gunakan untuk menjalankan suatu algoritma.
