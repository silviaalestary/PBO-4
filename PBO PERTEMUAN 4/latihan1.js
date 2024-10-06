class Kapal {
    constructor(nama, jenis, kapasitas, tujuan) {
        this.nama = nama
        this.jenis = jenis
        this.kapasitas = kapasitas
        this.tujuan = tujuan
        this._status = 'tersedia'
    }

    infoKapal() {
        return `kapal ini ${this.nama} berjenis kapal ${this.jenis} dengan kapasitas ${this.kapasitas} dengan tujuan ${this.tujuan}`}  
}

class kodeKapal extends Kapal{
    constructor(nama, jenis, kapasitas, tujuan, kodeKapal) {
        super(nama, jenis, kapasitas, tujuan)
        this.kodeKapal = kodeKapal
    }
    kodekapal(){
        
        return `dengan kode kapal ${this.kodeKapal}`
    }
}

let kapalPenumpang = new kodeKapal('Kapal penumpang', 'Ferry',  100, 'Angke', 401)
console.log(kapalPenumpang.infoKapal())
console.log(kapalPenumpang.kodekapal())