//BAGIAN SIMULASI 1
var mass2 = 10; // massa
//var k2 = 0.1; // konstanta pegas
var damping2 = 0; // faktor redaman
var x2 = 20; // posisi awal
var v2 = 0; // kecepatan awal
var a2 = 0; // percepatan awal
//var f_ext2 = 0; // gaya luar

var plotData2 = []; // variabel untuk menyimpan data plotss

//SIMULASI 2
var mass = 10; // massa
//var k = 0.1; // konstanta pegas
var x = 20; // posisi awal
var v = 0; // kecepatan awal
var a = 0; // percepatan awal
//var f_ext = 0; // gaya luar

var plotData = []; // variabel untuk menyimpan data plot

let frek;
let damp;
let amp;
let k;

let frek2;
let amp2;
let k2;

//IMAGE
let bg;
let logo;
let bgimage;
let profil;
let question;
let pb;
let pd;
let programmer;
let code;
let grafik;
let pers;
let bmkg;
let dapus;
let cocogoose;
let cocogoose1;
let josefin;
let josefin2;
let josefin3;
let Ani;


function preload(){
  bg = loadImage('Tsunami.jpg')
  logo = loadImage('logoganda.png')
  bgimage = loadImage('frameimg.png')
  question = loadImage('question.png')
  pb = loadImage('pb.jpg')
  pd = loadImage('pd.jpg')
  code = loadImage('redaman.jpg')
  grafik1 = loadImage('redaman2.jpg')
  grafik2 = loadImage('woredaman2.jpg')
  pers = loadImage('quadcopy.png')
  bmkg = loadImage('bmkg.png')
  pnjlsn = loadImage("pnjlsn.png")
  dapus = loadImage("dapus.png")
  maratus = loadImage("maratus.jpg")
  fauzi = loadImage("fauzi.jpg")
  vinca = loadImage("vinca.jpg")
  Ani = loadImage("Ani.jpg")
  nazwa = loadImage("nazwa.jpg")
  ahmad = loadImage("ahmad.jpg")
 
  cocogoose = loadFont('Cocogoose Pro-trial.ttf'); 
  cocogoose1 = loadFont('Cocogoose Pro Light-trial.ttf');
  josefin = loadFont('JosefinSans-Medium.ttf');
  josefin2 = loadFont('JosefinSans-Regular.ttf');
  josefin3 = loadFont('JosefinSans-Light.ttf');
  
//BAGIAN SIMULASI
  home2=loadImage("air.png")
  
//BAGIAN SIMULASI 2
  home=loadImage("air.png")
}

function setup(){
  createCanvas(1350 , 3720);
  background("#421f38")
  image(bg, 0, 0, 1350, 300);
  image(logo, 650, -40, 120, 120);
  image(bgimage, 60, 2340, 300, 350);
  image(fauzi, 160, 2430, 90, 120);
  image(bgimage, 235, 2340, 300, 350);
  image(vinca, 340, 2430, 90, 120);
  image(bgimage, 410, 2340, 300, 350);
  image(Ani, 515, 2430, 90, 120);
  image(bgimage, 585, 2340, 300, 350);
  image(maratus, 690, 2430, 90, 120);
  image(bgimage, 760, 2340, 300, 350);
  image(nazwa, 860, 2430, 90, 120);
  image(bgimage, 935, 2340, 300, 350);
  image(ahmad, 1040, 2430, 90, 120);
  image(question, 50, 340, 160, 160);
  image(pnjlsn,1090,700,160,160);
  image(dapus, 650, 1900, 250, 250);

//------------------------------------------------------------//
//BAGIAN SIMULASI 1
  
 //input frekuensi
  u=createInput(0.01)
  u.position(385, 695)
  u.changed(frek2)
  frek2();
  
function frek2(){
   frekuensi2 = (u.value())
}
  
//input amplitudo
  q=createInput(30)
  q.position(385, 750)
  q.changed(amplitudo2)
  amplitudo2();
  
function amplitudo2(){
   amp2 = (q.value())
}
  
//input k
  f=createInput(0.1)
  f.position(385, 805)
  f.changed(kpegas2)
  kpegas2();
  
function kpegas2(){
   k2 = (f.value())
}
  
// mengatur skala plot
  plotData2.push(x2); // memasukkan posisi awal ke dalam data plot
  for (var i = 0; i < 100; i++) {
    plotData2.push(0); // mengisi data plot dengan 0
  } 
  
///BAGIAN SIMULASI 2
  
//input frekuensi
  p=createInput(0.01)
  p.position(385, 1115)
  p.changed(frek)
  frek();
  
function frek(){
   frekuensi = (p.value())
}
  
//input amplitudo
  l=createInput(30)
  l.position(385, 1170)
  l.changed(amplitudo)
  amplitudo();
  
function amplitudo(){
   amp = (l.value())
}

//input k
  g=createInput(0.1)
  g.position(385, 1225)
  g.changed(kpegas)
  kpegas();
  
function kpegas(){
   k = (g.value())
}

//input redaman
  t=createInput(5)
  t.position(385, 1280)
  t.changed(damp)
  damp();
  
function damp(){
   damping = (t.value())
}

// mengatur skala plot
  plotData.push(x); // memasukkan posisi awal ke dalam data plot
  for (var i = 0; i < 100; i++) {
    plotData.push(0); // mengisi data plot dengan 0
  }
}

