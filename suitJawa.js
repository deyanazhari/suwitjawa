var tanya = true;
while (true) {
    // menangkap pilihan player
    var p = prompt('pilih : gajah,semut,orang');
    //menangkap piliham komputer
    var comp = Math.random();
    if (comp < 0.34) {
        comp = 'gajah';

    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    //menentukan rules
    var hasil = '';
    if (p == comp) {
        hasil = 'seri';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //hasill = 'menang';
        //} else {
        //  hasil = 'kalah';
        //}
        hasil = (comp = 'orang') ? 'menang' : 'kalah';
    } else if (p = 'orang') {
        hasil = (comp == 'gajah') ? 'kalah!' : ' Menang';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'kalah' : 'menang';
    } else {
        hasil = "masukan pilihan yang salah";
    }

    alert('kamu memilih ' + p + ' dan komputer memilih : ' + comp + '\nmaka hasilnya : kamu' + hasil)
    tanya = confirm('lagi?');
}