Berikut jawaban soal yang bisa saya kerjakan. Untuk soal nomor 2 saya membuat dalam bentuk API  

Cara untuk menjalankan : 
1. Install Dependencies dengan : npm i 
2. Import Database yang ada di dalam  folder sql 
3. Jalankan dengan command npm run start
4. Untuk menjalankan unit test gunakan npm run test

Terimakasih.


Jawaban : 
soal no 1. 
Hitt menggunakan postman dengan curl : 
curl --location --request GET 'http://localhost:3000/twitter/get-tweets?max=10&pagination=77qpymm88g5h9vqkluoerho603a1dr0ekmji9d02bxdmh' \
--header 'Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAMJrcgEAAAAAWJDNc9YVSRtqoM98XNm3%2FhIrsuU%3DQ9MGlN5szHW8j4OwIdwywnP4JMg6RWeCpLmPrLOTwsJy2onWuk' \
--header 'twitterId: 1164828422444441601'

Untuk header Auth silahkan generate di https://developer.twitter.com/en/portal/projects/1525664629375979522/apps

soal no. 2. 
Hit http://localhost:3000/product/all untuk melihat semua data. 
dan Hit http://localhost:3000/product/pivot untuk melihat hasil pivot