function draw(){
  
//JUDUL
  textSize(56);
  textAlign(CENTER);
  textFont(cocogoose);
  fill("white");
  noStroke();
  text("SIMULASI GAYA PEMULIH", 697, 152);
  
  textSize(56);
  textAlign(CENTER);
  textFont(cocogoose);
  fill("#09499F");
  noStroke();
  text("SIMULASI GAYA PEMULIH", 700, 150);
  
//SUBJUDUL
  textSize(17);
  textAlign(CENTER);
  textFont(cocogoose);
  fill("#09499F");
  stroke("white");
  strokeWeight(3);
  text("SIMULASI GELOMBANG LAUT DAN ALAT PEREDAM GELOMBANG LAUT PADA TSUNAMI", 705, 170);
  
/////////////////////////////////////////////PROFIL DATA bagian bawah//////////////////////////////////////////////////
  
  fill("#09499F");
  noStroke()
  rect(530, 2310,300,40,20);

  textFont(cocogoose);
  fill("white");
  noStroke();
  text("Anggota Kelompok Dua :", 670, 2337,);

  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Ikhwan Fauzi", 210, 2412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Ikhwan Fauzi", 212, 2410 )
  text("1 2 2 1 6 0 0 0 4", 210, 2575)
  
 
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Vinca Rahmawati", 383, 2412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Vinca Rahmawati", 384, 2410 )
  text("1 2 2 1 6 0 0 0 8", 385, 2575)
  
  
  textSize(13);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Ani Riswanti", 558, 2412 )
  
  textSize(13);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Ani Riswanti", 559, 2410 )
  text("1 2 2 1 6 0 0 1 5", 560, 2575)
  
  
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Mar'atus Sholikhah", 733, 2412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Mar'atus Sholikhah", 734, 2410 )
  text("1 2 2 1 6 0 0 1 9", 735, 2575)
  
  
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Nazwa Alya M", 908, 2412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Nazwa Alya M", 909, 2410 )
  text("1 2 2 1 6 0 0 3 4", 910, 2575)
  

  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Ahmad Ferdiansyah", 1083, 2412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Ahmad Ferdiansyah", 1084, 2410 )
  text("1 2 2 1 6 0 0 6 9", 1085, 2575)
  
  
  fill("#09499F");
  noStroke()
  rect(100,2630,1150,30,10);
  
  textSize(17);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("note : web simulasi ini dibuat untuk memenuhi tugas besar mata kuliah Visualisasi dalam Sains program studi Matematika Institut Teknologi Sumatera", 670, 2650);
  
//////////////////////////////////////////////BAGIAN INTERMEZZO ATAS///////////////////////////////////////////////////////////////
  
  //SHAPE
  let lbcolor = color('#09499F');
  fill(lbcolor);
  noStroke();
  rect( 250, 350, 1015, 150, 20);
  
  //TEXT JUDUL
  textSize(24);
  textAlign(LEFT)
  textFont(josefin2);
  fill("white");
  noStroke();
  text("Gelombang Laut Besar Mengakibatkan Tsunami", 260, 380);

  //TEXT ISI
  textSize(16);
  textAlign(LEFT)
  textFont(josefin2);
  fill("white");
  noStroke();
  text("Tsunami adalah gempa bawah laut yang memiliki panjang gelonbang sangat tinggi. Tsunami dapat menyebabkan berbangai kerugian ", 260, 403);
  text("mulai dari material sampai nyawa. Dengan menggunakan gaya pemulih kita dapat mengembalikan gelombang laut ke posisi stabil.", 260, 421);
  text("Simulasi ini diperlukan untuk mengetahui gelombang yang terbentuk sebelum dan sesudah terdapat gaya peredam dari gaya pemulih. ", 260, 439);
  
  

