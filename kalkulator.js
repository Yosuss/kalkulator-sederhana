// let bts = document.querySelector(`.a`);
// bts.addEventListener("click", () => {
//     document.body.classList.toggle("active");
//     if(document.body.classList.contains("active")){
//         bts.innerHTML = "C";
//     } else {
//         bts.innerHTML = "C ";
//     } 
// });
//  penjumlahan

function tambah (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = parseInt (nilai1) + parseInt (nilai2);
    document.getElementById("hasil").innerHTML = hasil;

}

// pengurangan

function kurang (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = parseInt (nilai1) - parseInt (nilai2);
    document.getElementById("hasil").innerHTML = hasil;
}

// perkalian

function kali (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = parseInt (nilai1) * parseInt (nilai2);
    document.getElementById("hasil").innerHTML = hasil;

}

// pembagian

function bagi (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = parseInt (nilai1) / parseInt (nilai2);
    document.getElementById("hasil").innerHTML = hasil;

}

// meghitung pangkat

function pangkat (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = Math.pow(nilai1, nilai2);
    document.getElementById("hasil").innerHTML = hasil;

}

// lebihDari

var lebihDari = function (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = parseInt (nilai1) > parseInt (nilai2);
    document.getElementById("hasil").innerHTML = hasil;
}

// lebihDariSamaDengan

var lebihDariSamaDengan = function (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = parseInt (nilai1) >= parseInt (nilai2);
    document.getElementById("hasil").innerHTML = hasil;
}

// samaDengan

var samaDengan = function (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = parseInt (nilai1) == parseInt (nilai2);
    document.getElementById("hasil").innerHTML = hasil;
}

// kurangDari

var kurangDari = function (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = parseInt (nilai1) < parseInt (nilai2);
    document.getElementById("hasil").innerHTML = hasil;
}

// kurangDariSamaDengan

var kurangDariSamaDengan = function (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = parseInt (nilai1) <= parseInt (nilai2);
    document.getElementById("hasil").innerHTML = hasil;
}

// tidakSamaDengan

var tidakSamaDengan = function (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = parseInt (nilai1) != parseInt (nilai2);
    document.getElementById("hasil").innerHTML = hasil;
}

// cos

function cos (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = Math.cos(nilai1 || nilai2);
    document.getElementById("hasil").innerHTML = hasil;
}

// sin

function sin (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = Math.sin(nilai1 || nilai2);
    document.getElementById("hasil").innerHTML = hasil;
}

// log

function log (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = Math.log(nilai1 || nilai2);
    document.getElementById("hasil").innerHTML = hasil;
}

// tan

function tan (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = Math.tan(nilai1 || nilai2);
    document.getElementById("hasil").innerHTML = hasil;

}

// modulus

function modulus (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = parseInt (nilai1) % parseInt (nilai2);
    document.getElementById("hasil").innerHTML = hasil;

}

// concat

function concat (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = nilai1 + nilai2;
    document.getElementById("hasil").innerHTML = hasil;

}

// akar

function akar (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = Math.sqrt (nilai1 || nilai2);
    document.getElementById("hasil").innerHTML = hasil;
}

// and

function and (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = nilai1 && nilai2;
    document.getElementById("hasil").innerHTML = hasil;
}

// or

function or (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = nilai1 || nilai2;
    document.getElementById("hasil").innerHTML = hasil;
}

// not

function not (){
    var nilai1 = document.getElementById("angka1").value;
    var nilai2 = document.getElementById("angka2").value;
    var hasil = nilai1 != nilai2;
    document.getElementById("hasil").innerHTML = hasil;
}
