import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contoh',
  templateUrl: './contoh.page.html',
  styleUrls: ['./contoh.page.scss'],
})
export class ContohPage implements OnInit {
  title : string = 'nama buah';
  buah: any = [
    {nama: 'jambu', rasa: 'manis', harga: 1000},
    {nama: 'jeruk', rasa: 'asam', harga: 2000}
  ]

  title_2 : string = 'nama sayuran';
  sayuran: any = [
    {nama: 'bayam', warna: 'hijau', harga: 1200},
    {nama: 'tomat', warna: 'merah', harga: 1300}
  ]

  title_3 : string = 'nama ikan';
  ikan : any =[
    {nama: 'tuna', bentuk: 'besar', harga: 1500},
    {nama: 'togkol', bentuk: 'kecil', harga: 3000}
  ]

  cart: any[] = [];
  state = 0;
  total = 0;
  constructor() { }

  ngOnInit() {
  }
  open(state){
    this.state = state;
  }

  add(item){
    this.total = this.total + item.harga;
    this.cart.push(item);
  }

  deleteItem(item){
    this.cart.pop(item);
    this.total = this.total - item.harga;
  }

}