//PERSAMAAN  
  textSize(34);
  textAlign(RIGHT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Persamaan", 910, 1600);
  
  textSize(34);
  textAlign(RIGHT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Persamaan", 912, 1600);
  
  image(pers, 400, 1200, 1030,1050);
  image(pb, 750, 1650, 250, 120);
  image(pd, 750, 1820, 500, 120);
  
//BEDA
  // textSize(24);
  // textAlign(LEFT)
  // textFont(josefin);
  // fill("#09499F");
  // noStroke();
  // text("a. Beda", 750, 1650);
  
  textSize(24);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("a. Beda", 752, 1642);
  
//   //DIFERENSIAL
//   textSize(24);
//   textAlign(LEFT)
//   textFont(josefin);
//   fill("#09499F");
//   noStroke();
//   text("b. Diferensial", 750, 1302);
  
  textSize(24);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("b. Diferensial", 752, 1810);

  
//DAPUS
  textSize(34);
  textAlign(LEFT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Daftar Pustaka", 450, 2030);

  
  textSize(34);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Daftar Pustaka", 452, 2032);
  
  textSize(16);
  textAlign(LEFT)
  textFont(josefin2);
  fill("white");
  noStroke();
  text("[1]  A. F. P. P. Iman Noor, 'Simulasi Sederhana Redaman Gelombang Pegas,' Prosiding Seminar Nasional Sains, p. 70, 2021. ", 260, 2130);
  text("[2] 	H. S. S, 'PEMODELAN TINGKAT RESIKO BENCANA TSUNAMI PADA PEMUKIMAN DI KOTA BENGKULUMENGGUNAKAN ", 260, 2170);
  text("          SISTEM INFORMASI GEOGRAFIS,'Pusat Litbang Perumahan Dan Pemukiman, vol. 2, p. 92, 2015.", 260, 2190);
  
  fill("#09499F");
  rect(0,3276,1350,5);
  
  fill("white");
  rect(0,3280,1350,5);
  

  
  
  
  
  
  
  
//Visualisasi
  image(bmkg, 910, 520, 170, 130);
  textSize(35);
  textAlign(LEFT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Visualisasi Tsunami dengan Redaman", 300, 570);
  text("        dan Tanpa Redaman", 350, 610);
  
  textSize(35);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Visualisasi Tsunami dengan Redaman", 302, 572);
  text("        dan Tanpa Redaman", 352, 612);
  
  textSize(40);
  textAlign(LEFT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Penjelasan", 875, 825);
  
  textSize(40);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Penjelasan", 877, 827);
  
  textSize(18);
  textAlign(LEFT)
  textFont(josefin3);
  fill("white");
  noStroke();

  text("Dengan wilayah yang sangat dipengaruhi oleh pergerakan lem-", 820, 895);
  text("peng tektonik ini, Indonesia sering mengalami tsunami. ", 820, 915);
  text("Tsunami yang terjadi di Indonesia sebagian besar disebabkan", 820, 935);
  text("oleh gempa-gempa tektonik di sepanjang daerah subduksi dan", 820, 955);
  text("dan daerah seismik aktif lainnya. Tsunami terbesar yang pernah", 820, 975);
  text("terjadi di Indonesia ialah Tsunami yang melanda Aceh dengan skala ", 820, 995);
  text("9.1-9.3. Kekuatannya bervariasi mulai dari magnitude sebesar 3,0", 820, 1015);
  text("Sebanyak 227.898 orang meninggal dunia akibat bencana dengan ", 820, 1035);
  text("kerugian mencapai 51,4 trilliun. Oleh karna itu perlunya simulasi", 820, 1055);
  text(" alat peredam untuk mengembalikan gelombang air menjadi stabil.", 820, 1075);
  text("Saat terjadi tsunami, gelombang laut sangatlah tinggi akibat", 820, 1105);
  text("adanya gempa dalam air. Pada simulasi ini gelombang air tanpa", 820, 1125);
  text("redaman akan lebih tidak terkontrol dibandingan terdapat", 820, 1145);
  text("redaman. Pada simulasi di samping, terlihat adanya pengurangan", 820, 1165);
  text("energi yang dihasilkan pegas. Ini menunjukan bahwa perubahan", 820, 1185);
  text("deformasi pegas berkurang seiring dengan waktu, sehingga pegas", 820, 1205);
  text("akan kembali ke posisi awal dengan lebih lambat dibandingkan", 820, 1225);
  text("dengan pegas tanpa redaman.", 820, 1245);
  
  
  
  
  
 
  
//------------------------BAGIAN SIMULASI-------------------------//

///////////////////////TANPA REDAMAN//////////////////////////////
  noStroke()
  fill("white")
  rect(0,660,750,375,20);
  
//penamaan input
  textSize(15);
  textAlign(LEFT)
  fill("black");
  noStroke();
  text("Masukan nilai frekuensi Tsunami", 385, 685);
  text("Masukan nilai amplitudo Tsunami", 385, 740);
  text("Masukan nilai konstanta pegas", 385, 795);
  
  // menghitung gaya total
  var f_spring2 = -k2 * x2; // gaya pegas
  var f_damping2 = -damping2 * v2; // gaya redaman
  var f_ext2 = amp2 * sin(frameCount / frekuensi2);
  var f_total2 = f_spring2 + f_damping2 + f_ext2; // gaya total

  // menghitung percepatan
  a2 = f_total2 / mass2;

  // menghitung kecepatan dan posisi baru
  v2 = v2 + a2 * 0.3; // 0.3 adalah delta waktu
  x2 = x2 + v2 * 0.3;

  // menambahkan posisi baru ke dalam data plot
  plotData2.push(x2);

  // menghapus data plot yang paling lama
  if (plotData2.length > 100) {
    plotData2.shift();
  }

  // menggambar grafik
  stroke("red");
  strokeWeight(5);
  noFill();
  beginShape();
  for (var i = 0; i < plotData2.length; i++) {
    var x_plot2 = map(i, 0, plotData2.length - 1, 375, 745);
    var y_plot2 = map(plotData2[i], -80, 80, 760,1060 );
    vertex(x_plot2, y_plot2);
  }
  endShape();

  // menggambar massa dan pegas
  stroke(0);
  strokeWeight(2);
  fill(255);
  image(home2, x2, 685, mass2 * 40, mass2 * 35);
  
  stroke(0);
  strokeWeight(5);
  line(375, 662, 375,1033);
  
  
/////////////////////PAKAI REDAMAN///////////////////////////
  noStroke()
  fill("white")
  rect(0,1080,750,430,20);
  
  textSize(15);
  textAlign(LEFT)
  fill("black");
  noStroke();
  text("Masukan nilai frekuensi Tsunami", 385, 1105);
  text("Masukan nilai amplitudo Tsunami", 385, 1160);
  text("Masukan nilai konstanta pegas", 385, 1215);
  text("Masukan nilai redaman", 385,1270);
  
// menghitung gaya total
  var f_spring = -k * x; // gaya pegas
  var f_damping = -damping * v; // gaya redaman
  var f_ext = amp * sin(frameCount / frekuensi);
  var f_total = f_spring + f_damping + f_ext; // gaya total

// menghitung percepatan
  a = f_total / mass;

// menghitung kecepatan dan posisi baru
  v = v + a * 0.3; // 0.3 adalah delta waktu
  x = x + v * 0.3; 

// menambahkan posisi baru ke dalam data plot
  plotData.push(x);

// menghapus data plot yang paling lama
  if (plotData.length > 100) {
    plotData.shift();
  }

// menggambar grafik
  stroke("red");
  strokeWeight(5);
  noFill();
  beginShape();
  for (var i = 0; i < plotData.length; i++) {
    var x_plot = map(i, 0, plotData.length - 1, 375, 745);
    var y_plot = map(plotData[i], -80, 80, 1225, 1525);
    vertex(x_plot, y_plot);
  }
  endShape();

// menggambar massa dan pegas
  stroke(0);
  strokeWeight(2);
  fill(255);
  image(home, x, 1100, mass * 40, mass * 35);
  
  stroke(0);
  strokeWeight(5);
  line(375, 1082, 375, 1508); 
}




//rgb(120,31,31)rgb(58,30,30)rgb(137,68,68)rgb(117,86,86)rgb(12,11,11)