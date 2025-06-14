class Orang {
  private readonly nama: string;

  public constructor(nama: string) {
    //variable class nama tidak bisa diganti atau tidak bisa diubah
    this.nama = nama;
  }

  public ambilNama(): string {
    return this.nama;
  }
}

const orang = new Orang("Baby Mafia");
console.log(orang.ambilNama());