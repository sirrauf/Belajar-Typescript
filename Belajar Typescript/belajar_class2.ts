class Orang {
 
  public constructor(private nama: string) {}

  public ambilNama(): string {
    return this.nama;
  }
}

const orang = new Orang("Rauf");
console.log(orang.ambilNama());