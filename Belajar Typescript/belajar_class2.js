var Orang = /** @class */ (function () {
    function Orang(nama) {
        this.nama = nama;
    }
    Orang.prototype.ambilNama = function () {
        return this.nama;
    };
    return Orang;
}());
var orang = new Orang("Rauf");
console.log(orang.ambilNama());
