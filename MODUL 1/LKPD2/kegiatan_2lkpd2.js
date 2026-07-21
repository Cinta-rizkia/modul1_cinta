class Rekening {
  #saldo;

  constructor() {
    this.#saldo = 0;
  }
  setor(jumlah) {
    if (jumlah > 0) {
      this.#saldo += jumlah;
    } else {
      console.log("Jumlah setoran harus lebih dari 0");
    }
  }
  tarik(jumlah) {
    if (jumlah <= this.#saldo) {
      this.#saldo -= jumlah;
    } else {
      console.log("Saldo tidak cukup");
    }
  }
  getSaldo() {
    return this.#saldo;
  }
}
const rekeningSaya = new Rekening();
rekeningSaya.setor(500000); 
console.log("Saldo setelah setor:", rekeningSaya.getSaldo()); 
rekeningSaya.tarik(200000); 
console.log("Saldo setelah tarik:", rekeningSaya.getSaldo()); 
rekeningSaya.tarik(400000); 
