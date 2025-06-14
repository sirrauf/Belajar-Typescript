var Orang = /** @class */ (function () {
    function Orang(nama) {
        //variable class nama tidak bisa diganti atau tidak bisa diubah
        this.nama = nama;
    }
    Orang.prototype.ambilNama = function () {
        return this.nama;
    };
    return Orang;
}());
var orang = new Orang("Baby Mafia");
console.log(orang.ambilNama());
